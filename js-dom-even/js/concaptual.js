let count = 0;

const plusbtn = document.getElementById('plus-dtn')
 plusbtn = document.addEventListener("click",function(){
    count = count + 1;
    document.getElementById("count").innerText=count;
})


const minasbtn = document.getElementById('minas-btn')
minasbtn =document.addEventListener('click',function(){
    count= count - 1;
    document.getElementById("count").innerText=count;
})