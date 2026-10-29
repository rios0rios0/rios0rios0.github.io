# Contributing

Contributions are welcome. By participating, you agree to maintain a respectful and constructive environment.

For coding standards, testing patterns, architecture guidelines, commit conventions, and all
development practices, refer to the **[Development Guide](https://github.com/rios0rios0/guide/wiki)**.

## Prerequisites

- [Python 3](https://www.python.org/) or any other static file server, to preview the site
- [chlog](https://github.com/luizjhonata/chlog), to record changelog fragments

This repository holds the pre-built static output of a Jekyll site, not its source: there is no `Gemfile`, `_config.yml`, or `_posts/` directory, so Ruby, Bundler, and Jekyll are not needed.

## Development Workflow

1. Fork and clone the repository
2. Create a branch: `git checkout -b feat/my-change`
3. Serve the repository root locally:
   ```bash
   python3 -m http.server 4000
   ```
4. Open [http://localhost:4000](http://localhost:4000) to preview the site (opening `index.html` from disk does not load the assets, which use absolute paths)
5. Compiled post pages live under `posts/<slug>/` and their images under `files/security/ctf/htb/m.<machine>/`; the HTML is minified, so do not reformat it
6. Record the change with a changelog fragment (`CHANGELOG.md` is generated, never edited by hand):
   ```bash
   chlog new --kind Changed --body '<past-tense description>'
   ```
7. Commit following the [commit conventions](https://github.com/rios0rios0/guide/wiki/Git-Flow)
8. Open a pull request against `main`
