function deepFreeze(obj){
// check if it is an object
if(typeof obj === "object"){
  Object.freeze(obj);
}
// get all the values inside the object
const values = Object.values(obj);
 // loop through the values to find nested objects
  for(const value of values){
    if(typeof value === "object"){
    deepFreeze(value);
}
  }
return obj;
}
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
//config.api.baseUrl = 'https://changed.com' // should be ignored
//config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true