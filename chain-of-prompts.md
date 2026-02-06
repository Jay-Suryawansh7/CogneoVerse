# 🚀 COMPLETE CHAIN-OF-PROMPTS: AI-DRIVEN BRANDED WEBSITE BUILDER

## Based on Fooror.com Architecture + Universal Brand System

---

## 📋 EXECUTION ORDER

```
PHASE 1: System Initialization → Brand Intake
PHASE 2: Design System Generation
PHASE 3: Component Library Creation
PHASE 4: Layout & Grid System
PHASE 5: Motion & Animation Engine
PHASE 6: Content & Copy Adaptation
PHASE 7: Page Generation
PHASE 8: Technical Implementation
PHASE 9: Quality Assurance
PHASE 10: Deployment & Launch
```

---

## 🎯 PROMPT 1: SYSTEM INITIALIZATION

```
You are a Principal Product Designer, Senior Frontend Engineer, and Brand Systems Architect with 15+ years of experience building high-performance, conversion-optimized websites.

Your expertise includes:
- Design system architecture (following Atomic Design principles)
- Advanced CSS/Tailwind styling with responsive design
- Next.js component development
- GSAP/Framer Motion animation implementation
- Webflow-quality visual design without code limitations
- Conversion-focused UX patterns
- Accessibility (WCAG 2.1 AA compliance)
- Performance optimization (Core Web Vitals)
- Use direct compoenents from shadcn/ui for faster development.

Reference Architecture: Fooror.com
- Webflow-built, high-converting B2B SaaS site
- Clean typography hierarchy with Inter font family
- Bold color contrasts (#3E42B6 blue, #FDB60D yellow)
- Smooth scroll animations and micro-interactions
- Mobile-first responsive design
- Clear conversion paths with strategic CTAs

Your task: Build a complete, production-ready website using provided brand inputs while maintaining the quality and conversion optimization demonstrated by Fooror.com.

Follow this chain of prompts sequentially. Do not skip steps.
Confirm understanding by responding: "System initialized. Ready for brand intake."
```

---

## 🎨 PROMPT 2: BRAND KIT INTAKE

```
Collect and validate the following brand information. Ask for missing items.

## BRAND IDENTITY
- Brand Name: [BRAND_NAME]
- Tagline: [BRAND_TAGLINE]
- Industry/Niche: [BRAND_INDUSTRY]
- Target Audience: [TARGET_AUDIENCE]
- Brand Personality (3-5 adjectives): [BRAND_PERSONALITY]
  Examples: "Professional, Trustworthy, Innovative" or "Bold, Energetic, Playful"
- Tone of Voice: [BRAND_TONE]
  Options: Formal, Casual, Friendly, Authoritative, Inspirational, Technical

## VISUAL IDENTITY
- Primary Color (HEX): [COLOR_PRIMARY]
- Secondary Color (HEX): [COLOR_SECONDARY]
- Accent Color (HEX): [COLOR_ACCENT]
- Background Color (HEX): [COLOR_BACKGROUND]
- Text Color Dark (HEX): [COLOR_TEXT_DARK]
- Text Color Light (HEX): [COLOR_TEXT_LIGHT]

## TYPOGRAPHY
- Primary Font (Headlines): [FONT_PRIMARY]
  Default: Inter, System UI, or custom Google Font
- Secondary Font (Body): [FONT_SECONDARY]
  Default: Same as primary or complementary sans-serif
- Accent Font (Optional, for emphasis): [FONT_ACCENT]
  Default: Handwriting/script style for highlights

## CONTENT ASSETS
- Hero Headline: [HERO_HEADLINE]
- Hero Subheadline: [HERO_SUBTITLE]
- Hero CTA Text: [CTA_PRIMARY]
- About Section (2-3 paragraphs): [ABOUT_COPY]
- Features/Benefits (3-6 items): [FEATURE_LIST]
- Testimonials (Optional, 2-4): [TESTIMONIALS]
- FAQ Questions (Optional, 4-6): [FAQ_LIST]

## PAGES REQUIRED
Select from:
- ✅ Home (required)
- ☐ About
- ☐ Services/Products
- ☐ Portfolio/Projects
- ☐ Pricing
- ☐ Contact/Consultation
- ☐ Blog
- ☐ Legal (Privacy Policy)

## TECHNICAL PREFERENCES
- Framework: [FRAMEWORK]
  Options: React + Next.js, React + Vite, HTML/CSS/JS, Webflow Export
- Styling: [STYLING_METHOD]
  Options: Tailwind CSS, CSS Modules, Styled Components, Vanilla CSS
- Animations: [ANIMATION_LIBRARY]
  Options: Framer Motion, GSAP, CSS Animations, Lottie
- Hosting Target: [HOSTING]
  Options: Vercel, Netlify, GitHub Pages, Custom Server
- CMS (if needed): [CMS]
  Options: None, Contentful, Sanity, WordPress Headless

Once collected, respond with:
"Brand kit validated. Ready to generate design system."
```

