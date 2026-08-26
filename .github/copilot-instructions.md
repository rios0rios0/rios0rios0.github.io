# Copilot Instructions

## Project Overview

This repository hosts **rios0rios0's personal blog and knowledge base**, a static site deployed to [https://rios0rios0.github.io](https://rios0rios0.github.io). It serves as a personal reminder and reference for security topics, Capture The Flag (CTF) challenges, and Hack The Box (HTB) machine write-ups.

The site is built with [Jekyll](https://jekyllrb.com/) using the [Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) and is deployed via GitHub Pages. The repository stores the **pre-built static HTML output** — not the Jekyll source files — so edits are made directly to the compiled HTML or to source Markdown that is then rebuilt.

## Repository Structure

```
rios0rios0.github.io/
├── .github/                  # GitHub-specific files (workflows, instructions)
├── about-me/                 # About me page (compiled HTML)
├── assets/
│   ├── css/                  # Compiled CSS stylesheets
│   ├── img/                  # Images and favicons
│   └── js/                   # Compiled JavaScript (includes search index)
├── categories/               # Category index pages (ctf, hack-the-box, security)
├── files/
│   └── security/             # Media assets for post content (screenshots, etc.)
├── norobots/                 # No-robots page
├── posts/                    # Compiled post HTML files
│   ├── sec-ctf-htb-m-admirer/
│   ├── sec-ctf-htb-m-blunder/
│   ├── sec-ctf-htb-m-cache/
│   └── sec-ctf-htb-m-traceback/
├── tabs/                     # Navigation tab pages (about, archives, categories, tags, timeline)
├── tags/                     # Tag index pages (active, ctf, htb, machine, retired, sec)
├── timeline/                 # Timeline archive page
├── 404.html                  # Custom 404 error page
├── CHANGELOG.md              # Release history and release process
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                   # License file
├── README.md                 # Project overview
├── feed.xml                  # RSS feed
├── index.html                # Home page (compiled)
├── redirects.json            # URL redirect mappings
├── robots.txt                # Search engine crawler instructions
├── sitemap.xml               # XML sitemap for SEO
├── sw-register.js            # Service worker registration script
└── sw.js                     # Service worker for offline caching
```

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Static site generator | [Jekyll](https://jekyllrb.com/) v4.1.1 |
| Theme | [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) v2.x |
| CSS framework | [Bootstrap](https://getbootstrap.com/) v4.0 |
| JavaScript utilities | [jQuery](https://jquery.com/) v3.4.1 |
| Icons | [Font Awesome](https://fontawesome.com/) v5.11.2 |
| Search | [Simple Jekyll Search](https://github.com/christian-fei/Simple-Jekyll-Search) v1.7.3 |
| Push notifications | [OneSignal](https://onesignal.com/) |
| Analytics | Google Analytics (UA-134533084-2) |
| Hosting | [GitHub Pages](https://pages.github.com/) — serves the static files directly |

## Working With This Repository

This repository contains **pre-built static output only**. There is no `Gemfile`, no `_config.yml`, and no `_posts/` directory. Ruby, Bundler, and Jekyll are not needed to work here. Edits are made directly to the compiled HTML files.

To preview locally, open `index.html` in a browser or use any static file server (e.g., `python3 -m http.server 4000`).

### Adding New Content

Post pages live under `posts/` as compiled HTML directories (e.g., `posts/sec-ctf-htb-m-admirer/`). Post slugs use hyphen-separated lowercase names.

Post images and assets go under `files/security/ctf/htb/m.<machine-name>/`.

## Architecture and Design Patterns

- **Static site**: All content is pre-rendered HTML served directly by GitHub Pages — there is no server-side logic.
- **Theme-driven layout**: The Chirpy theme handles all page layout, navigation, and styling. Core theme HTML is embedded in the compiled output.
- **Service worker**: `sw.js` and `sw-register.js` enable offline caching and progressive web app (PWA) behavior.
- **RSS/Atom feed**: `feed.xml` is auto-generated from post metadata for RSS readers.
- **Search index**: `assets/js/data/search.json` powers the client-side full-text search via Simple Jekyll Search.
- **Sitemap**: `sitemap.xml` is auto-generated for SEO.
- **Redirects**: `redirects.json` manages URL redirect mappings.

## Content Categories and Tags

### Categories (hierarchical)
- `Security` → `CTF` → `Hack The Box`

### Tags
- `sec`, `ctf`, `htb`, `machine`, `active`, `retired`

## CI/CD Pipeline

The site is deployed automatically to GitHub Pages from the `main` branch. No separate build workflow is required — GitHub Pages natively serves the static HTML files committed to the repository.

A `release.yaml` workflow runs on pushes to `main` and delegates to the reusable `rios0rios0/pipelines` release workflow to create Git tags. See `CHANGELOG.md` for the release process: create a `bump/x.x.x` branch, compile the fragments pending under `.changes/unreleased/` into a version section with `chlog batch auto && chlog merge` — `CHANGELOG.md` is generated, never edited by hand — merge to `main`, and a tag is created automatically.

## Coding Conventions

- HTML files in the compiled output are **minified** (single-line). Do not reformat them.
- Post images and assets are stored under `files/security/ctf/htb/m.<machine-name>/`.
- Follow the [commit conventions](https://github.com/rios0rios0/guide/wiki/Life-Cycle/Git-Flow) from the organization guide (Conventional Commits format, e.g., `feat:`, `fix:`, `chore:`).
- Branch names follow the pattern `feat/description`, `fix/description`, `chore/description`.
- All pull requests should target the `main` branch.

## Troubleshooting

- **Missing styles or scripts**: The site relies on CDN-hosted assets (Bootstrap, FontAwesome, jQuery). Ensure network access is available when testing locally.
- **Service worker caching**: Hard-reload (`Ctrl+Shift+R`) the browser to bypass the service worker cache during development.

<!-- chlog:start -->
## Changelog (chlog) — MANDATORY

If the repository you are working in uses chlog (a `.chlog.yaml` or `.chlog.yml`
config file, or a `.changes/` directory, exists at the project root), the
following is binding and ALWAYS applies: whenever you make ANY change, you MUST
create a changelog fragment as part of the same change — automatically, without
being asked, before committing.

- Do NOT edit CHANGELOG.md directly; it is generated from fragments.
- Create the fragment with:
  `chlog new --kind <Kind> --body "<imperative description>"`
- Valid kinds: Added, Changed, Deprecated, Removed, Fixed, Security
- Choose the kind that best matches the change (e.g., new feature → Added,
  bug fix → Fixed, behavior change → Changed, removal → Removed, security fix → Security).
- If the change is backward-INCOMPATIBLE with the public API (a breaking
  change), you MUST add the `--breaking` flag:
  `chlog new --kind <Kind> --breaking --body "<description>"`.
  This is the ONLY thing that triggers a major version bump — the kind alone
  never does (per SemVer, major = incompatible change). When unsure whether a
  change breaks compatibility, ask the user instead of guessing.
- Fragments are YAML files in `.changes/unreleased/`; stage them with your commit.
- `chlog check` fails the build when a fragment is missing — never skip it.
<!-- chlog:end -->
