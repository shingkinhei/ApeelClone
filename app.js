// Nav Menu

let toggler = document.querySelector("#toggler");

toggler.addEventListener("click",function(e){
    let leftMenu = document.querySelector("#leftMenu");
    let rightMenu = document.querySelector("#rightMenu");
    let detailMenu = document.querySelector("#detailMenu");
    if(toggler.checked ===true){
        leftMenu.classList.remove("hidden");
        rightMenu.classList.remove("hidden");
        detailMenu.classList.remove("hidden");

    }else{
        leftMenu.classList.add("hidden");
        rightMenu.classList.add("hidden");
        detailMenu.classList.add("hidden");
    }
})

//email input

let emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus",function(e){
    let emailBox = document.querySelector("#emailBox");
    if(emailInput === document.activeElement){
        emailBox.classList.add("email-box-focus");
    }else{
        emailBox.classList.remove("email-box-focus");
    }
});