document.addEventListener('DOMContentLoaded', () => {
    const existingBtn = document.getElementById('existing');
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
    } else {
        existingBtn.style.display = 'none';
    }

    existingBtn.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
    });

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('checkbox').checked;

        alert(`Logged in as ${username}`);

        if (remember) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            existingBtn.style.display = 'block';
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            existingBtn.style.display = 'none';
        }
    });
});
