import "@testing-library/jest-dom"
import { expect, describe, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Button from "@lib/button"

describe("<Button />", () => {
  it("should render button text hello", () => {
    render(<Button>hello</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("hello")
  })
})
