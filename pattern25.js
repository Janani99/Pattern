let string = "";

for (let i=1;i<=5;i++){
    for (let k = 5; k >=i; k--) {
        string += " ";
    }
    for(let j=1;j<=i;j++){
        string += j +" "
}
 string += "\n";

}
console.log(string);
//      1 
//     1 2 
//    1 2 3 
//   1 2 3 4 
//  1 2 3 4 5 