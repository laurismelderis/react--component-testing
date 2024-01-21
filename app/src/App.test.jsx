import { render, screen, waitFor } from "@testing-library/react"
import App from "./App"

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

global.fetch = jest.fn()

describe("Component App", () => {
  it("should render", () => {
    fetch.mockResolvedValueOnce({
      json: async () => {
        await new Promise((res) => setTimeout(res, 1000))
        return {}
      },
    })

    render(<App />)

    expect(screen.getByTestId("app")).toBeInTheDocument()
  })

  it("should render loading spinner while fetching", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => {
        await new Promise((res) => setTimeout(res, 1000))
        return {}
      },
    })

    render(<App />)

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument()

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
  })

  it("should render error message if fetching threw", async () => {
    fetch.mockRejectedValueOnce(new Error("API request failed"))

    render(<App />)

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))

    await waitFor(() => {
      expect(screen.getByText("API request failed")).toBeInTheDocument()
    })
  })

  it("should render the quizes if fetching was successful", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockForms,
    })

    render(<App />)

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))

    await waitFor(() => {
      expect(screen.getByText("test1")).toBeInTheDocument()
    })
  })
})
