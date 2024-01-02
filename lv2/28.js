process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //배열화
    const a = Number(n[0]), b = Number(n[1]); //배열 원소의 숫자화
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

    
});