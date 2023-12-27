function solution(phone_number) {
    var answer = '';
    answer =phone_number.toString().split("")
    for(var i=0; i<answer.length-4; i++){
       answer[i]='*'
    }
       console.log(answer)
   answer =answer.join('')
    console.log(answer)
    return answer
}