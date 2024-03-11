import type { Meta, StoryObj } from "@storybook/react"

import Button from "./index"

const button: Meta<typeof Button> = {
  component: Button,
  title: "Button",
}

export default button

type Story = StoryObj<typeof Button>

// 👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    children: "Primary Button",
    // ...other args
  },
}
