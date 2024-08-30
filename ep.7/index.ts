const score: number[] = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("Avg:", avg)

// const myStudents: string = "เซน,เเทน,เวฟ,รุ้ง,เท็ก,สร"

// const myStudentsArray: string[] = myStudents.split(',')

// console.log(myStudents)
// console.log(myStudentsArray.at)


// const myStudentsArray: string[] = ["เซน,เเทน,เวฟ,รุ้ง,เท็ก,สร"]

// console.log(myStudentsArray.join('#'))

// const fullName: string = 'สุดสวย สวยสุด'

// console.log(fullName.split('')[0])

// console.log(fullName.slice(0, fullName.indexOf(' ')))


const animal: string = "เเมว*หมา*กระรอก*นก*งู"

const myAnimalArray: string[] = animal.split('*')

console.log(animal)
console.log(myAnimalArray)

console.log("ตั้งต้น:", myAnimalArray)

myAnimalArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", myAnimalArray)

myAnimalArray.push('ยีราฟ') // ใสาต่อท้าย

console.log("ใส่ต่อท้าย: ", myAnimalArray)

myAnimalArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", myAnimalArray)

myAnimalArray.unshift('กาปิบาร่า') //ใส่ตัวหน้า

console.log("ใสาตัวหน้า:", myAnimalArray)



const fruit = ["Banana", "orange" ,"Apple", "mango"]

fruit.sort() // เรียง A-Z

console.log("เรียง A-Z:, fruit")

fruit.reverse() // เรียง Z-A 

console.log("เรียง Z-A: " ,fruit)

const fruitSlice = fruit.slice(0,2)

console.log("ตัด:", fruitSlice)

const friendsName: string = "สร, รุจ, ป้อง, คิว"
const friendsNameArray: string[] = friendsName.split(',')

friendsNameArray.sort()

console.log("เรียง ก - ฮ: ", friendsNameArray)

friendsNameArray.reverse()

console.log("เรียง ฮ - ก: ", friendsNameArray)

