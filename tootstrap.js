// body.style.backgroundColor="red"

const tootbutton=document.querySelectorAll(".tootbutton")




tootbutton.forEach(item => {
item.addEventListener("click",(eo) => {
   
    // console.log(item.parentElement.innerText);
    navigator.clipboard.writeText(item.parentElement.innerText)
item.innerText="Copied!"
item.style.backgroundColor="rgba(255, 0, 17, 0.862)";

setTimeout(() => {
    item.innerText="Copy"
    item.style.backgroundColor="rgba(254, 104, 114, 0.882)";

}, 2000);
})
});


























