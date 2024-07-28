function helloworld() {
    console.log("สวัสดี")
}

helloworld() //ไม่มีinput เเละoutput

function helleName(name: string) {
    console.log(name)
}

helleName('max')


function getPi() {
    return 3.14
}

console.log(getPi()) //ไม่มี input เเต่มี output


function st(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix' , 'z')


function readi(stname: string, nd: string, rd: string) {
    if (stname === 'mix' && nd === 'zane' || rd === 'forth') {
        console.log('พร้อมเรียน') 
    } else {
        console.log('ยังไม่ร้อม')
    }
}

readi('mix' , 'XD' , 'pok')


function ready(firstname: string, secname: string, thirdname: string) {
    if (!(firstname === 'mix' || secname === 'zane') && thirdname === 'forth') {
        console.log('พร้อมเรียน') 
    } else {
        console.log('ยังไม่ร้อม')
    }
}

ready('mix' , 'zane' , 'pok')


function military(gender: string, tall: number, weight: number) {
    if (gender === 'man' && (tall > 170 || (weight > 50 && weight <= 110))) {
        console.log('จับใบดำใบเเดง') 
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
    

military('man', 160 , 115)


function digitalwall(age: number, money: number, moneyback: number) {
    if (age >= 16 && money < 70000 && moneyback < 500000) {
        console.log("รับ 1000 บาท")
    } else {
        console.log("อด...haha")
    }
}
digitalwall(20,150000000,50000000000)



function BMI(weights: number, high: number ) {
    const sumbmi = weights / (high * high)
    if (sumbmi < 18.50 ) 
        return "นํ้าหนักน้อย / ผอม"
    if (sumbmi >= 18.50 && sumbmi <= 22.90)
        return "ปกติ(สุขภาพดี)"
    if (sumbmi >= 23 && sumbmi <= 24.90)
        return "ท้วม/โรคอ้วนระดับ1"
    if (sumbmi >= 25 && sumbmi <= 29.90)
        return "อ้วน/โรคอ้วนระดับ2"
    if (sumbmi > 30)
        return "อ้วนมาก/โรคอ้วนระดับ3"

}

console.log(BMI(70,1.7))