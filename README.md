# Nico Epler - Portfolio Website

## Viewing the website on a mobile device

To view the website on your phone, make sure your phone and computer are connected to the same Wi-Fi network.

1. Open Windows PowerShell and run:

```bash
ipconfig
```

Find the `IPv4 Address` of your computer, for example:

```bash
192.168.1.42
```

2. Start a local server from the folder containing `index.html`:

```bash
python3 -m http.server 8000
```
or
```bash
py -m http.server 8000
```

3. On your iPhone, open Safari and go to:

```bash
http://<your-computer-ip>:8000
```

For example:

```bash
http://192.168.1.42:8000
```
