---
"@nathanielhernandez/venue-ui": minor
---

Add PasswordInput with a show/hide toggle. Input gains an `endSlot` prop for interactive content and now uses a flex layout (the border and background moved from the `<input>` to its wrapper, so `className` no longer styles the field's border). Button gains a `ghost` variant. Icons now come from `@tabler/icons-react` (new dependency); `react-icons` is removed.
