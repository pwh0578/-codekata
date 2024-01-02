function solution(arr1, arr2) {
    var answer = [];
  
    for(var i=0; i<arr1.length; i++){
          var vac=[];
           for(var j=0; j<arr1[i].length; j++){
            vac.push(arr1[i][j]+arr2[i][j])     
        }
          answer.push(vac)
   
    }

    return answer;
}