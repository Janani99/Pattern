let string = "";

for (let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==1||i==1||j==5||i==5){
string += '* ';
        }
        else
        {
            string += '  '; 
        }
}
 string += "\n";

}
console.log(string);

// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 
