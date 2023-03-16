// 생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth = 3, bDay = 8;
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDay() + 1;
console.log(tYear,tMonth,tDay);

let age;
if (tMonth > bMonth)
    age = tYear - bYear;
else if(tMonth < bMonth)
    age = tYear - bYear -1;
else {
    if(tDay >= bDay)
    age = tYear - bYear;
    else
    age = tYear - bYear -1;    
}       
console.log(age)

console.log(`생일은 ${bYear}년 ${bMonth}월 ${bDay}일 나이는 ${age}살 입니다.`);
console.log(`만나이로는 ${age}살 입니다`);


