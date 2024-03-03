let string = "";

for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        string += j%2 +" ";
}
 string += "\n";

}
console.log(string);
// 1 
// 1 0 
// 1 0 1 
// 1 0 1 0 
// 1 0 1 0 1 
