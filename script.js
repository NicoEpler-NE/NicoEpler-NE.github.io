// ============================================
// JAVASCRIPT FOR PORTFOLIO WEBSITE
// This script populates content from data.js
// ============================================

// Prevent browsers from restoring the previous scroll position on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateContent();
    initPageNavigation();
    initScrollAnimations();
    resetToHomeTop();
});

// Reset to the top of the home page on load/reload
function resetToHomeTop() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    navLinks.forEach(l => l.classList.remove('active'));
    pageSections.forEach(s => s.classList.remove('active'));
    
    const homeNavLink = document.querySelector('a[href="#home"].nav-link');
    const homeSection = document.getElementById('home');
    if (homeNavLink) homeNavLink.classList.add('active');
    if (homeSection) homeSection.classList.add('active');
    
    // Clear any URL hash
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    
    // Jump to the top immediately, then again once the page has fully loaded
    function jumpToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    jumpToTop();
    window.addEventListener('load', jumpToTop);
    setTimeout(jumpToTop, 50);
}

// Populate all content from data.js
function populateContent() {
    // Personal Information
    document.getElementById('name').textContent = portfolioData.personal.name;
    document.getElementById('title').textContent = portfolioData.personal.title;
    
    // Home page content
    document.getElementById('hero-intro').innerHTML = portfolioData.personal.intro.replace(/\n\n/g, '<br><br>');
    
    // Focus areas
    const focusAreasContainer = document.getElementById('focus-areas');
    focusAreasContainer.innerHTML = '';
    portfolioData.personal.focusAreas.forEach(area => {
        const areaCard = document.createElement('div');
        areaCard.className = 'focus-card';
        areaCard.textContent = area;
        focusAreasContainer.appendChild(areaCard);
    });
    
    // Home publications
    populateHomePublications();
    
    // Home projects
    populateHomeProjects();
    
    // Home experience
    populateHomeExperience();
    
    // Home profile
    populateHomeProfile();
    
    // Current role
    const currentRole = portfolioData.personal.currentRole;
    const currentRoleContainer = document.getElementById('current-role');
    currentRoleContainer.innerHTML = `
        <h3 class="current-role-title">Current Role</h3>
        <div class="current-role-content">
            <div class="role-position">${currentRole.title}</div>
            <div class="role-company">${currentRole.company}</div>
            <div class="role-location">${currentRole.location}</div>
            <div class="role-period">${currentRole.period}</div>
        </div>
    `;
    
    // Projects page
    populateProjects();
    
    // Experience page
    populateExperience();
    
    // Profile page
    populateProfile();
}

// Populate projects
function populateProjects() {
    const featuredContainer = document.getElementById('featured-project');
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        if (project.featured) {
            const imagePath = project.image ? `images/${project.image}` : '';
            const imageHtml = imagePath ? `<img src="${imagePath}" alt="${project.title}" class="featured-project-image">` : '';
            const techHtml = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const pubLink = project.publication ? `<a href="${project.publication}" target="_blank" class="publication-link">View Publication →</a>` : '';
            
            featuredContainer.innerHTML = `
                <h2 class="featured-label">Featured Project</h2>
                <div class="featured-project-card" id="project-card-${index}">
                    ${imageHtml}
                    <div class="featured-project-content">
                        <h3 class="featured-project-title">${project.title}</h3>
                        <div class="featured-project-role">${project.role}</div>
                        <p class="featured-project-description">${project.description}</p>
                        <div class="featured-project-technologies">
                            <strong>Technologies:</strong>
                            <div class="tech-tags">${techHtml}</div>
                        </div>
                        <div class="featured-project-results">
                            <strong>Results:</strong>
                            <p>${project.results}</p>
                        </div>
                        ${pubLink}
                    </div>
                </div>
            `;
        } else {
            const card = createProjectCard(project, index);
            projectsGrid.appendChild(card);
        }
    });
    
    // Hobby / side projects
    const hobbyProjectsGrid = document.getElementById('hobby-projects-grid');
    if (hobbyProjectsGrid && portfolioData.hobbyProjects) {
        hobbyProjectsGrid.innerHTML = '';
        portfolioData.hobbyProjects.forEach(project => {
            const card = createProjectCard(project);
            hobbyProjectsGrid.appendChild(card);
        });
    }
}

