let studentdata=["vicky","dinesh","magi","raja","sathish"]

var inserting=()=>
{
    let temp=document.getElementById('user')
    studentdata.push(temp.value);
    alert("your value is added su/cessfully"+temp.value)
}

let updating=()=>
{
    let index=document.getElementById('user').value
    const newone=prompt("Teell us you want replace/update"+studentdata[index])
    studentdata[index]=newone;
}
var deleting=()=>
{
    let temp=document.getElementById('user').value
    studentdata=studentdata.filter((data)=>
   
   {
    return data!==temp;
   } )
   alert('value deleted')
}

let viewpoint=()=>
{
    let hi="";
    studentdata.map((data)=>
    {
        hi+="<tr><td>"+data+"<tr><td>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px;box-shadow:5px 6px 4px pink;'><thead><tr><th> student names</th></tr></thead><tbody>"+hi+"</tbody></table>"
}