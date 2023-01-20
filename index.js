const { callbackify } = require('util');
const { fetchMyIP } = require('./iss');
const {fetchCoordsByIP} = require('./iss')
const {fetchISSFlyOverTimes} = require('./iss')
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    fetchCoordsByIP("75.157.199.6", (error, data) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
    })
     fetchISSFlyOverTimes(result ,(error,times) => {
          if (error) {
        console.log("It didn't work!" , error);
        return;
      }
})
})
  // success, print out the deets!
  callback(null,Nextpasses)
})

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("75.157.199.6", (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked!', data)
})
const result = {latitude: '49.281787', longitude: '-123.117433'}
fetchISSFlyOverTimes(result ,(error,times) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});


