// String 객체

let stringFromLiteral = '안녕하세요?';
let stringFromConstructor = new String('안녕하세요?');

// 속성(at)
console.log(stringFromLiteral.length);

// // 메소드(method)
// let str = '안녕하세요?';
// console.log(str[0], str.charAt(0));
// console.log(str.concat('여러분!'));
// console.log(str.indexOf('하'));

// 디지털 시계, 00:00 ~23:59
// 하루동안 3이 표시되는 시간은 몇초인가?

let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++){
    for ( let minute = 0; minute < 60; minute++) {
        let display = hour + ':' + minute;
        if (display.indexOf('3') >= 0)  //display에 3이 있으면 0 이상인 값을 반환
            totalSeconds += 60;
    }
}
console.log(totalSeconds);

console.log('pineapple'.lastIndexOf('p'));

//정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps over the lazy dog 게으른 개를 ㅋㅋ';

// let newStr = sample.replace('A', 'a');
// console.log(newStr);

newStr = sample.replace(/[A-Z]/, '대'); //한개만 바꿈
console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');  //모두 바꿈
console.log(newStr);

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎ ㅏ-ㅣ가-힣]/g,'');
console.log(newStr);
// 한글과 공백 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎ ㅏ-ㅣ가-힣 ]/g,'');
console.log(newStr);

// 문자열을 분리하여 배열을 반환
let fruitsString = '사과, 배, 감, 포도';
let fruitArray = fruitsString.split(',');
console.log(fruitArray);

// 문자열 일부분
const today = new Date(). toISOString();
console.log(today); // 2023-03-20T06:57:20.344Z
console.log(today.substring(0,10)); // 2023-03-20
console.log(today.substring(11,19)); // 06:57:20
console.log(new Date().getHours());

// YYYY-MM-DD hh:mm:ss
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` + 
    `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}
let now = myDatetime();
console.log(now);
console.log(now.substring(2));

console.log('  hello  '.trim());

console.log('33'.split('3').length); // ['','','']


// ispalindrome 함수 만들기





// 1에서 1000까지 숫자가 있다
// 0은 몇번 1은 몇번 ..., 9는 몇번 사용되는가?

let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;
console.log(numStr.length);
for (let num = 0; num <= 9; num++) {
    let count = numStr.split(String(num)).length -1;
    console.log(`${num} 은/는 ${count} 번 사용됨.`);
}





// ispalindrome 함수 만들기
function ispalindrome(str) {
    let reverseStr = '';
    for (let i = str.length -1; i>=0; i--)
        reverseStr += str[i];
    return str == reverseStr;
}
console.log(ispalindrome('우영우'));
console.log(ispalindrome('기러기'));

// C:\\program Files\\nodejs\\node.exe 에서 파일명만 출력하세요
const path = 'C:\\program Files\\nodejs\\node.exe'
console.log(path.substring(24));
let index =path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);

let pathArray = path.split('\\');
console.log(pathArray[pathArray.length -1]);