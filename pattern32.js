let string="";
let n=3;
for(let r=n;r>=1;r--)
{
    
    let spaces=r-1;;
    for(let k=1;k<=spaces;k++)
    {
        string += "*";
    }
    for(let c=3;c>=r;c--)
    {
        string += c;
    }
    for(let c=3;c>=r+1;c--)
    {
        string += c;
    }
    for(let k=1;k<=spaces;k++)
    {
        string += "*";
    }
     
     
    string += "\n";
}
for(let r=2;r<=n;r++)
{
    
    let spaces=r-1;;
    for(let k=1;k<=spaces;k++)
    {
        string += "*";
    }
    for(let c=3;c>=r;c--)
    {
        string += c;
    }
    for(let c=3;c>=r+1;c--)
    {
        string += c;
    }
    for(let k=1;k<=spaces;k++)
    {
        string += "*";
    }
     
     
    string += "\n";
}

 
console.log(string);

 



// **3**
// *323*
// 32132
// *323*
// **3**