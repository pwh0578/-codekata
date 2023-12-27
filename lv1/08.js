// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }

function solution(angle) {
    var answer = 0;
    if(angle > 0 && angle <90){
        return answer =1;
    }else if(angle === 90){
        return angle =2;
    }else if(angle > 90 && angle <180){
        return angle=3;
    }else if(angle =180){
        return angle =4;
    }
    
}