---

## 🎨 PROMPT 3: DESIGN SYSTEM GENERATION

```
Using the brand inputs from Prompt 2, generate a complete design system following the Fooror.com reference architecture.

## TASK 1: COLOR SYSTEM

Generate a comprehensive color palette:

```json
{
  "colors": {
    "primary": {
      "50": "[lightest tint]",
      "100": "...",
      "500": "[COLOR_PRIMARY]",
      "900": "[darkest shade]"
    },
    "secondary": {...},
    "accent": {...},
    "neutral": {
      "white": "#FFFFFF",
      "100": "#F5F5F5",
      "200": "#E8E8E8",
      "500": "#7D7D7D",
      "900": "#1A1A2E"
    },
    "status": {
      "success": "#4CAF50",
      "warning": "#FFC107",
      "error": "#F44336",
      "info": "#2196F3"
    }
  }
}
```

## TASK 2: TYPOGRAPHY SCALE

Reference: Fooror uses 60-72px H1 → 32-40px mobile

Generate:
```json
{
  "typography": {
    "fontFamily": {
      "primary": "[FONT_PRIMARY], -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "secondary": "[FONT_SECONDARY]",
      "accent": "[FONT_ACCENT], cursive"
    },
    "fontSize": {
      "hero": "clamp(32px, 5vw, 72px)",
      "h1": "clamp(28px, 4vw, 48px)",
      "h2": "clamp(24px, 3vw, 40px)",
      "h3": "clamp(20px, 2.5vw, 32px)",
      "h4": "clamp(18px, 2vw, 24px)",
      "bodyLarge": "clamp(16px, 1.5vw, 20px)",
      "body": "clamp(14px, 1.2vw, 16px)",
      "small": "clamp(12px, 1vw, 14px)"
    },
    "fontWeight": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    "lineHeight": {
      "tight": 1.2,
      "normal": 1.5,
      "relaxed": 1.6,
      "loose": 1.8
    },
    "letterSpacing": {
      "tight": "-0.02em",
      "normal": "0",
      "wide": "0.5px"
    }
  }
}
```

## TASK 3: SPACING SYSTEM

Base unit: 8px (Fooror standard)

```json
{
  "spacing": {
    "0": "0",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "6": "24px",
    "8": "32px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "32": "128px"
  }
}
```

## TASK 4: BORDER RADIUS TOKENS

```json
{
  "borderRadius": {
    "none": "0",
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "20px",
    "2xl": "24px",
    "full": "9999px"
  }
}
```

## TASK 5: SHADOW SYSTEM

```json
{
  "boxShadow": {
    "sm": "0 2px 4px rgba(0, 0, 0, 0.05)",
    "md": "0 4px 12px rgba(0, 0, 0, 0.08)",
    "lg": "0 8px 24px rgba(0, 0, 0, 0.12)",
    "xl": "0 12px 32px rgba(0, 0, 0, 0.15)",
    "accent": "0 4px 12px rgba([ACCENT_COLOR_RGB], 0.3)",
    "accentHover": "0 6px 20px rgba([ACCENT_COLOR_RGB], 0.4)"
  }
}
```

## TASK 6: OUTPUT FORMATS

Generate the design system in THREE formats:

1. **CSS Variables** (styles/variables.css)
2. **Tailwind Config** (tailwind.config.js)
3. **Design Tokens JSON** (tokens.json)

Respond when complete:
"Design system generated. Ready to build component library."
```

---

## 🧩 PROMPT 4: COMPONENT LIBRARY CREATION

