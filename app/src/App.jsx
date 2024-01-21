import { useEffect, useState } from "react"
import Forms from "./components/Forms"
import LoadingSpinner from "./components/LoadingSpinner"

const App = () => {
  const [quizes, setQuizes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setQuizes(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="App" data-testid="app">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1em",
        }}
      >
        Phishing Quizes
      </h2>
      {error ? (
        <>{error?.message || "error occured"}</>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <Forms forms={quizes} />
      )}
    </div>
  )
}

export default App
