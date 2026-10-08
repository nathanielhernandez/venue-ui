import { HtmlValidate, StaticConfigLoader } from "html-validate/browser";

const htmlvalidate = new HtmlValidate(
  new StaticConfigLoader({
    extends: ["html-validate:recommended"],
    rules: {
      // React renders boolean attributes as disabled=""
      "attribute-boolean-style": "off",
      // stories lay themselves out with inline styles
      "no-inline-style": "off",
      // React's useId() generates ids like "_r_0_", which HTML5 allows
      "valid-id": ["error", { relaxed: true }],
    },
  }),
);

/**
 * Validates the markup a story rendered and returns one line per problem,
 * e.g. `element-required-attributes: <img> is missing required "alt" attribute`.
 */
export async function validateHtml(element: HTMLElement): Promise<string[]> {
  const report = await htmlvalidate.validateString(element.innerHTML);
  return report.results.flatMap((result) =>
    result.messages.map((m) => `${m.ruleId}: ${m.message}`),
  );
}
