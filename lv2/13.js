// function solution(num) {
//     var answer = 0;
//     let count=0;
//     while(num !==1){
//     if(num %2 ===0){
//         num = num/2;
//         count++;
//     }else if(num %2 !==0){
//         num = (num*3)+1;
//         count++;
//     }
//     }
    
//     if(count >=500){
//         return answer=-1;
//     }else return count

// }

function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}