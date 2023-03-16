// 홀수/짝수
let num = Math.ceil(Math.random() * 100)

if(num % 2 == 1 ) {
    console.log(`${num} 은/는 홀수입니다.`)
}
if(num % 2 == 0 ) {
    console.log(`${num} 은/는 짝수입니다.`)
}






let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
