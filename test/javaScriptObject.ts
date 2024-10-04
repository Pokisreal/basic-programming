
const person = {
    firstName: 'john',
    lastname: 'Doe',
    age: 15,
    isMale: true,
    sister: {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 12,
        ismale: false
    }
}

person.sister.lastName = 'Smith'


const number = [1, 2, 3, 4, 5] // -> ['1','2','3','4','5']
// เเบบยาก
function covertToArrayString(array: number[]) {
    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    } 
    return result
}

//เเบบง่าย ใช้ .map

function covertToArrayStringWithMap(array:number[]) {
    return array.map(function(element) {
        return element.toString
    })
}
 
const names = ["John Doe", "Jane Smith", "Jack Brown"];

function cutNameWithMap(array: string[]) {
    return array.map(function(element, index){
        const cutName = element.split(" ")
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNameWithMap(names))