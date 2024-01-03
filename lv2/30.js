function solution(n) {
    //3진법 n.tostring(3)
    //배열화 후 reverse()
    //다시 tostring(10)
    var answer = n.toString(3)
                 .split('')
                 .reverse()
                 .join('')
    answer=parseInt(answer,3)
    console.log(answer)
    return answer
}