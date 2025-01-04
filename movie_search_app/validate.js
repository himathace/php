document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        let myvalue = document.querySelector("#validemail").value;
        let errorContainer = document.querySelector("#newx");
        
        let existingError = errorContainer.querySelector(".newclass");
        if (existingError) {
            existingError.remove();
        }

        if (!myvalue.includes("@")) {
            let newelament = document.createElement("span");
            newelament.textContent = "Not a valid email";
            newelament.className = "newclass";
            newelament.style.color = "red";
            errorContainer.appendChild(newelament);
            event.preventDefault(); // Prevent form submission
            return false; // Stop further execution
        }
    });
});