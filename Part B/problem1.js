function deepEqual(ObjA , ObjB){
//check if they are both equal
if(ObjA === ObjB){return true;}

//now we have to check if they are objects

if(typeof ObjA != "object" || typeof ObjB != "object" || ObjA === null || ObjB === null){return false;}

// we need to get the keys of each objects
const getKeysA = Object.keys(ObjA);
  const getKeysB = Object.keys(ObjB);

  //check to see if the have the same lenght
if(getKeysA.length != getKeysB.length){return false;}

//loop through the keys
  for(const key of getKeysA){
    if(!(key in ObjB)){return false;}
//compare their value and we call the deepEqual function here
  if(!deepEqual(ObjA[key] , ObjB[key])){return false;}
  }

  return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
//console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
//console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))                     // false