import * as phone from './index'
describe('Phone number validation', () => {
    // beforeEach(() => {
    //     // Create necessary DOM elements
    //     const phoneInput = document.createElement('input');
    //     phoneInput.id = 'phone_number';
    //     const errorElement = document.createElement('div');
    //     errorElement.id = 'error';
    //     document.body.appendChild(phoneInput);
    //     document.body.appendChild(errorElement);
    // });

    afterEach(() => {
        // Clean up DOM elements after each test
        // document.getElementById('phone_number').remove();
        // document.getElementById('error').remove();
    });

    test('Invalid phone number - less than 10 digits', () => {
        const phoneInput = document.getElementById('phone_number');
        const errorElement = document.getElementById('error');

        // Simulate keyup event on the phone input
        phoneInput.value = '1234567';
        phoneInput.dispatchEvent(new Event('keyup'));

        // Verify that the error message is displayed
        expect(errorElement.innerText).toBe('Enter a valid phone number');
    });

    test('Valid phone number - 10 digits', () => {
        const phoneInput = document.getElementById('phone_number');
        const errorElement = document.getElementById('error');

        // Simulate keyup event on the phone input
        phoneInput.value = '1234567890';
        phoneInput.dispatchEvent(new Event('keyup'));

        // Verify that the error message is empty
        expect(errorElement.innerText).not.toBe('');
    });

    // Add more test cases as needed
});
