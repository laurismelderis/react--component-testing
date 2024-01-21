import { render, screen } from "@testing-library/react"
import Forms from "./Forms"

const mockForms = [
  {
    id: "1",
    question: "test1",
    options: [
      { id: "1", text: "option1" },
      { id: "2", text: "option2" },
    ],
    type: "single",
  },
  {
    id: "2",
    question: "test2",
    options: [
      { id: "3", text: "option1" },
      { id: "4", text: "option2" },
      { id: "5", text: "option3" },
    ],
    type: "multiple",
  },
]

describe("Component Forms", () => {
  it("should render", () => {
    render(<Forms />)

    expect(screen.getByTestId("forms")).toBeInTheDocument()
  })

  it("should render a form with single choice", () => {
    render(<Forms forms={[...mockForms]} />)

    expect(screen.getByText("test1")).toBeInTheDocument()
    expect(screen.getAllByRole("radio")).toHaveLength(2)
  })

  it("should render a form with multiple choice", () => {
    render(<Forms forms={[...mockForms]} />)

    expect(screen.getByText("test2")).toBeInTheDocument()
    expect(screen.getAllByRole("checkbox")).toHaveLength(3)
  })
})
