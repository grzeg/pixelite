import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Button } from "./button";

const meta = {
  component: Button,
  tags: ["ai-generated"],
  args: {
    children: "Napisz e-mail",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "default" },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("button", { name: /napisz e-mail/i })).toBeVisible();
  },
};

export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("button", { name: /napisz e-mail/i })).toBeDisabled();
  },
};

export const CssCheck: Story = {
  args: { variant: "default" },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: /napisz e-mail/i });
    // Button default variant uses bg-primary -> --brand-orange-strong (#b85500).
    await expect(getComputedStyle(button).backgroundColor).toBe("rgb(184, 85, 0)");
  },
};
