function solution(n) {
    var answer=0;
    var s =Math.sqrt(n)
    if(s%1 === 0){
        return Math.pow(s+1,2)
    }
    else return -1;
    
}