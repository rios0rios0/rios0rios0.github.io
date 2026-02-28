# Contributing

Contributions are welcome. By participating, you agree to maintain a respectful and constructive environment.

For coding standards, testing patterns, architecture guidelines, commit conventions, and all
development practices, refer to the **[Development Guide](https://github.com/rios0rios0/guide/wiki)**.

## Prerequisites

- [Ruby](https://www.ruby-lang.org/) v2.5+
- [RubyGems](https://rubygems.org/)
- [Bundler](https://bundler.io/) v2.0+
- [Jekyll](https://jekyllrb.com/) v4.x (installed via Bundler)

## Development Workflow

1. Fork and clone the repository
2. Create a branch: `git checkout -b feat/my-change`
3. Install Ruby dependencies:
   ```bash
   bundle install
   ```
4. Serve the site locally with live reload:
   ```bash
   bundle exec jekyll serve
   ```
5. Open [http://localhost:4000](http://localhost:4000) to preview the site
6. Add or edit posts as Markdown files in the `_posts/` directory following the Jekyll naming convention (`YYYY-MM-DD-title.md`)
7. Verify that the site builds without errors:
   ```bash
   bundle exec jekyll build
   ```
8. Commit following the [commit conventions](https://github.com/rios0rios0/guide/wiki/Life-Cycle/Git-Flow)
9. Open a pull request against `main`
