function solution(arr, divisor) {
    var answer = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]%divisor  === 0){
            answer.push(arr[i]);
        }
    }
    answer.sort((a,b)=> a-b)
    console.log(answer)
    if(answer.length === 0){
        answer.push(-1)
    } else return answer
    
    return answer
}