//Javascript objects
//Objects are similar to arrays, except you access the data in objects through 'properties'.

/*
build js objects
Accessing Object Properties with Dot/Bracket Notation
Updating Object Properties
Add New Properties to a JavaScript Object
*/

const WHSKY = 
{
    "name": "Raghav",
    "code": 731,
    "gender": "M",
    "clan": "SHARABIYON",
    "IQ": 130,
    "enemies": ["Females", "Alcohol"],
    "weakness": ["Females","Alcohol"]
};
const VERMOUTH =
{
    "name": "Sarthak",
    "code": "overachiever",
    "gender": "M",
    "clan": "SHARABIYON",
    "IQ": 120,
    "enemies": ["Homies"],
    "weakness": ["Females","can't shut up","can't stop it"]
};  
const MERLOT =
{
    "name": "Aryan",
    "code": "Bhainga",
    "gender": "M",
    "clan": "SHARABIYON",
    "IQ": 100,
    "enemies": ["Facts", "VERMOUTH"],
    "weakness": ["A flower","Easily manipulated","Short tempered"]    
};
const HYDRA =
{
    "name": "Divyansh",
    "code": "Kala Bahmann",
    "gender": "M",
    "clan": "SHARABIYON",
    "IQ": 125,
    "enemies": ["that one girl's boy", "non-facts"],
    "weakness": ["can't make his hands stop","that one girl","Triggers over family"]
};
const AKENO =
{
    "name": "Varun-Vatsal",
    "code": "Dilli",
    "gender": "M",
    "clan": "SHARABIYON",
    "IQ": 120,
    "enemies": ["non-dilli", "VERMOUTH"],
    "weakness": ["non-obvious facts","Triggers over family"]
};

//const Raghav = WHSKY.name;
//console.log(WHSKY.name);

console.log(VERMOUTH.name);
console.log(VERMOUTH.weakness);
console.log(HYDRA.name);
console.log(HYDRA["code"]);

AKENO.name= "Varun Vatsal";
console.log(AKENO["name"]);
console.log(AKENO.IQ);

WHSKY.cars="Mercerdes-Benz AMG G-63 & Ford Mustang Shelby GT500";
//console.log(WHSKY);

VERMOUTH.cars="Bugatti Chiron & Koenigsegg Agera";
MERLOT.cars="Mahindra Bolero & Koenigsegg Regera";
HYDRA.cars="Ford Mustang Shelby GT500 & Koenigsegg Regera";
AKENO.cars="One:1 & BMW M5";

//delete WHSKY.cars;
//console.log(WHSKY);
