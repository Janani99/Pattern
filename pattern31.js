let string = "";
let n=5;
for (let i=1;i<=n;i++){ //no of rows
let noofspaces= n-i;
for(let j=0;j<noofspaces;j++)
{
    string += " ";
}
for(let col=i;col>=1;col--){
        string += col;
}
for(let col=2;col<=i;col++){
    string += col;
}
 string += "\n";

}
console.log(string);

//     1
//    212
//   32123
//  4321234
// 543212345