/** @type { import('@storybook/react').Preview } */
import { Story } from "@storybook/blocks";
import "../src/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "100%",
  gap: "10px 30px",
};

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
