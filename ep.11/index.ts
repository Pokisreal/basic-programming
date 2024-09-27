// const database = [
//     {
//         email: 'max@utk.ac.th',
//         password: 'bWF4aUB1dGsxMjM0'
//     },
// ]

// function login(email: string, password: string) {
//     const user = database.filter(function (element, index) {
//         return element.email === email
//     })
//     if (user.length > 0) {
//         if (atob(user[0].password) === password) {
//             console.log('เข้าสู่ระบบเเล้ว')
//         } else {
//             console.log('รหัสผ่านไม่ถูกต้อง')
//         }
//     } else {
//         console.log('ไม่มีผู้ใช้งานในระบบ')
//     }
// }

// login('max@utk.ac.th', 'maxi@utk1234')


// function login(email: string, password: string) {
//     const user = database.filter(function (element, index) {
//         return element.email === email
//     })
//     if (!(email.includes('@') && email.lastIndexOf('@') !== email.length - 1)) {
//         alert('Mail ไม่ถูกต้อง')
//         return
//     }
//     if (user.length === 0) {
//         alert('ไม่มีผู้ใช้งานในระบบ')
//         return
//     }
//     if (!(atob(user[0].password) === password)) {
//         alert('รหัสผ่านไม่ถูกต้อง')
//         return
//     }
//     alert('เข้าสู่ระบบเเล้ว')

// }


