let arr = [
    [2,5,8,6,7,4,7],
    [5,9,2,3,6,6,8],
    [7,2,3,7,3,2,3],
    [5,1,4,2,8,1,2],
    [2,3,7,4,2,5,1]
]

console.log('///////////////////////////');
console.log('//////FIRST SOLUTION //////');
console.log('///////////////////////////');
//FISRT SOLUTION ////
let arr2 = []

for (let i = 0; i < arr[0].length; i++) {
    arr2[i] = []
    let ch = ''
    for (let x = 0; x < arr.length; x++) {
        arr2[i][x]=arr[x][i] 
        // console.log(arr2[i][x]);
        if (x < arr.length-1) {
            ch+= arr2[i][x]+ ','
        }else {
            ch+= arr2[i][x]
        }
        
    }
    console.log(ch);
    
    
}
console.log('////////////////////////////');
console.log('//////SECOND SOLUTION //////');
console.log('////////////////////////////');

//SECOND SOLUTION ////
console.log(arr[0].map((col, c) => arr.map((row, r) => arr[r][c])));
