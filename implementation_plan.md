# The Book Wardens: Rift of Pages - Implementation Plan

## 1. Project Overview
**Title**: The Book Wardens: Rift of Pages
**Concept**: RPG-gamified reading habit formation app.
**Platform**: Web Application (Mobile-First Design, 9:16 Aspect Ratio).
**Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion.

## 2. Technical Foundation & Setup

### 2.1 Dependencies
- **Styling**: `tailwindcss`, `postcss`, `autoprefixer`, `clsx`, `tailwind-merge`.
- **Animations**: `framer-motion` (for page flips, particles, UI transitions).
- **State Management**: `zustand` (for global game state: Ink, Rune, Gem, User Progress).
- **Icons**: `lucide-react`.

### 2.2 Configuration
- **Tailwind Config**: Define custom colors (Premium Violet, Deep Charcoal) and fonts (Cinzel, Outfit).
- **Global CSS**: Implement core animations (Rift Pulse, Glow) and utilities.

## 3. Design System (Dark Mode + Purple Theme)

### 3.1 Color Palette
- **Background**: Deep Charcoal (`#0F0518`), Void (`#1A0B2E`).
- **Primary**: Purple/Violet (`#9D4EDD`, `#7B2CBF`).
- **Accent**: Cyan/Teal (for Gems), Red (for Boss/Danger).
- **Text**: White (Primary), Muted Gray (Secondary).

### 3.2 UI Components
- **GlassCard**: Translucent backgrounds with subtle borders.
- **RiftButton**: Primary action button with glow effects.
- **ProgressBar**: For Ink (Liquid effect), Health (Boss battle).
- **Tygraphy**:
  - Headings: `Cinzel` (Serif, RPG feel).
  - Body: `Outfit` (Sans-serif, Readable).

## 4. Feature Implementation Roadmap

### Phase 1: Core Skeleton & Navigation
- **Layout**: Mobile-constrained container (max-width 480px).
- **Navigation**:
  - Bottom Tab Bar (Today, Library, Coach, Wardens, Vault).
  - Top Bar (Notifications, Mail, Settings).

### Phase 2: "Today" Loop (The 10-Minute Routine)
- **T-01 Today Home**: Hero card with "Enter Rift" animation.
- **T-02/03 Word Forge**: Flashcard component with specific "Mark Unknown" interaction.
- **T-06/07 Reading Engine**:
  - Text renderer with adjustable font sizes.
  - **Simulated Eye Tracking**: Logic to detect scrolling/pausing as proxy for "fixation".
  - **Ink Generation**: Visual feedback (liquid filling) as user scrolls/reads.
- **T-12/13 Boss Battle**:
  - Interactive battle screen.
  - "Attack" mechanics linked to quiz answers.

### Phase 3: Supporting Systems
- **Library**: Book grid with cover art placeholders.
- **Wardens**: Profile screen with stats (Fluency, Comprehension).
- **Vault**: Inventory for core currencies (Ink, Rune, Gem).

## 5. Directory Structure
```
src/
├── app/
│   ├── (main)/          # Authenticated Routes
│   │   ├── page.tsx     # T-01 Today Home
│   │   ├── library/     # L-01 Library
│   │   ├── coach/       # C-01 Coach
│   │   ├── wardens/     # W-01 Wardens
│   │   └── vault/       # V-01 Vault
│   ├── (game)/          # Immersive Game Modes (No Bottom Nav)
│   │   ├── rift/        # Reading/Battle flow
│   │   └── boss/        # Boss Battle
│   └── layout.tsx       # Root Layout
├── components/
│   ├── ui/              # Reusable atoms (Buttons, Cards)
│   ├── game/            # Game-specific (RiftEffect, BossSprite)
│   └── layout/          # NavBars, Headers
├── lib/
│   ├── store.ts         # Zustand Store
│   └── mockData.ts      # Book content, User stats
└── styles/
    └── globals.css
```

## 6. Immediate Next Steps
1.  **Install Missing Dependencies**: Fix Tailwind CSS setup.
2.  **Scaffold Routes**: Create file structure for the 5 main tabs.
3.  **Implement Design System**: Update `tailwind.config.ts` with the user's color palette.
