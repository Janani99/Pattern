let string = "";

for (let i=5;i>=1;i--){
    for(let j=5;j>=i;j--){
        string += j +" ";
}
 string += "\n";

}
console.log(string);
// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 