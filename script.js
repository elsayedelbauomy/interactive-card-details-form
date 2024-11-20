let cardNumber = document.getElementById("carNumber")
let cardName = document.getElementById("cardName")
let cardMnth = document.getElementById("cardMnth")
let cardYear = document.getElementById("cardYear")
let cardCvc = document.getElementById("cardCvc")
let formName = document.getElementById("formName")
let formNumber = document.getElementById("formNumber")
let formMnth = document.getElementById("formMnth")
let formYear = document.getElementById("formYear")
let form = document.getElementById("form")
let numErro = document.getElementById("numErro")
let dateErro = document.getElementById("dateErro")
let CVCErro = document.getElementById("CVCErro")
let formCvc = document.getElementById("formCvc")
let succ = document.getElementById("succ")
let state;
let date = new Date()
let dateValid;
let dayValid;
form.onsubmit = function (e) {
    let validNum ;
    e.preventDefault()
    if (!(/^\d{4} \d{4} \d{4} \d{4}$/).test(formNumber.value)) {
        formNumber.style.borderColor = "red"
        numErro.style.visibility = "visible";
        numErro.innerHTML = "wrong format, numbers only"
        validNum = false;

    }else {
        formNumber.style.borderColor = "hsl(270, 3%, 87%)"
        numErro.style.visibility = "hidden";
        validNum = true;
    }

    if (formNumber.value == "") {
        numErro.style.visibility = "visible";
        numErro.innerHTML = "can't be blanck"
    }

    if(formMnth.value == "" || formYear.value == "") {
        dateErro.style.visibility = "visible";
        dateErro.innerHTML = "can't be blanck"
    }

    if(formMnth.value !== "" && formYear.value !== "" ) {
        dateErro.style.visibility = "hidden";
    }

    if(formMnth.value == "") {
        formMnth.style.borderColor = "red";
    }else {
        formMnth.style.borderColor = "hsl(270, 3%, 87%)";
    }

    if(formYear.value == "") {
        formYear.style.borderColor = "red";
    }else {
        formYear.style.borderColor = "hsl(270, 3%, 87%)"
    }

    if(formCvc.value == "") {
        formCvc.style.borderColor = "red"
        CVCErro.style.visibility = "visible";
    }else {
        formCvc.style.borderColor = "hsl(270, 3%, 87%)"
        CVCErro.style.visibility = "hidden";
    }
    if(formName.value == ""|| formNumber.value == ""|| formMnth.value == ""||formYear.value == ""||formCvc.value == "" || validNum == false||dateValid == false) {
        state = false
    } else {
        state = true
    }
    console.log(state)
    if(state) {
        form.style.display = "none";
        succ.style.display = "block";
    }
}

formName.onkeyup = function () {
    cardName.innerHTML = this.value
}

formNumber.onkeyup = function () {
    cardNumber.innerHTML = this.value
}

formCvc.onkeyup = function () {
    cardCvc.innerHTML = this.value
}

formMnth.onkeyup = function () {
    if (this.value > 12) {
        this.style.borderColor = "red"
    }else {
        this.style.borderColor = "hsl(270, 3%, 87%)";
    }
    if (this.value < 10) {
    cardMnth.innerHTML = "0"+this.value;
    }else {
    cardMnth.innerHTML = this.value
    }
    console.log(state)
}

formYear.onkeyup = function () {
 cardYear.innerHTML = this.value;
    if(+this.value > date.getFullYear().toString().substring(2) || +this.value > date.getFullYear()){
        dateValid = true;
        formYear.style.borderColor = "red";
         formYear.style.borderColor = "hsl(270, 3%, 87%)";
         dateErro.style.visibility ="hidden";
    }else {
        dateValid = false;
        formYear.style.borderColor = "red";
        dateErro.style.visibility ="visible";
        dateErro.innerHTML = "can't be in the past"
    }
}

function reload() {
    location.reload()
}