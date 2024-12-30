function myvalue(bob){

    if(bob.children[0].value===""){
        if(!bob.querySelector("span")){
            let newelement=document.createElement("span")
            newelement.textContent="Field cannot be empty!"
            newelement.style.fontSize="13px"
            newelement.style.color="red"
            bob.children[0].style.borderColor="red";
            bob.appendChild(newelement)
            return false
        }
        return false
    }
    return true
}


document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".form").onsubmit=function(){
        
        let demi=document.querySelectorAll("#first")
        let isValid=true
        demi.forEach(function(bob){
            if(!myvalue(bob)){
                isValid=false;
            }   
        });
        if(!isValid){
            return false// or event.preventDefault()
        }
    }
})