# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Pre-built static output for a Jekyll/Chirpy blog deployed to GitHub Pages. There is no Gemfile, no `_config.yml`, no `_posts/` directory. Ruby and Jekyll are **not** needed. The README and CONTRIBUTING docs reference Jekyll build commands that do not apply here -- ignore them.

## Working with the site

Edit compiled HTML files directly. Preview with any static file server:

```bash
python3 -m http.server 4000
```

## Structure

- `posts/<slug>/` -- compiled post HTML (e.g., `posts/sec-ctf-htb-m-admirer/`)
- `files/security/ctf/htb/m.<machine>/` -- post images and assets
- `assets/js/data/search.json` -- client-side search index
- `tabs/`, `tags/`, `categories/` -- navigation and taxonomy pages

## Conventions

- HTML files are **minified** (single-line). Do not reformat.
- Commit messages use Conventional Commits (`feat:`, `fix:`, `chore:`).
- Branch names: `feat/description`, `fix/description`, `chore/description`.
- PRs target `main`.
- Releases: create a `bump/x.x.x` branch, move `[Unreleased]` entries in `CHANGELOG.md` under a versioned heading, merge to `main`. The `release.yaml` workflow creates the Git tag automatically.
