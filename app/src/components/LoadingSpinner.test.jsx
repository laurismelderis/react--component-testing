import { render, screen } from "@testing-library/react"
import LoadingSpinner from "./LoadingSpinner"

describe("Component LoadingSpinner", () => {
  it("should render", () => {
    render(<LoadingSpinner />)

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument()
  })
})
