import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { getDictionary } from "@/i18n/dictionaries";
import { COOKIE_CONSENT_KEY } from "@/lib/cookie-consent";

import { Cookies } from "./index";

const meta = {
  component: Cookies,
  tags: ["ai-generated"],
  args: {
    dict: getDictionary("pl"),
  },
} satisfies Meta<typeof Cookies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoConsentYet: Story = {
  loaders: [
    async () => {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return {};
    },
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("button", { name: /akceptuję/i })).toBeVisible();
    await expect(canvas.getByRole("button", { name: /odrzuć/i })).toBeVisible();
  },
};

export const AlreadyDecided: Story = {
  loaders: [
    async () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, "granted");
      return {};
    },
  ],
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole("button", { name: /akceptuję/i })).not.toBeInTheDocument();
  },
};
