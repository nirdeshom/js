const facebookId = 614360100;
let facebookEmail = "nir@gmail.com";
var facebookPassword = "NIrd@12";
facebookCity = "Sitapur";
let facebookState;
// facebookId = 19222535 // not allowed

facebookEmail = "om@gmail.com";
facebookPassword = "OMje@#12"
facebookCity = "Bengaluru";

console.log(facebookId);
console.table([facebookId, facebookEmail, facebookPassword, facebookCity, facebookState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/