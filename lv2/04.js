function solution(n) {
    var answer = 0;
    var arr =0;
    for(var i =1; i<=n; i++){
    if(n%i === 0){
        arr+=i;
    }
    }
    
    return arr;
}