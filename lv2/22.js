function solution(a, b) {
    var answer = 0;
  
    console.log(a,b)
    //둘을 곱하게 만들어야해
    //반복문사용 돌게 만들어서 
    //한곳에 집어넣자 += 이용
    for(var i=0; i<a.length; i++){
        answer+=a[i]*b[i]
        console.log(typeof a[i])
        }
    return answer;
}