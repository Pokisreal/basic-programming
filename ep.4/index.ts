// function sayHi(dayOfweek:number){
//     if(dayOfweek === 1) {
//         console.log('สวัสดีวันจันทร์') 
//         }else if (dayOfweek === 2) {
//             console.log('สวัสดีวันอังคาร')
            
//         }else if (dayOfweek === 3) {
//             console.log('สวัสดีวันพุธ')
            
//         }else if (dayOfweek === 4) {
//             console.log('สวัสดีวันพฤหัสบดี')
            
//         }else if (dayOfweek === 5) {
//             console.log('สวัสดีวันศุกร์')
            
//         }else if (dayOfweek === 6) {
//             console.log('สวัสดีวันเสาร์')
            
//         }else if (dayOfweek === 7) {
//             console.log('สวัสดีวันอาทิตย์')
            
//         }
            
//         }

// sayHi(6)


// function sayhey(dayOfweek:number) {
//     switch (dayOfweek) {
//         case 1:
//         console.log('สวัสดีวันอาทิตย์')
//         break
//         case 2:
//         console.log('สวัสดีวันอังคาร')
//         break
//         case 3:
//         console.log('สวัสดีวันพุธ')
//         break
//         case 4:
//         console.log('สวัสดีวันพฤหัสบดี')
//         break
//         case 5:
//         console.log('สวัสดีวันศุกร์')
//         break
//         case 6:
//         console.log('สวัสดีวันเสาร์')
//         break
//         case 7:
//         console.log('สวัสดีวันจันทร์')
//         break
//         default:
//         console.log('ใส่วันมาผิด')
//     }
// }
// sayhey(5)

// function cloth(size:string) {
//     switch(size) {
//         case "s":
//         console.log('ผอม')
//         break
//         case "m":
//         console.log('ผอม')
//         break
//         case "l":
//         console.log('ท้วม')
//         break
//         case "xl":
//         console.log('อ้วน')
//         break
//         case "2xl":
//         console.log('อ้วน')
//         break
//         default:
//         console.log('0-0')

//     }
// }
// cloth("l")

function fixedDecimal(n:number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(1000,3))

function fixedDecimal1(n:number){
    const g = n.toLocaleString()
    return g
}

console.log(fixedDecimal1(1000))


const str: string = "I can't go "


// function fixedDecimal1(n:number){
//     const g = n.toLocaleString()
//     return g
// }

// console.log(fixedDecimal1(1000))


// const str: string = "Pittinun"

// console.log(str.toLowerCase())             //toUpperCase() ทำตัวอักษรใหญ่ toLowerCase() ทำตัวอักษรเล็ก


function checkStringLenght(chkstr:string) {
    const x = chkstr.length
    return x
}

console.log(checkStringLenght('pittinun'))

function getCharByIndex(masage:string, index:number) {
    return masage.charAt(index)
}

console.log(getCharByIndex('หิวข้าวววว',3))

// const str: string = 'อยากกลับบ้าน'

// console.log(str.indexOf('ก'))

// const str1: string = 'ฉันรักเธอ'

// console.log(str1.includes('เกลียด'))                     //หาคำที่พิมพ์ลงในวงเล็บ


function checkStrIndex(massage1:string, find:string) {
    if (massage1.includes(find))
         console.log(massage1.indexOf(find))
 else{
     console.log('ไม่พบคำที่ค้นหา')
      }
 }
 
 
 
 checkStrIndex('อยากกลับบ้าน Home', 'm')