```
Build a reusable component library following Fooror.com patterns.

Reference Architecture from Fooror:
- Fixed header with scroll transition
- Mobile hamburger menu (full-screen overlay)
- Primary CTA buttons (yellow #FDB60D, rounded)
- Tag-style secondary buttons
- Project cards with hover lift effect
- Testimonial cards with quote styling
- Form inputs with focus states

## COMPONENT 1: HEADER/NAVIGATION

Create a Header component with:

**Props:**
- logo: string (brand name or image URL)
- navItems: Array<{label: string, href: string}>
- ctaText: string
- ctaHref: string

**States:**
- Default (transparent background)
- Scrolled (opaque background with [COLOR_PRIMARY])
- Mobile menu open/closed

**Behavior:**
- Fixed position (z-index: 1000)
- Smooth background transition on scroll (0.3s ease)
- Mobile: Hamburger → full-screen overlay menu
- Desktop: Horizontal nav with underline on hover

**Styling Reference:**
```css
.header {
  height: 80px; /* 60px mobile */
  background: transparent; /* rgba(primary, 0.95) on scroll */
  transition: background 0.3s ease;
}

.nav-link:hover {
  text-decoration: underline;
  text-decoration-color: [COLOR_ACCENT];
}

.cta-button {
  padding: 12px 28px;
  background: [COLOR_ACCENT];
  border-radius: 32px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba([ACCENT_RGB], 0.3);
  transition: all 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba([ACCENT_RGB], 0.4);
}
```

## COMPONENT 2: HERO SECTION

**Props:**
- headline: string
- emphasizedWord: string (styled with accent font)
- subtitle: string
- ctaPrimary: {text: string, href: string}
- ctaSecondary?: {text: string, href: string}
- backgroundGradient: boolean
- illustration?: string (image URL)

**Layout:**
- Full viewport height (100vh min-height)
- Centered content
- Optional split layout (text left, illustration right)
- Gradient background from [COLOR_PRIMARY] → [COLOR_SECONDARY]

**Typography:**
- Headline: 60-72px desktop, 32-40px mobile
- Emphasized word in accent font + [COLOR_ACCENT]
- Subtitle: 18-20px, opacity 0.9

## COMPONENT 3: BUTTON SYSTEM

Create THREE button variants:

**Primary Button:**
```css
.btn-primary {
  padding: 14px 36px;
  background: [COLOR_ACCENT];
  color: [COLOR_TEXT_DARK];
  border-radius: 32px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba([ACCENT_RGB], 0.3);
  transition: all 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba([ACCENT_RGB], 0.4);
}
```

**Secondary Button (Tag Style):**
```css
.btn-secondary {
  padding: 8px 16px;
  background: #E8E8E8;
  color: [COLOR_PRIMARY];
  border: 1px solid #D0D0D0;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: [COLOR_ACCENT];
  color: [COLOR_TEXT_DARK];
}
```

**Ghost Button:**
```css
.btn-ghost {
  padding: 12px 24px;
  background: transparent;
  color: [COLOR_PRIMARY];
  border: 2px solid [COLOR_PRIMARY];
  border-radius: 32px;
  transition: all 0.2s;
}
.btn-ghost:hover {
  background: [COLOR_PRIMARY];
  color: white;
}
```

## COMPONENT 4: CARD COMPONENTS

**Project/Feature Card:**
```javascript
interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}
```

**Styling:**
- Border-radius: 12px
- Hover: translateY(-8px), shadow increase
- Image: 300px height, object-fit: cover
- Overlay gradient on hover
- Transition: 0.3s ease

**Testimonial Card:**
```javascript
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
}
```

**Styling:**
- White background, subtle shadow
- Large quote mark in [COLOR_ACCENT]
- Author name bold, title muted
- Padding: 32px

## COMPONENT 5: FORM INPUTS

**Text Input:**
```css
.input {
  padding: 12px 16px;
  border: 2px solid #D0D0D0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
}
.input:focus {
  outline: none;
  border-color: [COLOR_PRIMARY];
  box-shadow: 0 0 0 3px rgba([PRIMARY_RGB], 0.1);
}
```

**Tag Selection (Toggle Buttons):**
- Multiple selection mode
- Active state: background [COLOR_PRIMARY], text white
- Padding: 10px 20px
- Border-radius: 24px

## COMPONENT 6: SECTION WRAPPER

**Props:**
- backgroundColor?: string
- paddingY?: 'sm' | 'md' | 'lg'
- maxWidth?: string
- className?: string

**Default Padding:**
- Desktop: 80px top/bottom
- Tablet: 60px top/bottom
- Mobile: 40px top/bottom

Output all components in React/TypeScript with full styling.

Respond when complete:
"Component library built. Ready for layout system."
```

