const container=document.querySelector('.container')
const text=document.querySelector('.text')
const button=document.querySelector('.button')
const image=document.querySelector('.image')
const imageContainer=document.querySelector('.qrcodeimage')

imageContainer.classList.remove('hidden')
button.onclick=function(){
    let input=text.value.trim();
    if(!input){
        return
    }
    else{
        button.innerText="Generating QR Code";
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        image.onload=()=>{
            imageContainer.classList.add('hidden')
             button.innerText="Generate QR Code"
        }
      
    }
}
