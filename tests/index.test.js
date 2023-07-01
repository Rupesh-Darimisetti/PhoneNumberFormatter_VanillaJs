import * as phone from '../index';
// define necessary parameters
let phoneInput;
let errorSpan;

beforeEach(() => {
    // Create a dummy HTML structure for testing
    document.body.innerHTML = `
        <input type="tel" id="phone" maxlength="16" placeholder="mobile number" autocomplete="off" />
        <span id="error"></span>
    `;

    // Get references to the input and error elements
    phoneInput = document.getElementById('phone');
    errorSpan = document.getElementById('error');
});

describe('phoneNumber', () => {
    test('should format the phone number correctly', () => {
        phoneInput.value = '1234567890';
        var res = phone.toPhoneNumber(phoneInput.value, phoneInput.value, errorSpan.innerText)
        expect(res).toBe('(123) 456-7890');
    });

    test('should display an error message for an invalid phone number', () => {
        phoneInput.value = 'abc123456';
        var result = phone.toPhoneNumber(phoneInput.value, phoneInput.value, errorSpan.innerText)
        expect(result).toEqual('Enter a valid phone number');
    });

    test('should clear the error message for a valid phone number', () => {
        errorSpan.innerText = 'Enter a valid phone number';
        var result = phone.toPhoneNumber('123456789', phoneInput.value, errorSpan);
        expect(result).toBe('');
    });
});