// Populate experience
function populateExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '';
    portfolioData.experience.forEach((exp, index) => {
        const item = createExperienceTimelineItem(exp, index);
        experienceTimeline.appendChild(item);
    });
    
    // Publications
    if (portfolioData.publications) {
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = '';
        portfolioData.publications.forEach(pub => {
            const item = createPublicationItem(pub);
            publicationsList.appendChild(item);
        });
    }

    // Other Roles
    if (portfolioData.otherRoles) {
        const otherRolesList = document.getElementById('other-roles-list');
        otherRolesList.innerHTML = '';
        portfolioData.otherRoles.forEach(role => {
            const item = document.createElement('div');
            item.className = 'other-role-item';
            item.innerHTML = `
                <div class="other-role-title">${role.title}</div>
                ${role.year ? `<div class="other-role-year">${role.year}</div>` : ''}
            `;
            otherRolesList.appendChild(item);
        });
    }
}

// Populate profile
function populateProfile() {
    // Education
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = '';
    portfolioData.education.forEach(edu => {
        const item = createEducationTimelineItem(edu);
        educationTimeline.appendChild(item);
    });
    
    // Skills
    const skillsContainer = document.getElementById('skills-categories');
    skillsContainer.innerHTML = '';
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.innerHTML = `
            <h4 class="skill-category-title">${category}</h4>
            <div class="skill-tags">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(categoryDiv);
    });
    
    // Achievements
    const achievementsList = document.getElementById('achievements-list');
    achievementsList.innerHTML = '';
    portfolioData.achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = 'achievement-item';
        item.innerHTML = `
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-year">${achievement.year}</div>
            <div class="achievement-description">${achievement.description}</div>
        `;
        achievementsList.appendChild(item);
    });
    
    // Languages
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = '';
    portfolioData.personal.languages.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        item.innerHTML = `
            <span class="language-name">${lang.name}</span>
            <span class="language-level">${lang.level}</span>
        `;
        languagesList.appendChild(item);
    });
    
    // Interests
    const interestsList = document.getElementById('interests-list');
    interestsList.innerHTML = '';
    portfolioData.personal.interests.forEach(interest => {
        const item = document.createElement('span');
        item.className = 'interest-tag';
        item.textContent = interest;
        interestsList.appendChild(item);
    });
}

// Create experience timeline item
function createExperienceTimelineItem(exp, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    if (typeof index === 'number') {
        item.id = `experience-item-${index}`;
    }
    
    const techHtml = exp.technologies ? exp.technologies.map(t => `<span class="tech-tag-small">${t}</span>`).join('') : '';
    
    // Handle description as array or string
    let descriptionHtml;
    if (Array.isArray(exp.description)) {
        descriptionHtml = exp.description.map(desc => `<li>${desc}</li>`).join('');
        descriptionHtml = `<ul class="timeline-description-list">${descriptionHtml}</ul>`;
    } else {
        descriptionHtml = `<div class="timeline-description">${exp.description}</div>`;
    }
    
    item.innerHTML = `
        <div class="timeline-date">${exp.year}</div>
        <div class="timeline-title">${exp.title}</div>
        <div class="timeline-subtitle">${exp.company}${exp.location ? ', ' + exp.location : ''}</div>
        ${descriptionHtml}
        ${techHtml ? `<div class="timeline-technologies">${techHtml}</div>` : ''}
    `;
    
    return item;
}

// Create education timeline item
function createEducationTimelineItem(edu) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
        <div class="timeline-date">${edu.year}</div>
        <div class="timeline-title">${edu.title}</div>
        <div class="timeline-subtitle">${edu.institution}</div>
        <div class="timeline-description">${edu.description}</div>
    `;
    
    return item;
}

