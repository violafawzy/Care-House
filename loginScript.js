const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthDate = document.getElementById("birthDate").value;
    const errorMessage = [];

    if (!emailRegex.test(email)) {
        errorMessage.push("Invalid Email format.")
    }

    if (!passwordRegex.test(password)) {
        errorMessage.push("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.")
    }



    if(!birthDate){
        errorMessage.push("Birth Date is required.")

    }else{
        const date = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear()

        if (age < 14) {
            errorMessage.push("Age must be more than 14.")
        }
    
    }
    

    const errorMessages = document.getElementById("errorMessages");
    if (errorMessage.length > 0) {
        errorMessages.innerHTML = errorMessage.join("<br>");
    } else {
        setTimeout(() => {
            window.location.href = "action.html";
        }, 2000);
    }
});
