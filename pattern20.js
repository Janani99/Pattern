let string = "";

for (let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==1||i==5||j==i){
        string += '*' +" ";
        }
        else{
            string += "  ";
        }
}
 string += "\n";

}
console.log(string);

// *         
// * *       
// *   *     
// *     *   
// * * * * * 
