const sumAll = function(a, b) {
    let answer = 0;
    if (typeof a === "number" && typeof b === "number" && a >= 0 && b >= 0){
        while (a !== b) {
            if (a > b) {
                answer += b;
                b++;
            }
            else {
                answer += a;
                a++;
            }
        }
        return answer + a;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4));
