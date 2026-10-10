---
"@nathanielhernandez/venue-ui": minor
---

Card: `padding` is now an optional size (`small`/`medium`/`large`/`xlarge`, default `large`) instead of a required number. Replace `padding={24}` with `padding="large"`. Card adds `header`, `headerSize`, `icon`, and `endSlot` (pinned to the bottom of the card). Input now fills its container's width (`flex` instead of `inline-flex`), defaults `type` to `"text"`, and shows labels in regular weight using the new `--venue-label-color` token. Adds header size tokens (`--venue-header-size-sm` to `-xxl`).