// Create project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (typeof index === 'number') {
        card.id = `project-card-${index}`;
    }
    
    let mediaHtml = '';
    if (project.video) {
        mediaHtml = `<div class="project-image-frame"><video class="project-video" autoplay muted loop playsinline style="animation: videoBounce 8s ease-in-out infinite;"><source src="images/${project.video}" type="video/mp4"></video></div>`;
    } else if (project.image) {
        const zoomStyle = project.imageZoom ? ` style="transform: scale(${project.imageZoom});"` : '';
        mediaHtml = `<div class="project-image-frame"><img src="images/${project.image}" alt="${project.title}" class="project-image"${zoomStyle}></div>`;
    }
    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    card.innerHTML = `
        ${mediaHtml}
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-tags">${tagsHtml}</div>
    `;
    
    return card;
}

// Create publication item
function createPublicationItem(pub) {
    const item = document.createElement('a');
    item.className = 'publication-item';
    item.href = `https://doi.org/${pub.doi}`;
    item.target = '_blank';
    
    item.innerHTML = `
        <span class="publication-icon">📄</span>
        <div class="publication-content">
            <div class="publication-title">${pub.title}</div>
            <div class="publication-journal">${pub.journal}</div>
        </div>
    `;
    
    return item;
}

// Initialize page navigation
function initPageNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const projectLinks = document.querySelectorAll('.action-btn[href="#projects"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding page section
            const pageId = this.getAttribute('href').substring(1);
            const pageSection = document.getElementById(pageId);
            if (pageSection) {
                pageSection.classList.add('active');
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle all "View Projects" links
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));
            
            // Activate projects nav link and section
            const projectsNavLink = document.querySelector('a[href="#projects"].nav-link');
            const projectsSection = document.getElementById('projects');
            
            if (projectsNavLink) projectsNavLink.classList.add('active');
            if (projectsSection) projectsSection.classList.add('active');
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

// Navigate to a specific tab and scroll to a target element.
// Uses the browser's native scrollIntoView instead of a JS requestAnimationFrame
// loop calling window.scrollTo every frame. Native smooth scrolling can be handed
// off to the compositor thread, so it stays smooth even on pages with expensive
// paint work (backdrop-filter blur, fixed gradient backgrounds, etc.), where a
// manual main-thread scroll loop tends to stutter, especially in Chrome.
// Target elements get their offset via the `scroll-margin-top` CSS rule instead
// of a JS-computed pixel offset, so there's no per-call layout read needed here.
function navigateToTabAndScroll(tabId, targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const targetNavLink = document.querySelector(`a[href="#${tabId}"].nav-link`);
    const targetSection = document.getElementById(tabId);
    
    navLinks.forEach(l => l.classList.remove('active'));
    pageSections.forEach(s => s.classList.remove('active'));
    
    if (targetNavLink) targetNavLink.classList.add('active');
    if (targetSection) targetSection.classList.add('active');
    
    // The section just swapped from underneath us, so the page is often much
    // shorter than it was a moment ago. If we were scrolled deep into the old
    // section, the browser immediately clamps scrollTop to the new (shorter)
    // max — which can visually land near the bottom of the new section for a
    // frame before our own scroll runs. Snapping back to the top here, in the
    // same synchronous tick as the class swap, happens before that frame is
    // ever painted, so the visible motion is just top -> target, not
    // top -> clamped bottom -> target.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = reducedMotion ? 'auto' : 'smooth';
    
    if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            // Let the section finish laying out at its new scroll-0 position
            // before starting the smooth scroll to the target.
            requestAnimationFrame(() => {
                target.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
            });
            return;
        }
    }
    
    // No specific target within the section: just go to the top of the page.
    window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
}

