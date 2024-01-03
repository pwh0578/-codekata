function solution(n, m) {
    var answer = [];
    //최대 공약수 m%n ===0 인 경우
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    answer[0]=gcd(n,m)
    answer[1]=lcm(n,m)
    return answer
    }    
    