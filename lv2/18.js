function solution(numbers) {
    var answer = 0;
    numbers=numbers.sort();
        for(var i=0; i<numbers.length; i++){
            answer+=parseInt(numbers[i])
        }
      var sum =45-answer;
    return sum
}