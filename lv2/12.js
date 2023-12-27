function solution(a, b) {
    //a+b 를 먼저 만들?
    var answer = 0;
    console.log(a,b)
    if(a>b){
        for(let j=b; j<=a; j++){
            answer+=j
        }
    }
    for(let i =a; i<=b; i++){
      answer+=i;
    }
    
    return answer;
}