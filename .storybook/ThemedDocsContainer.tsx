import { useEffect, useState, type ComponentProps } from "react";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { themes } from "storybook/theming";

const readTheme = () => document.documentElement.dataset.theme;

/**
 * Docs pages use Storybook's own theme, not our tokens.
 * Follow the data-theme attribute the toolbar decorator sets on <html>,
 * and swap Storybook's docs theme to match.
 */
export function ThemedDocsContainer(
  props: ComponentProps<typeof DocsContainer>,
) {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <DocsContainer
      {...props}
      theme={theme === "dark" ? themes.dark : themes.light}
    />
  );
}
