// const aboutMe = {
//     firstName: 'pok',
//     lastName: 'haha',
//     age: 14,
//     gmail: 'lolezlmao@gmail.com',
//     phone:'001010101010',
//     idCard: '1010192319x',

// }

// aboutMe.firstName = 'จุฑาเทพ'          // เปลี่ยนค่าของ firstName

// console.log(aboutMe.firstName)        // เเสดง firstName

// console.log(aboutMe['firstName'])     


// const aboutMe = {                             //ซ้อน nested object
//     firstName: 'pok',
//     lastName: 'haha',
//     age: 14,
//     gmail: 'lolezlmao@gmail.com',
//     phone:'001010101010',
//     idCard: '1010192319x',
//     fan: {
//         firstname: 'Lisa',
//         lastname: 'mamamoosub',
//         age: 15,
//         animal: {
//             animalType: 'cat',
//             color: 'orange',
//             }
//         },
//     bFriend: {
//     fFirstName: 'krit',
//     fLastName: 'pa',
//     fAka: 'kwew',
//         }
//     }



// console.log(aboutMe.bFriend.fAka)



const myFriends = [{
    fFirstName: 'Lisa',
    fLastName: 'Mamamoosub',
    AKA: 'SuperWoman',
    age: 16
},{
    fFirstName: 'Rosse',
    fLastName: 'Mamamoosub',
    AKA: 'RoseOnpink',
    age: 20
}, {
    fFirstName: 'Jiso',
    fLastName: 'Mamamoosub',
    AKA: 'Jinny',
    age: 24
},{
    fFirstName: 'Jenny',
    fLastName: 'Mamamoosub',
    AKA: 'WonderG',
    age: 17
}]

const myFriendAKA = myFriends.map(function(element, index) {        
    return({
        fn: element.fFirstName,
        chaya: element.AKA
    })

})

console.log(myFriendAKA)

const myFriendMoreThan = myFriends.filter(function(element, index) {
    return element.age > 19 && element.fLastName === 'Mamamoosub'
})

console.log(myFriendMoreThan)
