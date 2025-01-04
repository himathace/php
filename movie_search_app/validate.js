document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener("onsubmit",function(){
        let myvalue=document.querySelector("#validemail").value
        if(!myvalue.includes("@")){
            let newelament=document.createElement("span")
            newelament.textContent="Not a valid email"
            newelament.style.color="red";
            document.querySelector("#newx").appendChild(newelament)
            return false
    
        }
    })
    
})