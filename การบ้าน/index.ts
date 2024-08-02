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