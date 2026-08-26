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
- Releases: create a `bump/x.x.x` branch, compile the fragments pending under `.changes/unreleased/` into a version section with `chlog batch auto && chlog merge` (`CHANGELOG.md` is generated — never edit it by hand), merge to `main`. The `release.yaml` workflow creates the Git tag automatically.

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
