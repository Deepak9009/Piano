const pianoKeys=document.querySelectorAll(".piano-keys .key"),
volumeslider=document.querySelector(".volume-slider input");
keyCheckbox=document.querySelector(".keys-checkbox input");
let allkey=[]
let audio=new Audio("tunes/a.wav");
const playtune =(key) =>{
    audio.src=`tunes/${key}.wav`;
    audio.play();
    console.log(allkey);

    const clickedKey=document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },200)
}
pianoKeys.forEach(key =>{
    allkey.push(key.dataset.key);
    key.addEventListener("click",()=>playtune(key.dataset.key));
    
});

const handleVolume=(e)=>{
    audio.volume=e.target.value;
}
const pressedKey =(e)=>{
    if(allkey.includes(e.key))
        playtune(e.key);
}
const hideShowKeys=()=>{
    pianoKeys.forEach(key =>key.classList.toggle("hide"))
}
keyCheckbox.addEventListener("click",hideShowKeys);
volumeslider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);