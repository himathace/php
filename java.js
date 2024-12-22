document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".form").onsubmit=function(){
        if(document.querySelector("#hi").value=""){
            document.querySelector(".rre").textContent="cannot be null"
        }


    }
})