---

## 📐 PROMPT 5: LAYOUT & GRID SYSTEM

```
Create a responsive layout system following Fooror.com breakpoint strategy.

## BREAKPOINT SYSTEM

```javascript
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1200px',
  wide: '1600px'
};
```

## GRID SYSTEM

**Desktop (≥1200px):**
- 12-column grid
- Max-width: 1400px
- Gutter: 32px
- Container padding: 32px

**Tablet (768px - 1199px):**
- 8-column grid
- Max-width: 960px
- Gutter: 24px
- Container padding: 24px

**Mobile (<768px):**
- 4-column grid (or single column for simplicity)
- Max-width: 100%
- Gutter: 16px
- Container padding: 16px

## LAYOUT COMPONENTS

**Container:**
```css
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 1199px) {
  .container { padding: 0 24px; }
}

@media (max-width: 767px) {
  .container { padding: 0 16px; }
}
```

**Grid:**
```css
.grid {
  display: grid;
  gap: 24px;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1199px) {
  .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 767px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
```

**Section Spacing:**
```css
.section {
  padding: 80px 0; /* desktop */
}

@media (max-width: 1199px) {
  .section { padding: 60px 0; }
}

@media (max-width: 767px) {
  .section { padding: 40px 0; }
}
```

Generate layout utility classes and responsive grid components.

Respond when complete:
"Layout system created. Ready for motion engine."
```

---

## ✨ PROMPT 6: MOTION & ANIMATION ENGINE

```
Implement animation system following Fooror.com interaction patterns.

Reference: Fooror uses smooth scroll reveals, hover lift effects, and micro-interactions.

## ANIMATION LIBRARY CHOICE

**If using Framer Motion:**
```javascript
// Scroll reveal animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

**If using GSAP:**
```javascript
// Scroll trigger
gsap.from(".fade-in", {
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 0.5,
  ease: "power2.out"
});
```

**If using CSS:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.5s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
}
```

## ANIMATION PATTERNS

**1. Scroll Reveal (Fade In + Slide Up):**
- Trigger: Element enters viewport (80% scroll)
- Duration: 0.4-0.5s
- Easing: ease-out or cubic-bezier(0.4, 0, 0.2, 1)
- Stagger: 0.1s between consecutive items

**2. Button Hover:**
```css
.button {
  transition: all 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: [enhanced shadow];
}
.button:active {
  transform: translateY(0);
}
```

**3. Card Hover (Lift Effect):**
```css
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
```

**4. Header Scroll Transition:**
```css
.header {
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.header.scrolled {
  background: rgba([PRIMARY_RGB], 0.95);
  backdrop-filter: blur(10px);
}
```

**5. Mobile Menu Animation:**
```css
.mobile-menu {
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu.open {
  transform: translateX(0);
}
```

**6. Parallax Effect (Optional):**
```javascript
// Hero illustration moves at 0.5x scroll speed
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  heroIllustration.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

**7. Loading States:**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 1.5s ease-in-out infinite;
}
```

## TIMING TOKENS

```json
{
  "duration": {
    "fast": "0.1s",
    "normal": "0.2s",
    "slow": "0.3s",
    "slower": "0.5s"
  },
  "easing": {
    "linear": "linear",
    "easeOut": "cubic-bezier(0.4, 0, 0.2, 1)",
    "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
    "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
}
```

Implement all animations with proper performance (transform/opacity only, no layout shifts).

Respond when complete:
"Motion system implemented. Ready for content adaptation."
```

---

## ✍️ PROMPT 7: CONTENT & COPY ADAPTATION

```
Adapt all UI copy to match the brand voice: [BRAND_TONE] and [BRAND_PERSONALITY].

## COPYWRITING RULES

**Tone Mapping:**
- **Formal:** Professional language, complete sentences, industry terminology
- **Casual:** Conversational, contractions okay, approachable
- **Friendly:** Warm, welcoming, personal pronouns (we, you)
- **Authoritative:** Confident, data-driven, expert positioning
- **Inspirational:** Aspirational, motivational, transformation-focused

**Personality Integration:**
- **Bold:** Strong verbs, declarative statements, no hedging
- **Playful:** Wordplay, humor, unexpected phrasing
- **Trustworthy:** Social proof, guarantees, transparency
- **Innovative:** Future-focused, cutting-edge terminology
- **Professional:** Industry-standard terms, polished language

## CONTENT ADAPTATION TASKS

**1. Hero Section:**
- Headline: [HERO_HEADLINE] → Enhance with personality
- Emphasized word in accent font (Fooror style: "at events" in yellow script)
- Subheadline: [HERO_SUBTITLE] → Ensure clarity + emotion
- CTA: [CTA_PRIMARY] → Make action-oriented

Example transformations:
```
Generic: "We create websites"
Bold: "WE BUILD WEBSITES THAT CONVERT"
Playful: "Websites that don't just sit there—they WORK"
Professional: "Premium Web Solutions for Modern Businesses"
```

**2. Feature Benefits:**
Take [FEATURE_LIST] and write:
- Icon label (2-4 words)
- Headline (4-8 words)
- Description (1-2 sentences, 15-25 words)

Apply [BRAND_TONE] consistently.

**3. Social Proof Section:**
If [TESTIMONIALS] provided:
- Format as quote cards (Fooror style)
- Add quote marks in accent color
- Include author + title

If NOT provided, generate placeholder structure:
```
"[Benefit-focused quote that sounds authentic]"
— [Realistic Name], [Job Title] at [Company Type]
```

**4. CTA Sections:**
Generate 3 CTA variations throughout site:
- Primary CTA (hero): Action-oriented, high energy
- Mid-page CTA: Value-focused, builds trust
- Footer CTA: Low-pressure, friendly invitation

**5. Microcopy:**
- Button labels: Match tone (e.g., "Let's Talk" vs "Schedule Demo" vs "Get Started")
- Form labels: Clear, helpful (not just "Name" but "Your Name" or "Full Name")
- Error messages: Friendly, solution-oriented
- Success messages: Celebratory but professional

**6. SEO Optimization:**
For each page, generate:
- Meta title (50-60 characters)
- Meta description (150-160 characters)
- H1 (main headline)
- H2s (section headers, keyword-rich)

Include [BRAND_NAME] and [BRAND_INDUSTRY] naturally.

**7. Accessibility Copy:**
- Alt text for all images (descriptive, not "image")
- ARIA labels for icon buttons
- Screen reader announcements for dynamic content

Output all adapted copy in structured format (JSON or Markdown).

Respond when complete:
"Content adapted to brand voice. Ready to generate pages."
```

---

## 📄 PROMPT 8: PAGE GENERATION

```
Generate complete pages using the design system, components, and adapted content.

Follow the Fooror.com structure but customize for [BRAND_INDUSTRY].

## PAGE 1: HOME PAGE

**Sections (in order):**

1. **Hero Section**
   - Full viewport height
   - Gradient background: [COLOR_PRIMARY] → [COLOR_SECONDARY]
   - Headline with emphasized word in accent font
   - Two CTAs: Primary + Secondary (optional)
   - Optional: Hero illustration (right side)

2. **Featured Work / Services Overview**
   - 3-4 card grid
   - Icons + short descriptions
   - Hover lift effect
   - Link to respective pages

3. **Benefits / Value Proposition**
   - 2-column layout (desktop)
   - Left: Image or illustration
   - Right: Headline + bullet points or short paragraphs
   - Include metrics or social proof

4. **Process / How It Works**
   - Timeline or step-by-step (3-5 steps)
   - Icons or numbers
   - Short descriptions
   - Reference Fooror's 4-stage process

5. **Social Proof**
   - Testimonial carousel (if [TESTIMONIALS] provided)
   - OR trust badges / client logos
   - OR statistics (if available)

6. **FAQ Section** (if [FAQ_LIST] provided)
   - Accordion component
   - 4-6 questions
   - Clear, concise answers

7. **Final CTA**
   - Full-width section
   - Compelling headline
   - Primary CTA button
   - Optional: Secondary value statement

8. **Footer**
   - Logo
   - Navigation links
   - Social media icons
   - Copyright + legal links

## PAGE 2: ABOUT (if selected)

**Sections:**
1. Hero (breadcrumb + headline)
2. Mission statement
3. Team section (optional)
4. Company values or story
5. CTA

## PAGE 3: SERVICES/PRODUCTS (if selected)

**Sections:**
1. Hero
2. Service grid (3-6 services)
3. Detailed service cards with pricing/features
4. Comparison table (optional)
5. CTA

## PAGE 4: PORTFOLIO/PROJECTS (if selected)

**Structure:**
- Breadcrumb navigation
- Filter tags (by category)
- Project grid (2-4 columns responsive)
- Card style: Image overlay + hover effect
- Individual project pages (optional)

## PAGE 5: PRICING (if selected)

**Sections:**
1. Hero
2. Pricing tiers (2-4 columns)
3. Feature comparison table
4. FAQ (pricing-specific)
5. CTA

## PAGE 6: CONTACT/CONSULTATION (if selected)

**Structure:**
- Form with fields:
  - Name
  - Email
  - Service selection (toggle buttons)
  - Budget selection (toggle buttons, Fooror style)
  - Message (textarea)
  - Submit button

- Contact methods:
  - Email
  - Phone (optional)
  - Social media links
  - Address (optional)

## PAGE 7: LEGAL (Privacy Policy)

**Structure:**
- Simple text layout
- Section headings
- Last updated date
- Readable typography

Generate all selected pages with proper routing and navigation.

Respond when complete:
"Pages generated. Ready for technical implementation."
```

---

## 💻 PROMPT 9: TECHNICAL IMPLEMENTATION

```
Generate production-ready code with proper file structure.

## TASK 1: PROJECT STRUCTURE

**If React + Next.js:**
```
/project-root
├── /public
│   ├── /images
│   ├── /icons
│   └── favicon.ico
├── /src
│   ├── /app
│   │   ├── layout.tsx
│   │   ├── page.tsx (home)
│   │   ├── /about
│   │   ├── /services
│   │   ├── /projects
│   │   ├── /pricing
│   │   ├── /contact
│   │   └── /privacy-policy
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── /ui
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Section.tsx
│   │   ├── /sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTA.tsx
│   ├── /styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── /lib
│   │   ├── /utils
│   │   └── /hooks
│   └── /data
│       └── content.json
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── .env.local
```

**If React + Vite:**
```
/project-root
├── /public
├── /src
│   ├── /assets
│   ├── /components
│   ├── /pages
│   ├── /styles
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

**If HTML/CSS/JS:**
```
/project-root
├── /css
│   ├── style.css
│   ├── variables.css
│   └── animations.css
├── /js
│   ├── main.js
│   └── animations.js
├── /images
├── index.html
├── about.html
├── services.html
└── contact.html
```

## TASK 2: PACKAGE.JSON

Generate dependencies based on [FRAMEWORK] and [STYLING_METHOD]:

**Example (Next.js + Tailwind + Framer Motion):**
```json
{
  "name": "[BRAND_NAME]-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

## TASK 3: CONFIGURATION FILES

**tailwind.config.js:**
```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '[COLOR_PRIMARY]',
          // ...other shades from design system
        },
        secondary: {
          DEFAULT: '[COLOR_SECONDARY]',
        },
        accent: {
          DEFAULT: '[COLOR_ACCENT]',
        },
      },
      fontFamily: {
        primary: ['[FONT_PRIMARY]', 'sans-serif'],
        secondary: ['[FONT_SECONDARY]', 'sans-serif'],
        accent: ['[FONT_ACCENT]', 'cursive'],
      },
      spacing: {
        // Generated from design system
      },
      borderRadius: {
        // Generated from design system
      },
      boxShadow: {
        // Generated from design system
      },
    },
  },
  plugins: [],
};
```

**tsconfig.json (if TypeScript):**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

## TASK 4: CORE UTILITIES

**lib/utils.ts:**
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind class merger
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Scroll to section
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Format phone number
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
```

