const request = require('request-promise-native');


const fetchMyIP = () =>{
  return request('https://api.ipify.org?format=json')
}


const fetchCoordsByIP =() => {
const result = JSON.parse(body).ip
return request(`http://ipwho.is/${result}`)
}

const fetchISSFlyOverTimes = () => {
const {latitude,longitude} = JSON.parse(body)
const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
return request('url')
}
module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes}

