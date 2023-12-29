function solution(left, right) {

    var answer=0;
    for(var i=left; i<=right; i++){
           var ar=1;
        for(var j=1; j<=i/2; j++){
            if(i % j == 0){
                ar++;
            }
        }
        console.log(ar)
        if(ar % 2 === 0){
            answer+=i;
        }else {
            answer-=i;
        }        
    }
    return answer;  
}