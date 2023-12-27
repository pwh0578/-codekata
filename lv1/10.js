function solution(numbers) {
    // numers 를 하나씩 answer 에 더해 그리고 갯수 만큼 나눠서 출력.
    var answer = 0;
    for(var i =0; i<numbers.length; i++){
        answer+=numbers[i] ;
    } 
    answer = answer / numbers.length
    return answer
}