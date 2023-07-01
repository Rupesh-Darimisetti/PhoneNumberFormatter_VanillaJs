import { toPhoneNumber } from '../index';
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
describe('Testing if block', () => {
    test.todo('Test case');
});