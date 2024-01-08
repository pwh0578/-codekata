function solution(sizes) {
    var answer = 0;
    //각각 가로,세로 를 담을 배열을 하나 만들었습니다.
    var width=[];
    var height=[];
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]])
    //새로운 배열의 조건은 가장 큰수를 앞으로 뺄수 있는 조건의 배열 생성 
      console.log(arr)                  
     for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }
    //for문을 돌릴때 2중으로 돌렸어야 했나 생각도 했지만 우리는 출력을 하는게 아니기 때문에
    //값을 위에 만들어 둔 연산자 조건의 배열에 넣고 그걸 가로 세로 배열에 push
    return Math.max(...width)*Math.max(...height)
    
    //spread 를 통해서 배열을 풀고 가장 큰 값들의 곱으로 가장 큰 친구들을 뽑아냈습니다.
}