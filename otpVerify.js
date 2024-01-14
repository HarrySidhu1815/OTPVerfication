const otpInput = document.querySelectorAll(".input input");
const submitBtn = document.querySelector(".verify")

window.addEventListener("load", () => otpInput[0].focus());

otpInput.forEach((input)=>{
    input.addEventListener("input", (e)=>{
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        console.log(currentInput);
        
        if(currentInput.value.length > 1 && currentInput.value.length == 2){
            currentInput.value = "";
        }
        if(nextInput !== null && currentInput.value !== "" && nextInput.hasAttribute("disabled")){
            nextInput.removeAttribute("disabled")
            nextInput.focus();
        }
        console.log(!otpInput[3].disabled && otpInput[3].value !== "");
        if(!otpInput[3].disabled && otpInput[3].value !== ""){
            submitBtn.classList.add("active");
        }else{
            submitBtn.classList.remove("active");
        }
    })
    input.addEventListener("keyup",(e) =>{
        if(e.key=== "Backspace"){
            if(input.previousElementSibling !== null){
                e.target.value = "";
                e.target.setAttribute("disabled", true);
                e.target.previousElementSibling.focus();
            }
        }
    })
})