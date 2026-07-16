const display = document.getElementById('input');
function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = input;
  } else {
     display.value += input
  }  
}

function calculate() {
   try{
     display.value = eval(display.value)
   }
catch(error){
     display.value = "Error";
}



}

function clearDisplay() {
  display.value = "";  
}

function deleted(mydelete) {
  display.value = display.value.toString().slice(0, -1);
}
    

function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
   display.value = "Error"; 
  }
}

function Power() {
a = display.value;
isPower = true;
display.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolio-contact-form');
    const successBox = document.getElementById('form-success');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard page reload
        
        let isValid = true;

        // Form fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        // Error containers
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successBox.classList.add('hidden');

        // Name Validation
        if (nameField.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        // Simple Email Format Validation Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Message Validation
        if (messageField.value.trim() === '') {
            messageError.textContent = 'Please type a message.';
            isValid = false;
        }

        // Execution if client validation passes
        if (isValid) {
            // Simulated submission API event trigger
            console.log('Form Submitted!', {
                name: nameField.value,
                email: emailField.value,
                message: messageField.value
            });

            // Show confirmation UI message
            successBox.classList.remove('hidden');

            // Clear input fields completely
            form.reset();
        }
    });
});
