let string = "";

for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        string += String.fromCharCode(j+64) +" ";
}
 string += "\n";

}
console.log(string);
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 