// ============================================
// JAVASCRIPT FOR PORTFOLIO WEBSITE
// This script populates content from data.js
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateContent();
    initScrollAnimations();
    initTabNavigation();
});

// Populate all content from data.js
function populateContent() {
    // Personal Information
    document.getElementById('name').textContent = portfolioData.personal.name;
    document.getElementById('title').textContent = portfolioData.personal.title;
    document.getElementById('email').textContent = portfolioData.personal.email;
    if (portfolioData.personal.linkedin) {
        document.getElementById('linkedin').href = portfolioData.personal.linkedin;
    }
    document.getElementById('about-text').textContent = portfolioData.personal.about;
    
    // Compact Header
    document.getElementById('compact-name').textContent = portfolioData.personal.name;
    document.getElementById('compact-title').textContent = portfolioData.personal.title;

    // Languages
    const languagesContainer = document.querySelector('.languages');
    languagesContainer.innerHTML = '';
    portfolioData.personal.languages.forEach(lang => {
        const langTag = document.createElement('span');
        langTag.className = 'language-tag';
        langTag.textContent = `${lang.name} (${lang.level})`;
        languagesContainer.appendChild(langTag);
    });

    // Education Timeline
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = '';
    portfolioData.education.forEach(edu => {
        const item = createTimelineItem(edu.year, edu.title, edu.institution, edu.description);
        educationTimeline.appendChild(item);
    });

    // Experience Timeline
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '';
    portfolioData.experience.forEach(exp => {
        const item = createTimelineItem(exp.year, exp.title, exp.company, exp.description);
        experienceTimeline.appendChild(item);
    });

    // Skills
    populateSkills('software-skills', portfolioData.skills.software);
    populateSkills('technical-skills', portfolioData.skills.technical);
    populateSkills('soft-skills', portfolioData.skills.soft);

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    portfolioData.projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
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

    // Achievements
    const achievementsGrid = document.getElementById('achievements-grid');
    achievementsGrid.innerHTML = '';
    portfolioData.achievements.forEach(achievement => {
        const item = createAchievementItem(achievement);
        achievementsGrid.appendChild(item);
    });
}

// Create a timeline item
function createTimelineItem(year, title, subtitle, description) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
        <div class="timeline-date">${year}</div>
        <div class="timeline-title">${title}</div>
        <div class="timeline-subtitle">${subtitle}</div>
        <div class="timeline-description">${description}</div>
    `;
    
    return item;
}

// Populate skills in a category
function populateSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        container.appendChild(tag);
    });
}

// Create a project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Use image from project data or fallback to generated filename
    const imagePath = project.image ? `images/${project.image}` : '';
    
    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    const imageHtml = imagePath ? `<img src="${imagePath}" alt="${project.title}" class="project-image">` : '';
    
    card.innerHTML = `
        ${imageHtml}
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-tags">${tagsHtml}</div>
    `;
    
    return card;
}

// Create a publication item
function createPublicationItem(pub) {
    const item = document.createElement('div');
    item.className = 'publication-item';
    
    item.innerHTML = `
        <div class="publication-title">${pub.title}</div>
        <div class="publication-authors">${pub.authors}</div>
        <div class="publication-journal">${pub.journal}</div>
        <div class="publication-doi">DOI: ${pub.doi}</div>
    `;
    
    return item;
}

// Create an achievement item
function createAchievementItem(achievement) {
    const item = document.createElement('div');
    item.className = 'achievement-item';
    
    item.innerHTML = `
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-year">${achievement.year}</div>
        <div class="achievement-description">${achievement.description}</div>
    `;
    
    return item;
}

// Initialize scroll animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
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

// Initialize tab navigation
function initTabNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const hero = document.querySelector('.hero');
    const compactHeader = document.getElementById('compact-header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and contents
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
                
                // Toggle hero and compact header based on tab
                if (tabId === 'overview') {
                    hero.classList.remove('hidden');
                    compactHeader.classList.remove('active');
                } else {
                    hero.classList.add('hidden');
                    compactHeader.classList.add('active');
                }
                
                // Scroll to top of main content
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}
