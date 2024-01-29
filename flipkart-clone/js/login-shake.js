document.addEventListener('DOMContentLoaded', () => {
    const loginAlert = document.querySelector('#login-alert');

    // display the login alert after a 4-second delay
    setTimeout(() => {
        loginAlert.classList.toggle('hidden');

        // hide the login alert after 10 seconds
        setTimeout(() => {
            loginAlert.classList.toggle('hidden');
            console.log('display login alert...');
        }, 15000);
    }, 3000);
});
