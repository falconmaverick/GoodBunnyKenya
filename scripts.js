document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle login
    window.location.href = 'main.html';
});

document.getElementById('register-link').addEventListener('click', function(e) {
    e.preventDefault();
    // Handle registration link click
    alert('Registration form coming soon!');
});

document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    // Handle logout
    window.location.href = 'index.html';
});
