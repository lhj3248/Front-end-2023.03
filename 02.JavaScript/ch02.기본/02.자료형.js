// 자바스크립트의 자료형
// 1.Number
console.log(5 / 2);
console.log(5 % 2) //modulo, 나머지 계산
console.log(2 * 10) // 2의 제곱, 1024
console.log(1.3e-8) // 1.3 x 10 ** 8

// // 2.문자열(String)
console.log('She said "I love you. "');
console.log("She said \"I love you\"");
console.log('She\tsaid\n"I love you\"');
console.log('\\ Back slash 기호를 사용할 때는 \\ 두개를 쓰면 됩니다.');
let hello = '안녕하세요?';
console.log(hello[0],hello[5]);
//template literal()
let a = 2 , b = 3;
console.log(a, '더하기' , b, '을 한 결과는', 2+3, '입니다.');
console.log(` 2 더하기 3을 한 결과는 ${2 + 3}입니다.`);
console.log(`${a} 더하기 ${b}를 한 결과는 ${2+3} 입니다. `);
console.log(`올해는 ${NewDate().getFullYear()}년 입니다.`);

// 3. 논리형(Bool)
console.log(typeof(true), typeof false); //boolean 
console.log (2== 2.0, 5 >= 4 '가나다' > '마바사');
let X 10;
console.log(X > 8 || X < -3); X > 8 또는 X < -3
console.log(X >= 0 && X <= 5);
console.log(true > 10);  // true가 1로 자동 변환되어 비교가 됨.