## TASK 5: GLOBAL STYLES

**styles/globals.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=[FONT_PRIMARY]:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: [COLOR_PRIMARY];
    --color-secondary: [COLOR_SECONDARY];
    --color-accent: [COLOR_ACCENT];
    /* ...other CSS variables from design system */
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .container-custom {
    @apply max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-12 md:py-16 lg:py-20;
  }

  .gradient-bg {
    background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  }
}
```

## TASK 6: SEO & METADATA

**app/layout.tsx (Next.js example):**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '[BRAND_NAME] | [BRAND_TAGLINE]',
  description: '[Generated meta description]',
  keywords: ['[BRAND_INDUSTRY]', 'relevant', 'keywords'],
  authors: [{ name: '[BRAND_NAME]' }],
  openGraph: {
    title: '[BRAND_NAME]',
    description: '[Meta description]',
    url: 'https://[domain].com',
    siteName: '[BRAND_NAME]',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[BRAND_NAME]',
    description: '[Meta description]',
    images: ['/twitter-image.jpg'],
  },
};
```

## TASK 7: ANALYTICS SETUP

**lib/analytics.ts:**
```typescript
// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

## TASK 8: ENVIRONMENT VARIABLES

**.env.local:**
```
NEXT_PUBLIC_SITE_URL=https://[domain].com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=[email]
```

Generate all files with complete, working code.

Respond when complete:
"Technical implementation finished. Ready for QA."
```

