// 자료형 변환
console.log (123, String(123));      //강제 변환
console.log(Number('101'), Number(true), Number(false), Number('Hello')); // Not a Number

// 다음의 경우를 제외하면 모두 참이 됨.
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(NaN),Boolean(null));
console.log(Boolean(0.00000001), Boolean(''), Boolean({}));

// 자동 변환
// boolean -> number -> string
console.log('bool' + true, 'integer' + 123, 123 + true);

// -,*,/ 인 경우에는 string -> number로 바뀜
console.log('52' - 273, '8' * 8, '4' / 2);

// 두개의 값이 똑같나?
// 1) 변환된 값이 같으면 같다.
console.log(52 == 52.0, 52 == '52')  //true, true
console.log(true == 1, false == 0.0) //true, true
// 2) 변환된 값과 자료형이 일치해야 같다.
console.log(52 == 52.0, 52 == '52') //true, true
console.log(true === 1, false === 0.0) //false, false
