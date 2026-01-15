# JSON driven Profile Card

## Project Overview
This repository contains a single-page, front-end web application that renders an interactive profile card. The application displays personal information, work experience, social links, and contact details using a data-driven approach. All content is dynamically generated from a structured JavaScript object, enabling easy modification without changing markup.

The project is intentionally framework-free and relies only on standard web technologies.

---

## Features
- Dynamic profile rendering from JSON data
- Section-based navigation (About, Experience, Contact)
- Animated transitions between sections
- Responsive card layout using Flexbox
- Timeline-based work experience visualization
- Social media and contact link integration
- No backend or build tooling required

---

## Technology Stack
- **HTML5** – Semantic structure and layout containers  
- **CSS3** – Styling, animations, transitions, and responsive behavior  
- **JavaScript (ES6)** – Data binding, DOM manipulation, and event handling  
- **External Resources**
  - Google Fonts (DM Sans, Jost)
  - Font Awesome (icons)

---

## Project Structure
```text
/
├── index.html          # Main application file (HTML, CSS, JS embedded)
├── img/                # Image assets (background, avatar, cover)
│   ├── Cover.jpeg
│   └── Pic.jpeg
│   └── Wall.gif
└── README.md           # Technical documentation
````

---

## Application Architecture

### Data Layer

All profile content is stored in a single JavaScript object:

* `profile`

  * Name, job title, avatar, cover image
* `sections.about`

  * Description text and social links
* `sections.experience`

  * Timeline entries (year, title, description)
* `sections.contact`

  * Location, phone, and email data

This structure acts as the single source of truth for the UI.

---

### Rendering Layer

The UI is generated at runtime using JavaScript functions that:

* Read data from the JSON object
* Create DOM elements dynamically
* Inject content into predefined containers

Key rendering functions:

* `renderProfile()`
* `renderSocialLinks()`
* `renderTimeline()`
* `renderContact()`
* `renderNavButtons()`

---

### Interaction Logic

* Navigation buttons switch between sections using `data-state` attributes.
* CSS selectors adjust layout and animations based on active state.
* Event listeners manage button clicks and UI state synchronization.

---

## Styling and UI Behavior

* Flexbox controls layout and alignment.
* CSS transitions and keyframes handle animations.
* Card height and header layout adapt per section.
* Navigation buttons remain sticky for usability.
* Background images use blur and scaling for depth.

---

## Setup and Usage

### Requirements

* Any modern web browser with ES6 support
* Internet access for CDN-loaded fonts and icons

### Running the Project

1. Clone the repository.
2. Ensure image assets exist at the paths defined in the JSON object.
3. Open `index.html` directly in a browser.

No build steps or server setup are required.

---

## Customization

To modify profile content:

1. Open `data.json`.
2. Locate the data that want to be changed.
3. Update text, links, images, or timeline entries.
4. Refresh the browser.

No other code changes are necessary.

---

## Known Limitations

* No accessibility optimization (ARIA roles, keyboard navigation).
* No form handling or user input.
* Static data only; no persistence or API integration.
* Embedded CSS and JavaScript reduce scalability for large projects.
