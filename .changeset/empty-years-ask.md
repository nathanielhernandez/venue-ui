---
"@nathanielhernandez/venue-ui": minor
---

Input: `className` now goes on the outer wrapper instead of the `<input>`, so spacing and width classes work. PasswordInput: `label` is optional (defaults to "Password"), and the show/hide button no longer fades twice when disabled. Button: icon-only styling now requires the `icon` prop, so an empty button with `leadingVisual` no longer looks like an icon button. Heading: add `xsmall` size (16px), now the default for h6. Tokens: add `--venue-header-size-xs`, raise `--venue-label-color` contrast to meet WCAG AA, set `--venue-input-bg` to `transparent`, and remove the unused `--venue-input-bg-disabled`.
