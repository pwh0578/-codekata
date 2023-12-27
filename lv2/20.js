function solution(s) {
    var answer = '';
    var index= Math.floor(s.length/2)
    //홀수 대상의 위치는 s.length/2 인 인덱스 
    //홀수인경우
    if(s.length% 2  !== 0){
       answer=s[index]
    }
    //짝수인경우
    else if(s.length %  2 === 0){
        answer=s[index-1]+s[index]
    }
    console.log(answer)
    return answer;
}