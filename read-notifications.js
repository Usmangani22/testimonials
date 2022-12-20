const markAll = document.getElementById("mark-as");
const unread = document.getElementById("notifies");
const unnreadMessages = document.querySelectorAll('.unread');
unread.innerText=unnreadMessages.length

unnreadMessages.forEach((messagge)=>{
    messagge.addEventListener("click",() => {
        messagge.classList.remove('unread');
        const newUnreadMessagges=document.querySelectorAll('.unread');
        unread.innerText=newUnreadMessagges.length;
    })
})




   markAll.addEventListener("click", () => {
    unnreadMessages.forEach((messagge) =>{
        messagge.classList.remove("unread");
    })
   })
