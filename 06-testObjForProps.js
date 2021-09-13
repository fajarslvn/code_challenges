/**
 Modify the function checkObj to test if an objec to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
 
 const checkObj = (obj, checkProp) => {
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
 }
 */

const checkObj = (obj, checkProp) =>
  obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';

console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));
console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet'));
console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house'));
console.log(checkObj({ city: 'Seattle' }, 'city'));
console.log(checkObj({ city: 'Seattle' }, 'district'));
console.log(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift'));
