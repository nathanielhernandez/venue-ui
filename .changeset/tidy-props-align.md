---
"@nathanielhernandez/venue-ui": minor
---

Make component props consistent. Button: replace `icon` on text buttons with `leadingVisual` (icon-only buttons keep `icon` + `aria-label`), and add `trailingVisual` and `fullWidth`. Input: replace `icon` + `iconPosition` with `leadingVisual`/`trailingVisual`, and rename `endSlot` to `trailingAction`. Card: rename `icon` to `leadingVisual` and `endSlot` to `footer`, add `headingLevel`, remove `description`, and change `padding` to `small`/`medium`/`large` (default `medium`; old `large` is now `medium`, `xlarge` is now `large`). Remove `rounded` from Button and Input; corners come from `--venue-radius-control` and `--venue-radius-surface`. Button, Input, and PasswordInput now default to `size="medium"`, and buttons and inputs share fixed heights (`--venue-control-height-*`) and text sizes. Adds `--venue-space-8` to `-10`, gray 100–600 steps, and `--venue-line-height-tight`/`-normal`; `--venue-radius-full` is now `9999px`.
