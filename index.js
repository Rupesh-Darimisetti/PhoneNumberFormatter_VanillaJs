var phone_number = document.getElementById("phone");
var error = document.getElementById("error");

// window.addEventListener("DOMContentLoaded", () => {
if (phone_number) {
    phone_number.addEventListener('keyup', () => {
        if (phone_number.value.length < 10) {
            var text = phone_number.value;
            if (isNaN(text.substring(0,))) {
                error.innerText = "Enter a valid phone number"

            } else {
                error.innerText = "";
            }
            console.log(phone_number.value.length)
        }
        if (phone_number.value.length > 9) {
            var phone = phone_number.value;
        }
        if (isNaN(phone.substring(1, 4)) || isNaN(phone.substring(6, 9)) || isNaN(phone.substring(10,))) {
            error.innerText = "Enter a valid phone number";
        } else {
            error.innerText = "";
        }
        toPhoneNumber(phone, phone_number.value, error.innerText)

    });
}
// });
// var result = phone_number.addEventListener("keyup", phoneNumber);

// export function phoneNumber() {

//     var text = phone_number.value;
//     if (isNaN(text.substring(1, 4)) || isNaN(text.substring(6, 9)) || isNaN(text.substring(10,))) {
//         error.innerText = "Enter a valid phone number"
//     } else {
//         error.innerText = "";
//     }
//     // check for first three input characters to be nubers
//     if (text.length < 17) {
//         if (text.length > 2 && !isNaN(text)) {
//             text = "(" + text.substring(0, 3) + ") ";
//         }
//         if (text.length <= 8) {
//             text += text.substring(8,);
//         }
//         if (text.length == 9) {
//             text += "-";
//         }
//         if (text.length > 9) {
//             text += text.substring(16,);
//         }
//     }
//     // assign the formatted phone number to the input
//     phone_number.value = text;
// }

export function toPhoneNumber(string, phoneNumber, errorText) {
    var phoneNumberFormat = "(xxx) xxx-xxxx"; 3
    if (string.length < 10) {
        // var text = phone_number.value;
        if (isNaN(string)) {
            errorText = "Enter a valid phone number"
        } else {
            errorText = "";
        }
        return errorText;
    }
    if (string.length > 9 && !isNaN(string)) {
        // console.log(isNaN(string) ? string : string)
        for (let elements of string) {
            phoneNumberFormat = phoneNumberFormat.replace('x', elements);
        }
        phoneNumber = phoneNumberFormat;
        phoneNumberFormat = phoneNumber;
    }
    return phoneNumberFormat;
}
