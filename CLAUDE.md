# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Artificial Ruby is a Jekyll static site for a community exploring AI with Ruby. The site hosts event information, talks, and community resources at artificialruby.ai.

## Development Commands

```bash
# Install dependencies
bundle install
npm install

# Build CSS (required after Tailwind changes)
npm run build:css

# Run local development server
bundle exec jekyll serve

# Build site for production
bundle exec jekyll build
```

## Architecture

### Technology Stack
- **Static Site Generator**: Jekyll with GitHub Pages
- **CSS**: Tailwind CSS with PostCSS
- **Analytics**: Plausible
- **Forms**: Mailchimp integration

### Key Directories
- `_includes/partials/`: Reusable components organized by feature (events, homepage)
- `_layouts/`: Page templates (currently only default.html)
- `assets/images/events/`: Event photos organized by date (e.g., april_9_2025/)
- `events/`: Individual event detail pages

### Adding New Content

**New Event**:
1. Create event page in `events/` directory (follow naming pattern: month-day-year.html)
2. Add event photos to `assets/images/events/[event_date]/`
3. Update events.html to include the new event
4. Use existing event pages as templates

**Styling**:
- Custom colors defined in tailwind.config.js: `base-content` (#363F48), `highlight` (#D26F68)
- Custom fonts: Caudex (serif), Lexend Deca, Lexend (sans-serif)
- Run `npm run build:css` after any Tailwind class changes

### Important Files
- `_config.yml`: Jekyll configuration and site metadata
- `CNAME`: Custom domain configuration for GitHub Pages
- `tailwind.config.js`: Tailwind customizations and content paths