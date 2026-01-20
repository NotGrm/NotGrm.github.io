# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
bundle install && yarn install

# Start development server (localhost:4000)
bin/bridgetown start

# Production build (clean + frontend + site)
bin/bridgetown deploy
# or
rake deploy

# Test environment build
rake test

# Ruby console with loaded site
bin/bridgetown console
```

## Architecture

This is a Bridgetown 2.1 static site with:
- **Backend**: Ruby-based static site generation with ERB templates
- **Frontend**: esbuild bundler + Tailwind CSS + Stimulus.js controllers
- **Deployment**: GitHub Actions auto-deploys to GitHub Pages on push to `main`

## Project Structure

- `src/` - Content (markdown pages, data, layouts, partials)
  - `_layouts/` - ERB page layouts
  - `_partials/` - Reusable ERB partials
  - `_data/` - YAML data files (site_metadata.yml, links.yml)
- `frontend/` - Frontend assets
  - `javascript/controllers/` - Stimulus controllers (daynight_controller.js for theme toggle)
  - `styles/` - CSS following [CUBE CSS](https://cube.fyi) methodology:
    - `base/` - Global styles, reset, CSS custom properties
    - `layouts/` - Composition primitives (stack, center, cluster, sidebar, cover, frame)
    - `blocks/` - Component-specific styles (headline, site-head, site-foot)
    - Utilities provided by Tailwind CSS
- `config/` - esbuild defaults, Puma, initializers
- `plugins/builders/` - Custom Bridgetown plugins
- `output/` - Built site (generated)

## Path Aliases (jsconfig.json)

```
$styles/*     → frontend/styles/*
$javascript/* → frontend/javascript/*
$components/* → src/_components/*
```

## Notes

- `bridgetown.config.yml` requires server restart when changed
- Site metadata lives in `src/_data/site_metadata.yml` (hot-reloads)
- Template engine is ERB (not Liquid)
