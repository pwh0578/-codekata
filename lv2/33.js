function solution(t, p) {
    var answer = 0;
    for(var i=0; i<=t.length -p.length; i++){  
        let num = t.substr(i,p.length);
        if(Number(num) <= Number(p)){
            answer++;
        }
    }
    return answer;
}
//i가 t 문자열의 길이에서 p 문자열의 길이를 뺀 값 이상으로 올라가면 
//p와 같은 길이의 부분 문자열을 추출할 수 없기 때문입니다.