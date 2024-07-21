const button=document.querySelector('.button1');
const paragraph=document.querySelector('.joke')
const heading=document.querySelector('.heading');
const reveal=document.querySelector('.reveal')


button.addEventListener('click',loadData)
function loadData(){
const p=fetch('https://official-joke-api.appspot.com/jokes/random');
console.log(p)
  p.then((data)=>{
    data=data.json()
    data.then((maindata)=>{
        heading.innerText=maindata.setup
        paragraph.innerText='';
        reveal.onclick=()=>{
            let count=3;
            paragraph.innerText=count;
            const time=setInterval(()=>{
                count--;
                if(count>0)
                {
                    paragraph.innerText=count;  
                }
                else{
                    clearInterval(time)
                    paragraph.innerText=maindata.punchline;
                    
                }
            },1000)
        }
        
    
    })
})


}
