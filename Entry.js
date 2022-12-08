let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;



const increment =()=>{
    count = count + 1; 
    countEl.innerHTML = count;
}







function save(){
    let saveCount = count + " - ";
    saveEl.innerText  = saveEl.innerText +  "  " + saveCount;
    countEl.innerText = 0;
    count = 0;
}



