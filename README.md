<h1 align="center">rios0rios0.github.io</h1>
<p align="center">
    <a href="https://github.com/rios0rios0/rios0rios0.github.io/releases/latest">
        <img src="https://img.shields.io/github/release/rios0rios0/rios0rios0.github.io.svg?style=for-the-badge&logo=github" alt="Latest Release"/></a>
    <a href="https://github.com/rios0rios0/rios0rios0.github.io/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/rios0rios0/rios0rios0.github.io.svg?style=for-the-badge&logo=github" alt="License"/></a>
</p>

Personal blog and knowledge base built with Jekyll using the Chirpy theme, covering security topics, CTF write-ups, and Hack The Box walkthroughs.

## Features

- Jekyll-based static site with the Chirpy theme
- Security-focused content including CTF challenges and HTB machine write-ups
- Categories and tags for organized content discovery (Security, CTF, Hack The Box)
- Full-text search and timeline archive
- About me page and tabbed navigation

## Content

The site includes write-ups for various Hack The Box machines:
- **Admirer** - HTB machine walkthrough
- **Blunder** - HTB machine walkthrough
- **Cache** - HTB machine walkthrough
- **Traceback** - HTB machine walkthrough

## Installation

```bash
git clone https://github.com/rios0rios0/rios0rios0.github.io.git
cd rios0rios0.github.io
python3 -m http.server 4000
```

This repository holds the pre-built static output, not the Jekyll source: there is no `Gemfile`, `_config.yml`, or `_posts/` directory, so Ruby and Jekyll are not needed.

## Usage

Visit `http://localhost:4000` after starting the server to browse the site locally. Serve the repository root rather than opening `index.html` from disk, because pages load assets by absolute path (`/assets/...`). Compiled post pages live under `posts/<slug>/`, and their images under `files/security/ctf/htb/m.<machine>/`.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is available under the license specified in the repository.
