const text = document.getElementById("textarea");
const totalChar = document.getElementById("total-char");
const remainChar = document.getElementById("remained-char");

text.addEventListener("keyup",()=> {
    updateCounter();
})

function updateCounter(){
    totalChar.innerText = text.value.length;
    remainChar.innerText = text.getAttribute("maxlength") - text.value.length;

}


  