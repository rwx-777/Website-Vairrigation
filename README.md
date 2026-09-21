# Vairrigation Website

A bilingual prototype website for **Vairrigation**, an agritech concept focused on helping farms make smarter irrigation decisions with the water they have available.

The website presents Vairrigation as a planning layer for existing irrigation equipment. It communicates how field conditions, satellite imagery, weather information, crop needs, and monthly water limits can support practical irrigation decisions.

## Overview

Vairrigation is designed around a simple idea:

> Use the water you have where it creates the most value for the crop.

The website explains how a farm could:

- Monitor water usage across multiple fields
- Plan irrigation in millimetres per field
- Work within a monthly water allowance
- Account for weather and expected rainfall
- Use existing irrigation equipment instead of replacing it
- Test the approach on one field for one month
- Identify potential funding or grant support

This repository contains the static marketing website prototype for that concept.

## Features

- **Bilingual content** with English and German pages
- **Responsive layout** for desktop, tablet, and mobile screens
- **Animated hero section** with rotating irrigation imagery
- **Product overview** describing the Vairrigation workflow
- **Irrigation system examples** for open crops, hose reels, trees, and vines
- **Farm water dashboard mockup** showing field-level irrigation status
- **One-month field trial explanation**
- **Funding and grant information section**
- **Email call-to-action links** for starting a conversation about a test
- **Reduced-motion support** for users who prefer less animation
- **No build system or JavaScript framework required**

## Languages

The website currently includes:

- English: [`index.html`](index.html)
- German: [`de.html`](de.html)

The language switcher in the navigation connects the two versions of the page.

## Technology

This prototype is built with standard web technologies:

- HTML5
- CSS3
- Responsive CSS Grid and Flexbox layouts
- CSS animations and transitions
- Local image assets
- Google Fonts — Source Sans 3

There is currently no JavaScript application, backend, package manager, or compilation step required to run the website.

## Project Structure

```text
.
├── README.md
├── index.html              # English version of the website
├── de.html                 # German version of the website
├── styles.css              # Shared layout, typography, colors, and responsive styles
├── images/                 # Website imagery and hero backgrounds
└── Vairrigation_Website.zip # Packaged prototype archive
```

## Running Locally

Because this is a static website, it can be opened directly in a browser.

### Option 1: Open the HTML file

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Use the **EN/DE** language switcher to view the German page.

### Option 2: Use a local development server

Using a local server is recommended for more consistent browser behavior when loading assets.

With Python installed:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

On Windows, the command may be:

```bash
python -m http.server 8000
```

## Website Sections

### Product

Introduces the Vairrigation approach: keep the farm's existing irrigation machinery while improving the plan used to decide where and when water should be applied.

### Farm Water

Provides a dashboard-style visual showing:

- Water remaining for the month
- Water already applied to each field
- Suggested irrigation actions
- Field-level status indicators

The dashboard is currently a visual prototype and does not connect to live farm, satellite, weather, or irrigation data.

### Trial

Describes a proposed one-month test using one field. The process includes an initial field review, regular observations, plan corrections, and an end-of-month summary.

### Grants

Introduces the possibility of funding support for eligible irrigation equipment or water-saving improvements. The content is informational and should be verified against the applicable rules in the farmer's country or region.

## Customization

### Update website content

Edit `index.html` for the English page and `de.html` for the German page.

### Update styling

Edit `styles.css` to change:

- Brand colors
- Typography
- Spacing
- Responsive breakpoints
- Hero animation behavior
- Cards and dashboard styling

Most global design variables are defined at the beginning of the stylesheet:

```css
:root {
  --green: #0f7a5a;
  --green-dark: #0a4f3b;
  --ink: #14201a;
  --muted: #5c6b63;
}
```

### Replace images

Website images are stored in the `images/` directory. When replacing an image, keep the filename the same or update the corresponding `src` or `background-image` reference in the HTML and CSS files.

## Deployment

The website can be deployed to any static hosting service, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any traditional web server

For GitHub Pages, publish the repository's main branch as a static site and use `index.html` as the entry page.

## Prototype Notes

This repository is a front-end prototype. The following elements are illustrative and are not currently connected to production services:

- Water usage values in the dashboard
- Field map and field markers
- Irrigation recommendations
- Satellite and weather data
- Grant percentages and eligibility information
- Email contact workflow

A production version would need validated agronomic models, reliable field and weather data, user authentication, data protection controls, and integrations with relevant irrigation equipment or farm-management systems.

## Accessibility and Browser Support

The website includes semantic HTML, descriptive image alt text, responsive layouts, and a `prefers-reduced-motion` fallback for the animated hero section.

For the best experience, use a current version of a modern browser such as Chrome, Edge, Firefox, or Safari.

## Contributing

Contributions and suggestions are welcome. To propose an improvement:

1. Create a branch for your change.
2. Update the relevant HTML, CSS, or image files.
3. Test the website at desktop and mobile widths.
4. Check both the English and German pages.
5. Open a pull request with a clear description of the change.

## License

No license has currently been specified for this repository. Until a license is added, the code and design should be treated as all rights reserved.

## Contact

The prototype currently uses `hello@vairrigation.com` for contact links in the website interface.
