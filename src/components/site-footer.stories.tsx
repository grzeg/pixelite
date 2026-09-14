import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { SiteFooter } from "./site-footer";

const meta = {
  component: SiteFooter,
  tags: ["ai-generated"],
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("link", { name: /linkedin/i })).toBeVisible();
  },
};
