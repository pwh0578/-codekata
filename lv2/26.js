function solution(s) {
    //숫자일경우 true
    //숫자+문자인경우 false
    //문자만 있는경우
    var answer;
    s= s.split("").map(Number)
    console.log(s)
    
    if(s.length === 4 || s.length === 6){
        if(s.includes(NaN)){
            answer=false;
        }
        else {
            answer=true;
        }
    }  
    else {
        answer = false;
    }
   return answer;
}