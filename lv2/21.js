function solution(n) {
    var answer = '';
    //일단 n을 카운트로 세고
    //수/박/수/박 어케하지?
    var watermelon="수박";
    //반복문에서
    //홀수일 경우에는 
    //갯수에서 출력을 홀수만큼 빼내자
    for (var i =0; i<n; i++){
        answer+=watermelon
        if(n.length%2 !==0){
            answer=answer.substr(0,n)
        }
    }
    console.log(answer)
    return answer
}