function solution(price, money, count) {
    var answer = 0;
    //3*1+3*2... 으로 만들수 있는게 필요함.
    //위에 내용을 합칠 변수
    //내 돈보다 변수가 더 크다면 변수를 리턴.
    var sum=0;
    for(var i =1; i<=count; i++){
        sum+=price*i;
    }

    if(sum > money ){
        return  sum-money
    }else return 0;
}