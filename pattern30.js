//diamond program

let string = "";
let n=5;

for (let i=0;i<2*n;i++){//no of rows
    let col=i>n? 2*n -i:i;
     let spacesinrows=n-col;
     for(let k=0;k<spacesinrows;k++){
        string += ' ' ;
     }
    for(let j=0;j<col;j++){
        console.log(i,j,col)
        //hollow diamond
        // if(j===0||col-1===j){
        //     string += '* ' ;
        // }
        // else{
        //     string += '  ' ;
        // }
      string += '* ' ;
}
 string += "\n";

}
console.log(string);
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 