// Initialize scroll animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.profile-section, .featured-project-card, .project-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Populate home publications
function populateHomePublications() {
    const container = document.getElementById('home-publications-list');
    container.innerHTML = '';
    
    if (portfolioData.publications && portfolioData.publications.length > 0) {
        portfolioData.publications.forEach(pub => {
            const item = document.createElement('a');
            item.className = 'home-publication-item';
            item.href = `https://doi.org/${pub.doi}`;
            item.target = '_blank';
            item.rel = 'noopener noreferrer';
            item.innerHTML = `
                <span class="home-icon">📄</span>
                <div class="home-publication-content">
                    <div class="home-publication-title">${pub.title}</div>
                    <div class="home-publication-journal">${pub.journal}</div>
                </div>
            `;
            container.appendChild(item);
        });
    } else {
        container.innerHTML = '<div class="home-empty">No publications yet</div>';
    }
}

// Populate home projects
function populateHomeProjects() {
    const container = document.getElementById('home-projects-list');
    container.innerHTML = '';
    
    // Create grid container
    const grid = document.createElement('div');
    grid.className = 'home-projects-grid';
    
    portfolioData.projects.slice(0, 7).forEach((project, index) => {
        const item = document.createElement('a');
        item.className = 'home-project-card';
        item.href = '#projects';
        let mediaHtml;
        if (project.video) {
            mediaHtml = `<video src="images/${project.video}" class="home-project-image" autoplay muted loop playsinline></video>`;
        } else if (project.image) {
            mediaHtml = `<img src="images/${project.image}" alt="${project.title}" class="home-project-image">`;
        } else {
            mediaHtml = '<div class="home-project-placeholder">🚀</div>';
        }
        item.innerHTML = `
            ${mediaHtml}
            <div class="home-project-info">
                <div class="home-project-title">${project.title}</div>
            </div>
        `;
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToTabAndScroll('projects', `project-card-${index}`);
        });
        grid.appendChild(item);
    });
    
    container.appendChild(grid);
    
    // Add view all button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'home-projects-button';
    buttonContainer.innerHTML = `<a href="#projects" class="action-btn secondary">View All Projects →</a>`;
    container.appendChild(buttonContainer);
}

// Populate home experience
function populateHomeExperience() {
    const container = document.getElementById('home-experience-list');
    container.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const item = document.createElement('a');
        item.className = 'home-experience-item';
        item.href = '#experience';
        const imagePath = exp.image ? `images/${exp.image}` : 'images/UASE.jpg';
        item.innerHTML = `
            <img src="${imagePath}" alt="UAS" class="home-experience-icon">
            <div class="home-experience-content">
                <div class="home-experience-title">${exp.title}</div>
                <div class="home-experience-company">${exp.company}</div>
                <div class="home-experience-year">${exp.year}</div>
            </div>
        `;
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToTabAndScroll('experience', `experience-item-${index}`);
        });
        container.appendChild(item);
    });
}

// Populate home profile
function populateHomeProfile() {
    const container = document.getElementById('home-profile-list');
    container.innerHTML = '';
    
    const profileSections = [
        { title: 'Education', icon: '🎓', count: portfolioData.education.length, target: 'profile-education' },
        { title: 'Technical Skills', icon: '⚡', count: Object.keys(portfolioData.skills).length, target: 'profile-skills' },
        { title: 'Achievements', icon: '🏆', count: portfolioData.achievements.length, target: 'profile-achievements' },
        { title: 'Languages', icon: '🌍', count: portfolioData.personal.languages.length, target: 'profile-languages' },
        { title: 'Interests', icon: '❤️', count: portfolioData.personal.interests.length, target: 'profile-interests' }
    ];
    
    profileSections.forEach(section => {
        const item = document.createElement('a');
        item.className = 'home-profile-item';
        item.href = '#profile';
        item.innerHTML = `
            <span class="home-icon">${section.icon}</span>
            <div class="home-profile-content">
                <div class="home-profile-title">${section.title}</div>
            </div>
        `;
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToTabAndScroll('profile', section.target);
        });
        container.appendChild(item);
    });
    
    // Add view profile button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'home-profile-button';
    const button = document.createElement('a');
    button.className = 'action-btn secondary';
    button.href = '#profile';
    button.textContent = 'View Profile →';
    button.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToTabAndScroll('profile', null);
    });
    buttonContainer.appendChild(button);
    container.appendChild(buttonContainer);
}
