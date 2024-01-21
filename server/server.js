const express = require("express")
const cors = require("cors")

const app = express()
const port = 3001

const phishingQuizzes = require("./phisingQuizzes")

app.use(cors())

app.get("/", (req, res) => {
  setTimeout(() => {
    res.json(phishingQuizzes.map(({ answers, ...rest }) => rest))
  }, 3000)
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
