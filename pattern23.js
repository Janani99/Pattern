let string = "";
let k=1;

for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){

        string += k++ %2 +" ";
}
 string += "\n";

}
console.log(string);
// 1 
// 0 1 
// 0 1 0 
// 1 0 1 0 
// 1 0 1 0 1 
