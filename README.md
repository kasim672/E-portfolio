# e_portfolio — Kasim Ishaque Ghanchi

A single-page personal portfolio site: **Machine Learning Engineer | AI Researcher | Deep Learning Systems**. It presents professional background, research role, projects, skills, education, and contact in a minimal, accessible layout.

---

## Tech stack

| Layer | Technology |
|--------|------------|
| **Runtime / framework** | React 19, TypeScript |
| **Build tool** | Vite 8 (`@vitejs/plugin-react`) |
| **Styling** | Tailwind CSS v4 with `@tailwindcss/vite` |
| **Motion** | Framer Motion (scroll / stagger animations; respects `prefers-reduced-motion`) |
| **Icons** | Lucide React; inline SVGs for GitHub & LinkedIn brand icons |
| **Fonts** | DM Sans & Outfit (Google Fonts, linked in `index.html`) |
| **Linting** | ESLint 9 + TypeScript ESLint + React Hooks + React Refresh |

### Architecture & UX

- **Content** is centralized in `src/data/portfolio.ts` (single source of truth for copy and structure).
- **Sections** live in `src/sections/`; **Hero** loads immediately; **About, Current Role, Projects, Skills, Education, Contact** are loaded with `React.lazy` and `Suspense` to split the bundle.
- **Production build** can split `framer-motion` into a separate chunk (`manualChunks` in `vite.config.ts`).
- **Accessibility**: skip link to `#main`, semantic landmarks, `aria-labelledby` on sections, focus-visible styles, descriptive `aria-label`s on external links.
- **Theme**: light “Soft Ivory + Indigo Tech” palette (CSS variables in `src/index.css`); indigo accents; emerald for primary CTAs, tags, and highlights.

### Scripts

```bash
npm install    # install dependencies
npm run dev    # local dev server (HMR)
npm run build  # typecheck + production build to dist/
npm run preview # serve dist/ locally
npm run lint   # ESLint
```

---

## Portfolio content (site copy)

### Hero

- **Name:** Kasim Ishaque Ghanchi  
- **Title:** Machine Learning Engineer | AI Researcher | Deep Learning Systems  
- **Tagline:** Building intelligent AI systems using deep learning, computer vision, and NLP to solve real-world problems at scale.

### About

1. Machine Learning–focused Computer Engineering undergraduate at **Vidyalankar Institute of Technology**; **Undergraduate Researcher** in Deep Learning and AI systems; work on designing, training, and evaluating neural architectures including **CNNs** and **transformer-based models**.

2. End-to-end ML pipelines: preprocessing, feature engineering, training, evaluation, deployment; **PyTorch** and **TensorFlow**; computer vision and NLP.

3. Developing a **deep learning–based skin disease detection** system; exploring architectures for **generalization** and real-world use; goal: impactful AI research and **production-ready** intelligent systems.

### Current role

- **Title:** Undergraduate Researcher — Machine Learning & Deep Learning  
- **Organization:** Vidyalankar Institute of Technology, Mumbai  
- **Duration:** June 2025 – Present  

**Work**

- Skin disease detection system (**23 classes**).  
- Full deep learning pipeline: preprocessing, augmentation, train–validation split.  
- CNN training with **PyTorch** & **TensorFlow**.  
- Evaluation: accuracy, precision/recall, confusion matrix.  
- **Web-based inference** system.

### Projects

**1. Skin Disease Detection System** (Research · Computer Vision · Deep Learning)  
Multi-class dermatological image classification for **23** skin diseases. Highlights: preprocessing & augmentation, CNN training, advanced metrics, **web-based** real-time UI.  
*Impact:* Applied AI in healthcare with deployment-oriented design.

**2. Automated EIT Scoring System** (NLP · AI Evaluation)  
Automated language-proficiency scoring with NLP. Highlights: normalization & tokenization, alignment-based scoring, error analysis & linguistic metrics, synthetic data, **Cohen’s Kappa** reliability.  
*Impact:* NLP pipelines and evaluation systems.

**3. FOSSEE OpenFOAM GUI + Blender Integration** (Python · 3D · Scientific Software)  
Tools using data structures and **Blender API** for automated 3D mesh work. Highlights: binary trees, **YAML** parse/serialize, Blender UI plugin, dynamic mesh generation.  
*Impact:* Data structures + graphics + practical tooling.

### Technical skills (as shown on site)

- **Programming:** Python, C, Java, SQL  
- **AI / ML / DL:** PyTorch, TensorFlow, scikit-learn, ANN, CNN, Transformers  
- **Data science:** Pandas, NumPy, Matplotlib, Seaborn, Tableau, Power BI  
- **Tools:** Jupyter Notebook, Google Colab, Git & GitHub, Kaggle  
- **Backend / deployment:** Flask, FastAPI  
- **Data collection:** BeautifulSoup, Selenium, Requests  

### Education

| Credential | Institution | Period / detail |
|------------|-------------|-----------------|
| B.Tech Computer Engineering | Vidyalankar Institute of Technology, Mumbai | 2024–2028 |
| HSC: 75% | Pace Science Junior College | — |
| SSC: 85% | Mount Mary High School | — |

### Certifications

- Machine Learning Specialization — Andrew Ng  
- Deep Learning Specialization — Andrew Ng *(ongoing)*  

### Research interests

Machine Learning; Deep Learning Architectures; Natural Language Processing; Computer Vision; AI Evaluation Systems.

### Contact

- **Email:** kasimghanchi672@gmail.com  
- **Phone:** +91 7021516505  
- **GitHub:** [github.com/kasim672](https://github.com/kasim672)  
- **LinkedIn:** [linkedin.com/in/kasimghanchi](https://www.linkedin.com/in/kasimghanchi/)  

---

## Project layout (high level)

```
src/
  data/portfolio.ts    # All copy & nav config
  components/          # Layout, header, footer, UI primitives, icons
  sections/            # Hero + lazy-loaded sections
  lib/motion.ts        # Shared Framer Motion variants
  index.css            # Tailwind + design tokens
App.tsx                # Shell, lazy boundaries, skip link
main.tsx
```

To change wording or add sections, edit **`src/data/portfolio.ts`** and wire new sections in **`App.tsx`** if needed.

---

## License

Private / personal project unless you add a license file.
