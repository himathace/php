document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        let myvalue = document.querySelector("#validemail").value;

        if (!myvalue.includes("@")) {
            let newelament = document.createElement("span");
            newelament.textContent = "Not a valid email";
            newelament.className = "newclass";
            newelament.style.color = "red";
            document.querySelector("#newx").appendChild(newelament);
            event.preventDefault();
            return false;
        }

        let first=document.querySelector("#myuser").value
        if(first===""){
            let newelement=document.createElement("span")
            newelement.textContent="username cannot be empty"
            newelement.style.color="red"
            document.querySelector("#sec").appendChild(newelement);
            event.preventDefault();
            return false

        }
    });
});