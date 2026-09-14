import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { getDictionary } from "@/i18n/dictionaries";

import { SiteHeader } from "./site-header";

const meta = {
  component: SiteHeader,
  tags: ["ai-generated"],
  args: {
    locale: "pl",
    dict: getDictionary("pl"),
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("link", { name: /portfolio/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Pixelite" })).toHaveAttribute("href", "/pl");
  },
};
