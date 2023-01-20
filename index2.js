const {fetchMyIP} = require('./iss_promised') 
const {fetchCoordsByIP} = require('./iss_promised')
const {fetchISSFlyOverTimes} = require('./iss_promised')

const nextISSTimesForMyLocation = () => {
fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchISSFlyOverTimes)
.then((data) => {
  const {response} = JSON.parse(data)
  return response
})
}
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
module.exports = {nextISSTimesForMyLocation}
