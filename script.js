const userName = document.getElementById('name');
const crushName = document.getElementById('partner-name');
const btn = document.getElementById('calculate');
const result = document.getElementById('result');
const reset = document.getElementById('reset')

function handelClick(){
    let getName = userName.value;
    let getCrush = crushName.value;
    let dummyCrush = getCrush
    // console.log(getCrush);
    // console.log(getName);
    let count = 0;
   for(var i = 0;i<getName.length;i++)
   {
    for(var j =0;j<dummyCrush.length;j++)
    {
        if(getName[i]==dummyCrush[j])
        {
            count++;
            dummyCrush = dummyCrush.replace(dummyCrush[j],"");
        }
        else{
            j++;
        }
    }
   }
   let length = getName.length + getCrush.length;
//    console.log(getName.length)
//    console.log(getCrush.length)
   let ans = length - (count*2);
//    console.log(ans)
  
//const popup = document.createElement('div');
// 
// const text = document.createElement('div');
// const span = document.createElement('span')
// span.innerHTML = `${getName}` +"and "+`${getCrush}`+" are";
// text.appendChild(span);
// box.appendChild(text);
const box = document.querySelector('.container')
const modal = document.querySelector('.result');

box.style.height = "110vh"
console.log(ans)
if(ans==1 || ans==0)
{
    modal.setAttribute('id','resultmarr')  
}
 else if(ans==2)
{
    modal.setAttribute('id','resultlover')  
} 
else if(ans==3)
{
    modal.setAttribute('id','resultaff')  
} 
 else if(ans==4)
{
    modal.setAttribute('id','resultfriend')  
} 
else{
    modal.setAttribute('id','resultenemy')
}

}
// const newModal = document.querySelector('.result');
// newModal.remove('id');


btn.addEventListener('click',handelClick)

//now add event listner to reset

reset.addEventListener('click',function(){
    // let getName = userName.value;
    // let getCrush = crushName.value;
    userName.value = "";
    crushName.value = "";
    const box = document.querySelector('.container') 
    box.style.height = "75vh";
    const removeModal= document.querySelector('.result');
     removeModal.setAttribute('id',"");
   
    // getName = "";
    // getCrush = ""

})