
let btnDot = document.querySelector('.dot');
let valueInput = document.getElementById("input-value");
let allButtonOp = document.querySelectorAll(".key-op");
let allButtonKey = document.querySelectorAll(".key");
let btnClose = document.querySelector(".close");
let btnEqual = document.querySelector(".eq");
let sp = document.querySelector(".out");



// remove the values from input
btnClose.onclick = function () {
    valueInput.value = "";
    window.location.reload();
}

let operationType = "";
let values = { prevValues: null, newValues: null };
let isDecimal = false;
let havDot = false;

function getNumber(num) {
    valueInput.value += num;

    // show close button
    if (valueInput.value.length > 0) {
        btnClose.style.display = "block";
    } else {
        btnClose.style.display = "none";
    }

    // check if button number
    if (isDecimal) {
        let result;
        if (values.newValues) {
            result = values.newValues + "" + num;
            // check if there are more than one dot
            if (result.endsWith("..")) {
                result = result.substring(1);
                values.newValues = result;
                valueInput.value = result;
            }
            else {
                values.newValues = result;
                valueInput.value = result;
            }
        }
        else {
            result = values.prevValues + "" + num;
            // check if there are more than one dot
            if (result.startsWith("..") && result.endsWith("..")) {
                result = result.substring(1);
                values.prevValues = result;
                valueInput.value = result;
            }
            else {
                values.prevValues = result;
                valueInput.value = result;
            }
        }
    }
    else {
        if (values.prevValues) {
            values.newValues = num;
        }
        else {
            values.prevValues = num;
        }
        isDecimal = true;
    }

}


// get Operation
function getOperation(operation) {
    operationType = operation;
    valueInput.value += operationType;
    isDecimal = false;
}

function equals() {
    console.log("first=>", values);
    //  if there is not new value
    if (!values.newValues) return;
    else if (values.prevValues === "." || values.newValues === ".") {
        valueInput.value = "Error";
    }

    //  if there are new value ,prev value and operation
    else if (values.prevValues && values.newValues && operationType) {
        switch (operationType) {
            case "+":
                let result_1 = parseFloat(values.prevValues) + parseFloat(values.newValues);
                valueInput.value = result_1;
                values.prevValues = result_1;
                values.newValues = null;
                break;
            case "-":
                let result_2 = parseFloat(values.prevValues) - parseFloat(values.newValues);
                valueInput.value = result_2;
                values.prevValues = result_2;
                values.newValues = null;
                break;
            case "*":
                let result_3 = parseFloat(values.prevValues) * parseFloat(values.newValues);
                valueInput.value = result_3;
                values.prevValues = result_3;
                values.newValues = null;
                break;
            case "/":
                let result_4 = parseFloat(values.prevValues) / parseFloat(values.newValues);
                valueInput.value = result_4;
                values.prevValues = result_4;
                values.newValues = null;
                break;

            default:
                return;
        }
    }
    isDecimal = false;
    console.log("last=>", values);

}
