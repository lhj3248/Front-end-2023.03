// 1. 인수와 반환값이 있는 함수
function sum(min, max) {
    let result = 0;
    for (let i = min; i <= max; i++)
        result += i;
        return result;
}
console.log(sum(1,100));

// 2. 인수없이 반환값만 있는 함수
function dice() {
    return parseInt(Math.ceil(Math.random() * 6));
}
console.log(dice(), dice(), dice());

