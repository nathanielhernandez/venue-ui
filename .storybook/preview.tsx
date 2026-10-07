import type { Preview } from "@storybook/react-vite";
import "../src/tokens/index.css";
import "./preview.css";
import { ThemedDocsContainer } from "./ThemedDocsContainer";

const preview: Preview = {
  tags: ["autodocs"],

  parameters: {
    a11y: {
      // fail tests on accessibility violations ("todo" = warn only, "off" = skip)
      test: "error",
    },
    docs: {
      // docs pages follow the toolbar theme too
      container: ThemedDocsContainer,
    },
  },

  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },

  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme;
      return Story();
    },
  ],
};

export default preview;
