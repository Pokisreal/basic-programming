//ควรจะใช้ data type ประเภทเดียวกัน
const cars = ['Toyota', 'BMW', 'Honda']

cars.pop() //เอาหลังออก
cars.push("Benz") //เข้าหลัง

cars.shift() //เอาตัวหน้าออก ['BMW', 'Honda']
cars.unshift('BMX') //
cars.sort() // เรียงตัวอักษร A-Z
cars.reverse() // เรียงตัวอักษร Z-A

const arr = ['Toyota', 2, true]

cars.length // มีจำนวนสมาชิกกี่ตัว
cars[2] = 'Suzuki' //การเข้าถึงสมาชิก

//for loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

//while loop
let i = 0;
while (i < cars.length) {
    console.log("while", cars[i]);
    i++
}