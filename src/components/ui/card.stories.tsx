import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Badge } from "./badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

const meta = {
  component: Card,
  tags: ["ai-generated"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Odwzorowuje realny wpis portfolio (src/app/(site)/portfolio/page.tsx).
export const PortfolioEntry: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Migracja płatności bez przestoju w ruchu świątecznym</CardTitle>
        <CardDescription>Duży e-commerce modowy · Senior Frontend Engineer</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>Dostawca płatności wygaszał stare API w środku sezonu świątecznego.</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">e-commerce</Badge>
        </div>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/migracja płatności/i)).toBeVisible();
  },
};
