# Venue UI

Venue UI is an accessible React component library and design system built using CSS Modules. Supports light and dark themes.

> [!WARNING]
> **Status:** early development. APIs will change between minor versions.

## Features

- **Design tokens**: primitives (color, spacing, type, radius, motion) and semantic tokens (`--venue-color-*`), with light and dark themes
- **Accessible by default**: native elements first, labelled inputs, visible focus states, reduced-motion support, and automated axe checks on every story
- **CSS Modules**: scoped styles, no runtime CSS-in-JS
- **Typescript**: typed props that extend native HTML attributes

## Components

| Component | Status |
| Button | In progress |
| TextInput | In Progress |
| PhoneInput | In Progress |
| Card | In Progress |

## Installation

> [!CAUTION]
> Not yet published to npm. Coming in future release.

```bash
npm install @nathanielhernandez/venue-ui
```

## Usage

Import the tokens once at your app's entry point, then use components:

```tsx
import "@nathanielhernandez/venue-ui/tokens.css";
import { TextInput } from "@nathanielhernandez/venue-ui";

export function SignUpForm() {
  return (
    <TextInput
      label="Emai"
      type="email"
      description="We'll never share it. Promise"
    />
  );
}
```

### Theming

Themes are controlled by a `data-theme` attribute on `<html>`:

```js
document.documentElement.dataset.theme = "dark"; // or "light"
```

Without the attribute, the light theme is used.

## Development

Requires Node 20+.

```bash
npm install
npm run storybook      # Storybook at http://localhost:6006
npm run lint
npx tsc -b             # type check
npx vitest run --project=storybook   # story + accessibility tests
```

### Project structure

```
src/
├── components/        # one folder per component
│   └── TextInput/
│       ├── TextInput.tsx
│       ├── TextInput.module.css
│       ├── TextInput.stories.tsx
│       └── index.ts
└── tokens/
    ├── primitives/    # raw values: colors, spacing, typography, motion…
    ├── themes/        # semantic tokens: light.css, dark.css
    └── index.css      # entry point that imports everything
.storybook/            # Storybook config, theme toolbar, docs theming
.changeset/            # pending release notes
```

## Accessibility

Every component aims for **WCAG 2.2 AA**. Each one should:

- use the correct native element before reaching for ARIA
- have an accessible name (visible label or `aria-label`)
- link hints and errors with `aria-describedby`
- show a visible `:focus-visible` style with at least 3:1 contrast
- meet text (4.5:1) and UI (3:1) contrast in **both** themes
- respect `prefers-reduced-motion` via motion tokens

Every story runs through axe in CI; violations fail the build.

## Contributing

1. Branch from `main` using a prefix: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/`
   (e.g. `feat/checkbox`)
2. Add or update stories for every state, both themes
3. Run lint, type check and tests locally
4. Add a changeset describing the change: `npx changeset`
5. Open a pull request; it's squash-merged once checks pass

PR titles follow [Conventional Commits](https://www.conventionalcommits.org/),
e.g. `feat(checkbox): add indeterminate state`.

## Versioning

This project follows [semantic versioning](https://semver.org/) and uses
[Changesets](https://github.com/changesets/changesets) for release notes.
Renaming or removing a prop **or a CSS custom property** is a breaking change.
See [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](./LICENSE) © <year> <your name>
