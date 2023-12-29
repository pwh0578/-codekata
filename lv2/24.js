function solution(s) {
    //내림차순 정렬인데
    //문제는 대문자
    //조건을 만들어 줘야 함.
    var answer = '';
    s= s.split("").sort().reverse().join('')
    console.log(s)
    
    return s;
}