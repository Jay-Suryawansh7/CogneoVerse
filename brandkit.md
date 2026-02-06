# UI Color System & Design Tokens

## Core Color Assignments

### Primary Color
- Name: Oceanic
- Hex: #003F47
- Role: Brand identity, main UI anchors

### Secondary Color
- Name: Cobalt
- Hex: #193497
- Role: Secondary emphasis, links, active states

### Accent Color
- Name: Nectarine
- Hex: #FFBD76
- Role: CTAs, highlights, attention elements

### Background Color
- Name: Paper
- Hex: #F9F6EF
- Role: Main canvas and section backgrounds

### Text Color
- Primary Text: Ink (#282828)
- Secondary Text: Onyx (#0A171D)
- Muted Text: Ink @ 60% opacity

---

## Typography System

### Brand Fonts

- Primary Display Script: Beloved Script
  - Usage: Hero headlines, brand marks, decorative highlights
  - Style: Calligraphy / Handwritten
  - Weight: Regular

- Primary Serif: Didot Bold
  - Usage: Main headings (H1–H3), premium sections
  - Style: High-contrast serif
  - Weight: Bold

- Primary Sans (Body / UI): Classy (or similar modern sans-serif)
  - Usage: Body text, UI labels, forms, navigation
  - Style: Clean / Minimal
  - Weight: Regular / Medium

### Typography Hierarchy

| Level | Font         | Weight | Usage                  |
|-------|--------------|--------|------------------------|
| H1    | Didot Bold   | 700    | Hero Titles            |
| H2    | Didot Bold   | 700    | Section Headers        |
| H3    | Didot Bold   | 600    | Subsections            |
| Accent| Beloved Script| 400   | Highlights / Quotes    |
| Body  | Classy Sans  | 400    | Paragraphs / UI Text   |
| Small | Classy Sans  | 400    | Captions / Meta Text   |

### Line Height & Spacing

- Headings: 1.2 – 1.3
- Body Text: 1.6 – 1.75
- UI Labels: 1.4

### Font Loading Strategy

- Load via Google Fonts / Self-hosted
- Use font-display: swap
- Preload primary fonts

---

## Design Tokens

```json
{
  "color": {
    "primary": "#003F47",
    "secondary": "#193497",
    "accent": "#FFBD76",
    "background": "#F9F6EF",
    "text": "#282828",
    "textSecondary": "#0A171D"
  }
}
```

---

## Component Color System

### Buttons

#### Primary Button
- Background: Accent
- Text: Ink
- Hover: Accent -8% brightness
- Active: Scale 0.97
- Shadow: Oceanic @20%

#### Secondary Button
- Background: Transparent
- Border: Secondary
- Text: Secondary
- Hover: Secondary @10% fill

#### Ghost Button
- Text: Primary
- Hover: Primary @8%

---

### Cards

#### Default Card
- Background: Paper
- Border: Ink @10%
- Shadow: 0 8px 24px rgba(0,0,0,0.06)

#### Featured Card
- Border: Accent
- Top Bar: Primary

---

### Toasts & Notifications

#### Success
- Background: Oceanic @90%
- Text: Paper
- Icon: Accent

#### Error
- Background: Pink Eraser (#EDA398)
- Text: Ink

#### Info
- Background: Cobalt
- Text: Paper

---

### Forms

- Normal: Border Ink @20%, Background Paper
- Focus: Border Secondary, Glow Secondary @30%
- Error: Border Pink Eraser

---

### Navigation & Footer

#### Light Mode
- Background: Paper
- Text: Ink
- Active: Oceanic

#### Dark Mode
- Background: Oceanic
- Text: Paper
- Accent: Nectarine

---

## Motion & Interaction Guidelines

### Global Hover
- Duration: 220ms ease-out
- Brightness: +4%
- Saturation: +3%

### Button Hover
- Glow: Accent @20%
- Lift: translateY(-2px)

### Card Hover
- Shadow: +15%
- Border: Accent fade-in

### Page Load
- Fade in from Paper
- Accent delay: +120ms

---

## Scroll Animations (GSAP / Framer)

### Section Reveal
- From: opacity 0, y:40
- To: opacity 1, y:0
- Duration: 0.7s
- Ease: power2.out

### CTA Pulse
- Scale: 1 → 1.04 → 1
- Loop: 6s

---

## Dark Mode Palette

- Background: Onyx
- Cards: Oceanic
- Text: Paper
- Accent: Nectarine
- Secondary: Cobalt

---

## Brand Psychology

| Trait       | Source            |
|-------------|-------------------|
| Trust       | Oceanic + Cobalt  |
| Premium     | Paper + Ink       |
| Energy      | Nectarine         |
| Creativity  | Pink Eraser       |

---

## Prompt Snippet

```
Use the following color system:

Primary: #003F47
Secondary: #193497
Accent: #FFBD76
Background: #F9F6EF
Text: #282828

Apply consistently across components, animations, and layouts.
Ensure contrast ratio ≥ WCAG AA.
```

