let string = "";

for (let i=5;i>=1;i--){
    for(let j=i;j>=1;j--){
        string += j +" ";
}
 string += "\n";

}
console.log(string);
// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1 
// 2 1 
// 1 