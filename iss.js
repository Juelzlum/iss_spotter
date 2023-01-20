/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = function(callback) { 
request('https://api.ipify.org?format=json', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    return callback(error, null);}
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  const ip = JSON.parse(body).ip;
  callback(null, ip);
});
}

const fetchCoordsByIP = (ip, callback) =>{
  request(`https://ipwho.is/42/${ip}`, (error, response, body) =>  {
    if(error){
      callback(error, null)
      return
    }
    const data = JSON.parse(body)
  if(!data.success){
    const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
    callback(Error(message), null);
    return
  }
  const { latitude, longitude } = parsedBody;

  callback(null, {latitude, longitude});
  })
};
//   //  * Input:
//  *   - An object with keys `latitude` and `longitude`
//   *   - A callback (to pass back an error or the array of resulting data)
//   * Returns (via Callback):
//   *   - An error, if any (nullable)
//   *   - The fly over times as an array of objects (null if error). Example:
//   *     [ { risetime: 134564234, duration: 600 }, ... ]
//   */

const url = 'https://iss-flyover.herokuapp.com/json/?lat=49.281787&lon=-123.117433'

const fetchISSFlyOverTimes = function(coords, callback) {
  request(url, (error, response, body) =>  {
    if(error){
      callback(error, null)
      return
    }
    if (response.statusCode !== 200){
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`),null)
      return
    }
})
const times = JSON.parse(body).response
callback(null, times)

}

const nextISSTimesForMyLocation = (callback) => {}


module.exports = { fetchMyIP ,fetchCoordsByIP,fetchCoordsByIP,fetchISSFlyOverTimes, nextISSTimesForMyLocation}