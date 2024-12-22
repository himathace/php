document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".form").addEventListener("onsubmit",function(){
        let fullname=document.querySelector("#hi").value
        if(fullname===""){
            let newelement=document.createElement("span")
            newelement.textContent="name cannot be empty!"
            document.querySelector("#first").appendChild(newelement)
        }


    })
})