function solution(n) {
    console.log(typeof n)
    var answer = n.toString().split("").sort((a,b)=>b-a).join('')
 
    return Number(answer)
}