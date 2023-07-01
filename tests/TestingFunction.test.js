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


describe('Testing toPhoneNumber formatter function', () => {
    test('Testing if block with isNaN', () => {
        const error = document.createElement('div')
        var result = phone.toPhoneNumber('abc12345', phoneInput.value, errorSpan);
        expect(result).toBe('Enter a valid phone number');
    });

    test('Testing else block with isNaN', () => {
        const result = phone.toPhoneNumber('123456718', phoneInput.value, errorSpan);
        expect(result).toBe('');
    });
});
