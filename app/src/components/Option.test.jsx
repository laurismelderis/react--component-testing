import { render, screen } from "@testing-library/react"
import Option from "./Option"

const props = {
  id: 1,
}

describe("Component Option", () => {
  it("should render", () => {
    render(<Option {...props} />)

    expect(screen.getByTestId("option")).toBeInTheDocument()
  })

  it("should render the provided text in label", () => {
    render(<Option {...props}>test</Option>)

    expect(screen.getByLabelText("test")).toBeInTheDocument()
  })

  it("should render the input with value from the 'id' prop", () => {
    render(<Option {...props} />)

    expect(screen.getByRole("radio")._wrapperState.initialValue).toBe(1)
  })

  it("should render the option with checkbox input", () => {
    render(<Option {...props} type="checkbox" />)

    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  it("should render the option with single choice input (radio)", () => {
    render(<Option {...props} type="radio" />)

    expect(screen.getByRole("radio")).toBeInTheDocument()
  })
})
