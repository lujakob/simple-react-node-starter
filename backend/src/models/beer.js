import mongoose from 'mongoose'

const Schema = mongoose.Schema

const beerSchema = new Schema({
  year: Number,
  visitors: Number,
  consumption: Number
}, {collection: 'BeerList'})

const BEER = mongoose.model('Beer', beerSchema)

export default BEER