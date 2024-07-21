const text=document.querySelector('.text')
const Audio=document.querySelector('.audio')
const audioImage=document.querySelector('.audio-image')
const TextContainer=document.querySelector('.text-container .text')
const Pronounce=document.querySelector('.text-container .speak')
const Meaning=document.querySelector('.meaning')
const Synonyms=document.querySelector('.synonyms')
const input=document.querySelector('.input')
const Heading1=document.querySelector('.heading1')
const Heading2=document.querySelector('.heading2')
const error=document.querySelector('.error')


input.addEventListener('keydown',FetchWord)

function FetchWord(e){
if(e.key==='Enter' && input.value){
const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
const p=fetch(url)
p.then((response)=>{
   return response.json()
}).then((data)=>{
      console.log(data)
      console.log(data[0])
      if (!data[0] || data[0].length === 0) {
         error.innerText="Sorry No Data found"
       }
    const {meanings,phonetics}=data[0] 
   //  console.log(phonetics)
   
   let found=false;
   phonetics.map((index)=>{
      error.innerText=''
         Heading1.classList.remove('hidden')
         Heading2.classList.remove('hidden')
         audioImage.classList.remove('hidden')
         if(!found &&index.audio&&index.text){
            // console.log(index.audio)
            // console.log(index.text)
            found=true;
            text.innerHTML=input.value;
            Pronounce.innerText=index.text;
            audioImage.onclick=()=>{
               Audio.src=index.audio
               Audio.play()
            }
         }
   })

   console.log(meanings)
   console.log(meanings[0])
   const {definitions,synonyms}=meanings[0]
   // console.log(definitions[0].definition)
   Meaning.innerText=definitions[0].definition

   console.log(synonyms)
   Synonyms.innerHTML = '';
   if(synonyms.length>5){
     for(i=0;i<5;i++) {
      const listItem = document.createElement('li');
      listItem.innerText = synonyms[i];
      Synonyms.appendChild(listItem);
     }
   }
   else{
      for(i=0;i<synonyms.length;i++)
      {
      const listItem = document.createElement('li');
      listItem.innerText = synonyms[i];
      Synonyms.appendChild(listItem);
      }

   }
    
})
}
}
input.value=' ';


