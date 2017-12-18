import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

const list = [
  {title: "Tim"},
  {title: "Tam"},
  {title: "Tom"}
]

app.get('/list', (req, res) => res.json(list))

app.listen(3000, () => console.log('Example app listening on port 3000!'))