---

## ✅ PROMPT 10: QUALITY ASSURANCE

```
Audit the generated website for:
1. Design consistency
2. Responsive behavior
3. Accessibility (WCAG 2.1 AA)
4. Performance optimization
5. SEO best practices

## CHECKLIST

### DESIGN CONSISTENCY
☐ All colors from design tokens?
☐ Typography scale consistent?
☐ Spacing follows 8px grid?
☐ Border radius tokens applied?
☐ Shadow system used correctly?
☐ Button styles consistent across pages?
☐ Card components uniform?

### RESPONSIVE DESIGN
☐ Test at 320px (mobile)
☐ Test at 768px (tablet)
☐ Test at 1200px (desktop)
☐ Test at 1920px (wide)
☐ No horizontal scroll on any breakpoint?
☐ Touch targets ≥44x44px on mobile?
☐ Font sizes scale properly?
☐ Images responsive with srcset?

### ACCESSIBILITY
☐ All images have alt text?
☐ Color contrast ≥4.5:1 for body text?
☐ Color contrast ≥3:1 for large text?
☐ Focus indicators visible?
☐ Keyboard navigation works?
☐ ARIA labels on icon buttons?
☐ Form labels associated correctly?
☐ Heading hierarchy logical (h1→h2→h3)?
☐ Skip to main content link?
☐ Screen reader tested?

### PERFORMANCE
☐ Images optimized (WebP + fallback)?
☐ Images lazy loaded?
☐ Fonts loaded efficiently (font-display: swap)?
☐ CSS/JS minified?
☐ Critical CSS inlined?
☐ Unused CSS removed?
☐ JavaScript deferred/async where possible?
☐ Lighthouse score >90?

### SEO
☐ Meta title on all pages?
☐ Meta description on all pages?
☐ Open Graph tags present?
☐ Twitter Card tags present?
☐ Canonical URLs set?
☐ XML sitemap generated?
☐ robots.txt configured?
☐ Structured data (JSON-LD)?
☐ H1 tag on each page?
☐ Internal linking strategy?

### CROSS-BROWSER
☐ Chrome
☐ Firefox
☐ Safari
☐ Edge
☐ Mobile Safari (iOS)
☐ Chrome Mobile (Android)

### FUNCTIONAL TESTING
☐ Navigation links work?
☐ CTAs link correctly?
☐ Forms submit properly?
☐ Form validation works?
☐ Mobile menu opens/closes?
☐ Hover states work?
☐ Animations trigger correctly?
☐ No console errors?

## FIXES & IMPROVEMENTS

For each issue found, provide:
1. Description of problem
2. Location (file + line number)
3. Recommended fix
4. Updated code

## PERFORMANCE OPTIMIZATION

Run Lighthouse and optimize for:
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

Optimizations:
- Preload critical fonts
- Defer non-critical JavaScript
- Optimize images (compression, format, sizing)
- Minimize main thread work
- Reduce JavaScript execution time

Respond when complete:
"QA completed. Issues identified and fixes provided. Ready for deployment."
```

