import { render, screen, fireEvent } from "@testing-library/react"
import Form from "./Form"

const props = {
  id: "1",
}

const mockOptions = [
  { id: "1", text: "option1" },
  { id: "2", text: "option2" },
  { id: "3", text: "option3" },
]

describe("Component Form", () => {
  it("should render", () => {
    render(<Form {...props} />)

    expect(screen.getByTestId("form")).toBeInTheDocument()
  })

  it("should render with provided title", () => {
    render(<Form {...props} title="test" />)

    expect(screen.getByText("test")).toBeInTheDocument()
  })

  it("should render single choice options", () => {
    render(<Form {...props} options={[...mockOptions]} type="single" />)

    expect(screen.getAllByRole("radio")).toHaveLength(3)
  })

  it("should render multiple choice options", () => {
    render(<Form {...props} options={[...mockOptions]} type="multiple" />)

    expect(screen.getAllByRole("checkbox")).toHaveLength(3)
  })

  it('should render and let user choose only one option if type="single"', () => {
    render(<Form {...props} options={[...mockOptions]} type="single" />)

    const optionElements = screen.getAllByRole("radio")

    const [option1, option2, option3] = optionElements

    expect(option1).not.toBeChecked()
    expect(option2).not.toBeChecked()
    expect(option3).not.toBeChecked()

    fireEvent.click(option1)

    expect(option1).toBeChecked()
    expect(option2).not.toBeChecked()
    expect(option3).not.toBeChecked()

    fireEvent.click(option2)

    expect(option1).not.toBeChecked()
    expect(option2).toBeChecked()
    expect(option3).not.toBeChecked()
  })

  it('should render and let user choose multiple options if type="multiple"', () => {
    render(<Form {...props} options={[...mockOptions]} type="multiple" />)

    const optionElements = screen.getAllByRole("checkbox")

    const [option1, option2, option3] = optionElements

    expect(option1).not.toBeChecked()
    expect(option2).not.toBeChecked()
    expect(option3).not.toBeChecked()

    fireEvent.click(option1)

    expect(option1).toBeChecked()
    expect(option2).not.toBeChecked()
    expect(option3).not.toBeChecked()

    fireEvent.click(option2)

    expect(option1).toBeChecked()
    expect(option2).toBeChecked()
    expect(option3).not.toBeChecked()

    fireEvent.click(option3)

    expect(option1).toBeChecked()
    expect(option2).toBeChecked()
    expect(option3).toBeChecked()

    fireEvent.click(option2)

    expect(option1).toBeChecked()
    expect(option2).not.toBeChecked()
    expect(option3).toBeChecked()
  })

  it("should render an error if wrong type is provided", () => {
    const type = "test"

    render(<Form {...props} options={[...mockOptions]} type={type} />)

    expect(
      screen.getByText(
        `Component <Form type={${type}}/> prop "type" with a value of ${type} is not found.`
      )
    ).toBeInTheDocument()
  })
})
