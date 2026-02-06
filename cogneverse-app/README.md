
# 🌌 Cogneverse

**Where Innovation Meets Collaboration.**

Cogneverse is a modern, high-performance platform designed to connect developers, students, and researchers. It bridges the gap between academic concepts and real-world applications, fostering a community of "Thinkers and Makers."

![Cogneverse Hero](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop)

## 🚀 Key Features

-   **Dynamic Hero Section**: Interactive grid animations and floating 3D-style elements using CSS and Framer Motion.
-   **Infinite Marquees**:
    -   **Tech Stack**: Continuously scrolling display of technologies (React, Next.js, Python, Rust, etc.) using SVG icons.
    -   **Team & Values**: "Meet Our Team" and "Values" sections featuring infinite scrolling cards with hover effects.
-   **Staggered Testimonials**: A masonry-style grid layout for community testimonials with smooth entrance animations.
-   **Magic Text Reveal**: Engaging text animations for key headings using `framer-motion` and custom CSS.
-   **Custom 404 Page**: A unique, animated "Page Not Found" experience with playful stick-figure animations.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
-   **Themed Components**:
    -   Custom-built UI components based on `shadcn/ui`.
    -   Consistent design system with brand colors (Oceanic, Nectarine, Cobalt).

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**:
    -   [Framer Motion](https://www.framer.com/motion/)
    -   [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
    -   CSS Keyframes
-   **Icons**: [Lucide React](https://lucide.dev/) & Simple Icons
-   **UI Library**: [shadcn/ui](https://ui.shadcn.com/)

## 🏁 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jay-Suryawansh7/CogneoVerse.git
    cd CogneoVerse/cogneverse-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages (layout, page, globals.css)
├── components/
│   ├── effects/         # Animation effects (ScrollReveal, etc.)
│   ├── hero/            # Hero section specific components
│   ├── illustrations/   # SVG shapes and illustrations
│   ├── layout/          # Layout components (Header, Footer, Section)
│   ├── sections/        # Page sections (About, Teams, Projects, etc.)
│   └── ui/              # Reusable UI components (Marquee, Buttons, Cards)
└── lib/                 # Utilities and helper functions
```

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing a bug, improving documentation, or adding a new feature, your help is appreciated.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

built with ❤️ by the Cogneverse Team