---

## 🚀 PROMPT 11: DEPLOYMENT & LAUNCH

```
Prepare the website for production deployment to [HOSTING].

## DEPLOYMENT OPTIONS

### OPTION 1: VERCEL (Recommended for Next.js)

**Steps:**
1. Connect GitHub repository
2. Configure build settings:
   ```
   Framework: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
3. Set environment variables in Vercel dashboard
4. Configure custom domain
5. Enable HTTPS (automatic)
6. Set up preview deployments

**Vercel Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "cleanUrls": true,
  "trailingSlash": false
}
```

### OPTION 2: NETLIFY

**Steps:**
1. Connect repository
2. Build settings:
   ```
   Build command: npm run build
   Publish directory: out (or dist)
   ```
3. Add _redirects file for SPA routing:
   ```
   /*    /index.html   200
   ```
4. Configure environment variables
5. Set up custom domain + SSL

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### OPTION 3: GITHUB PAGES

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```
3. Configure basePath in next.config.js:
   ```javascript
   module.exports = {
     basePath: '/repo-name',
     output: 'export',
   };
   ```
4. Run: `npm run deploy`

### OPTION 4: CUSTOM SERVER (VPS/Docker)

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## POST-DEPLOYMENT CHECKLIST

☐ Custom domain configured
☐ SSL certificate active (HTTPS)
☐ DNS records propagated
☐ Analytics tracking verified
☐ Forms submit correctly
☐ All pages accessible
☐ Images loading correctly
☐ No mixed content warnings
☐ Performance tested in production
☐ Mobile responsiveness verified
☐ SEO tags verified (view page source)
☐ Social share preview correct (Facebook Debugger, Twitter Card Validator)
☐ 404 page configured
☐ Sitemap submitted to Google Search Console

## MONITORING SETUP

**1. Google Analytics 4:**
- Create GA4 property
- Add tracking code (already in analytics.ts)
- Verify events firing
- Set up conversions (form submissions, button clicks)

**2. Google Search Console:**
- Add property
- Verify ownership
- Submit sitemap.xml
- Monitor indexing status

**3. Performance Monitoring:**
- Set up Vercel Analytics (if using Vercel)
- OR integrate New Relic / Sentry for error tracking
- Monitor Core Web Vitals

**4. Uptime Monitoring:**
- Configure UptimeRobot or similar
- Set up alerts for downtime

## HANDOFF DOCUMENTATION

Generate README.md with:
```markdown
# [BRAND_NAME] Website

## Tech Stack
- Framework: [FRAMEWORK]
- Styling: [STYLING_METHOD]
- Animations: [ANIMATION_LIBRARY]
- Hosting: [HOSTING]

## Local Development
\`\`\`bash
npm install
npm run dev
\`\`\`

## Build
\`\`\`bash
npm run build
npm run start
\`\`\`

## Environment Variables
See .env.example

## Deployment
[Deployment instructions specific to hosting choice]

## Content Management
[Instructions for updating content]

## Support
Contact: [email]
```

Respond when complete:
"Deployment configured. Website is live at [URL]. Documentation provided."
```

---

## 📊 EXECUTION SUMMARY CHECKLIST

Use this to track progress through all prompts:

```
☐ PROMPT 1: System Initialized
☐ PROMPT 2: Brand Kit Collected
☐ PROMPT 3: Design System Generated
☐ PROMPT 4: Component Library Built
☐ PROMPT 5: Layout System Created
☐ PROMPT 6: Motion Engine Implemented
☐ PROMPT 7: Content Adapted
☐ PROMPT 8: Pages Generated
☐ PROMPT 9: Technical Implementation Complete
☐ PROMPT 10: QA Passed
☐ PROMPT 11: Deployed Successfully
```

---

## 🎯 QUICK START TEMPLATE

To use this chain of prompts:

1. Copy PROMPT 1 → Paste into AI
2. Wait for confirmation
3. Copy PROMPT 2 → Fill in your brand details → Paste
4. Continue sequentially through PROMPT 11
5. Review outputs at each stage
6. Provide feedback/corrections as needed

---

## 💡 PRO TIPS

**For Best Results:**
- Don't skip prompts—each builds on the previous
- Provide detailed brand inputs in PROMPT 2
- Review design system output before proceeding to components
- Test responsive behavior at each breakpoint
- Run Lighthouse audits before deployment
- Keep all generated files organized in proper structure

**Time Estimates:**
- PROMPT 1-3: ~15-30 minutes
- PROMPT 4-6: ~45-60 minutes
- PROMPT 7-9: ~60-90 minutes
- PROMPT 10-11: ~30-45 minutes
- **Total:** 3-4 hours for complete website generation

**When to Iterate:**
- If design system colors don't feel right → Revise in PROMPT 3
- If components don't match brand → Adjust in PROMPT 4
- If copy sounds off-brand → Refine in PROMPT 7
- If layout breaks on mobile → Fix in PROMPT 5

---

## 🔄 REUSABILITY

This chain can be reused for:
- ✅ New client projects (just swap brand kit)
- ✅ Website redesigns (update design tokens)
- ✅ Landing pages (skip unnecessary sections)
- ✅ Multi-brand portfolios (batch process)

Save this document and treat it as a **Website Generation SOP**.

---

**END OF CHAIN-OF-PROMPTS DOCUMENT**
