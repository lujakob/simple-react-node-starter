import express from 'express'
import cors from 'cors'

import mongoose from 'mongoose'
import BEER from './src/models/beer'

const app = express()

app.use(cors())

// mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/beer', {useMongoClient: true})
const db = mongoose.connection

db.on('error', ()=> {
  console.log( '---FAILED to connect to mongoose')
})

db.once('open', () => {

  const list = [
    {title: "Tim"},
    {title: "Tam"},
    {title: "Tom"}
  ]

  app.get('/list', (req, res) => res.json(list))

  app.get('/beers', (req, res) => {
    BEER
      .find({}, 'year visitors consumption')
      .sort([['year', 1]])
      .exec((err, beers) => {
        if (err) {
          console.log(err);
        } else {
          res.json(beers)
        }
      })
  })

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
})

