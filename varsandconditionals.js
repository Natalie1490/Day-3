let jonSnowAttack = 25
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDenfense = 10

let healthJuice = 50

if (jamieLannisterAttack < jonSnowAttack){
    console.log("Jon Snow is in it to win it!")
} else if(jonSnowAttack < jamieLannisterAttack){
    console.log("Jamie Lannister is killing the game, literally!")
} else{
    console.log("It's a tie... Such losers")
}

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDenfense){
    console.log("Jon is gone")
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDenfense
    console.log(jonSnowHealth)
}

if (jonSnowHealth + healthJuice > 100){
    jonSnowHealth = 100
} else{
    jonSnowHealth += 50
}

let coinLandsHeads = false

if(coinLandsHeads !== true){
    console.log("The fight continues")
} else{
    console.log(" Jon makes his escape")
}

// for(let i = 0; i < 5; i++){
//     if(jonSnowHealth <= 0){
//         console.log("Jon has died")
//     } else {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDenfense
//     console.log(`Jon Snow's health has been reduced to ${jonSnowHealth}`)
//     }
// }

while(jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack - jonSnowDenfense
    console.log(`Jon Snow's health has been reduced to ${jonSnowHealth}`)
    if(jonSnowAttack <= 0){
        console.log("Bye bye Jon")
    }
}