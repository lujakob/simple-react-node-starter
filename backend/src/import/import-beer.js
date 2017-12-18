import mongoose from 'mongoose'
import BEER from '../models/beer'
import csv from 'fast-csv'
import path from 'path'

// mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/beer', {useMongoClient: true})
const db = mongoose.connection

db.on('error', ()=> {
  console.log( '---FAILED to connect to mongoose')
})

db.once('open', () => {

  // drop UserList collection
  db.dropCollection('BeerList').then((err, result) => {
    if (err) {
      console.log('---Drop collection BeerList failed ' + err)
    } else {
      console.log('+++Drop collection BeerList successfully')
    }
  })


  console.log( '+++Connected to mongoose')

  const importFilePath = 'csv/beer.csv'
  const options = {
    // return objects, no stringified
    objectMode: true,
    // omit first row/headers
    headers : true
  };

  let beers = []

  csv
    .fromPath(path.resolve(__dirname, importFilePath), options)
    .on('data', (data) => {
      beers.push(data)
    })
    .on("end", () => {
      saveBeers(beers)
      console.log("done");
    });

})

function saveBeers(beers) {


  // store save promises here to exit after all resolved
  let beerSavePromises = []
console.log(beers.length);
  beers.map(beer => {

    let newBeer = new BEER({
      year: beer['jahr'],
      visitors: beer['besucher_gesamt'],
      consumption: beer['bier_konsum']
    })

    let savePromise = newBeer
      .save((err, result) => {
        if (err) {
          console.log('---Beer save failed ' + err)
        } else {
          console.log('+++Beer ' + result.year +  ' saved.')
        }

      })
      .catch(e => console.log(e))

    // store save promises here to exit after all resolved
    beerSavePromises.push(savePromise)
  })

  // disconnect to exit node script, when all save's are resolved
  Promise.all(beerSavePromises).then(() => {
    console.log("disconnect");
    mongoose.disconnect()
  })
}