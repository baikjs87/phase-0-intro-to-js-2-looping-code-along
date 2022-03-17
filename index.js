// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts
// }

// wrapGifts(gifts);



function writeCards(name, event) {
    const thankYouCards = []
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you ${name[i]}, for the wonderful ${event} gift!`)
        //debugger
    }
    return thankYouCards.push(name)
}

writeCards(['Ada', 'Brendon', 'Ali'], 'birthday')



function countDown(int) {
    while (int >= 0) {
        console.log(int--)
    }
}

countDown(10)