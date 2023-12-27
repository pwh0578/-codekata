function solution(x) {
    var str=x+"";
    var answer=0;
    
    
    for(var i=0; i<str.length; i++){
        answer+=Number(str[i]) 
        
}
      console.log(answer)
    
    if(x%answer === 0){
        return answer=true;
    }else return answer=false;
}