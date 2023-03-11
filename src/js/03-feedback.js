import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

updateForm();


form.addEventListener("input", throttle(saveMessage, 500));


function saveMessage() {

    const inputData = {
       email: email.value,
       message: message.value,
    };
        localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
    
};


form.addEventListener("submit", checkStorage);

function checkStorage(e) {
    e.preventDefault();
     const {
        elements: { email, message } } = e.currentTarget;

    const inputData = {
       email: email.value,
       message: message.value,
    };
        console.log(inputData);
      localStorage.removeItem("feedback-form-state");
  form.reset();
};



function updateForm() {
    const dataForm = localStorage.getItem("feedback-form-state");
    const downloadData = JSON.parse(dataForm);
    if (downloadData === null ) {
        email.value = " ",
        message.value = " ";
        return;
    }
     
       email.value=downloadData.email,
       message.value = downloadData.message
   
    
};
