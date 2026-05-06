# Gemini Project Context: Dark Reader Ad-Free

## Project Overview
**Dark Reader Ad-Free** is a modified fork of the popular [Dark Reader](https://github.com/darkreader/darkreader) browser extension. This fork is specifically optimized for **Chrome Manifest V3 (MV3)** and focuses on a "pure" experience by removing all advertisements, donation prompts, and news push notifications.

### Key Technologies
- **Language:** TypeScript (Strict mode)
- **UI Framework:** [Malevic](https://github.com/alexanderby/malevic) (a minimal JSX-like library used by the original author)
- **Build Tool:** Custom build system located in `tasks/`, utilizing **Rollup** for bundling.
- **Testing:** Jest (Unit/Browser tests), Karma (Injection tests).
- **Target Platforms:** Exclusively optimized for **Manifest V3 (MV3)** on Chrome and Firefox. Legacy MV2 and Thunderbird support has been removed.

---

## Directory Structure
- `src/`: Main source code.
    - `background/`: Extension background scripts (service workers in MV3).
    - `ui/`: Popup and settings UI (Malevic components).
    - `inject/`: Scripts injected into web pages to apply dark themes.
    - `generators/`: Logic for generating dark mode CSS (Dynamic, Filter, Static).
    - `api/`: Public API for external usage.
    - `config/`: Default configurations and theme fixes.
    - `_locales/`: Internationalization (i18n) files.
- `tasks/`: Custom build orchestration scripts (written in Node.js).
- `tests/`: Comprehensive test suite.
    - `unit/`: Logic-only tests.
    - `browser/`: Integration tests using Puppeteer.
    - `inject/`: Tests for injected script behavior.
- `build/`: Output directory for compiled extensions (generated).

---

## Building and Running
The build system is managed via `tasks/cli.js`.

### Development Commands
- **Install dependencies:** `npm install`
- **Build for production (MV3):** `npm run build --release`
- **Debug build:** `npm run debug`
- **Watch mode (MV3):** `npm run debug:watch:mv3`
- **Linting:** `npm run lint`

### Output Locations
- Production: `build/release/chrome-mv3/`
- Debug: `build/debug/chrome-mv3/`

---

## Development Conventions
1. **MV3 Focus:** New features and fixes should prioritize Manifest V3 compatibility.
2. **Ad-Free Mandate:** DO NOT introduce or re-introduce any promotional content, donation links, or news components.
3. **Type Safety:** Maintain strict TypeScript typing. Use `src/definitions.d.ts` for global types.
4. **Build Tasks:** If modifying the build process, update the relevant script in `tasks/`. `tasks/build.js` is the entry point for the build pipeline.
5. **Testing:** Any significant change to theme generation or background logic should be accompanied by tests in `tests/`.
6. **Code Style:** Adhere to the existing ESLint configuration (`eslint.config.js`).

---

## Technical Notes
- **Theme Generation:** The core of the extension is the `Dynamic Theme` engine (`src/generators/dynamic-theme.ts`), which analyzes pages and generates CSS in real-time.
- **CSP (Content Security Policy):** The fork has specific fixes for CSP warnings; ensure new manifest changes don't violate MV3 security standards.
- **Performance:** Performance is a key goal. Avoid heavy dependencies or synchronous blockages in the background worker.
