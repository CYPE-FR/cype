//Get data
const nameInput = document.querySelector($_POST["p_name"]);
const email = document.querySelector($_POST["p_email"]);
const subject = document.querySelector($_POST["p_subject"]);
const phone = document.querySelector($_POST["p_phone"]);
const message = document.querySelector($_POST["p_message"]);
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validate data
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (subject.value.length < 1) {
        errorNodes[2].innerText = "subject cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!phoneIsValid(phone.value)) {
        errorNodes[3].innerText = "Invalid phone";
        phone.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[3].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

//Clear error / success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
}

//Check if mail is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

//Check if phone is valid
function phoneIsValid(phone) {
    let pattern = /^(06|07)[0-9]{8}/gi;
    return pattern.test(phone);
}
