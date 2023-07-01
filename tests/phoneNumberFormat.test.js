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
describe('Phone number formatting', () => {
    test('Invalid phone number - contains non-numeric characters', () => {
        // const errorElement = document.createElement('div');
        var res = phone.toPhoneNumber('123abc456', errorSpan);
        expect(res).toBe('Enter a valid phone number');
    });

    test('Valid phone number - only numeric characters', () => {
        var result = phone.toPhoneNumber('12346789', phoneInput.value, errorSpan);
        expect(result).toBe('');
    });
});
