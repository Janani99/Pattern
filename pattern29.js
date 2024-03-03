let string = "";
let n=5;

for (let i=0;i<2*n;i++){//no of rows
    let col=i>n? 2*n -i :i; 
    for(let j=0;j<col;j++){
        string += '*' ;
}
 string += "\n";

}
console.log(string);


// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
