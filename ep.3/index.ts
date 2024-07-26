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

readi('mix' , 'zane' , 'pok')

