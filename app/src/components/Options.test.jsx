import { render, screen } from "@testing-library/react"
import Options from "./Options"

const mockOptions = [
  { id: "1", text: "option1" },
  { id: "2", text: "option2" },
  { id: "3", text: "option3" },
]

describe("Component Options", () => {
  it("should render", () => {
    render(<Options />)

    expect(screen.getByTestId("options")).toBeInTheDocument()
  })

  it("should render 3 options", () => {
    render(<Options options={[...mockOptions]} type="checkbox" />)
    expect(screen.getByText("option1")).toBeInTheDocument()
    expect(screen.getByText("option2")).toBeInTheDocument()
    expect(screen.getByText("option3")).toBeInTheDocument()
  })

  it("should render options with correct type", () => {
    render(<Options options={[...mockOptions]} type="checkbox" />)
    expect(screen.getAllByRole("checkbox")).toHaveLength(3)
  })
})
