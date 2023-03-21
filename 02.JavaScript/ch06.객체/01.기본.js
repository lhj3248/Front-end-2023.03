// 객체

// 배열
let fruits = ['딸기', '사과', '수박', '참외'];
console.log(typeof fruits)

let fruitobj =  {0 :'딸기', 1:'사과', 2:'수박', 3:'참외'};  // 키(인덱스): 밸류 
console.log(fruits[0],fruitobj[1]);

// 객체(objct, Python dictionary, java Map)
let personArray = ['제임스', 28, '남자', 175, '프로그래머, 30.0'];
let personInfo = {
    name : '제임스', age : 28, gender : '남자',     // key가 string인 경우 따음표 생략 가능
    height : 175, job : '프로그래머', bmi : '30.0'
}

console.log(personArray);
console.log(personInfo);
console.log();

// 객체에 대한 접근
console.log(personInfo['name']); // 이런식으로 사용하지 않음.
console.log(personInfo.name);    // 대부분 이렇게 사용함
let key = 'age';
console.log(personInfo[key]);

