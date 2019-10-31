// eslint-disable-next-line no-unused-vars
var signupApp = new Vue ({
    el: '#signup',
    data: {
        username: '',
        email: '',
        password: '',
    },
    methods:{
        onsubmit: function() {
            // check if email exists
            var users = '';
            var newUser = this.username;
            var newEmail = this.email;

            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'));
            };
            if (users) {
                if (users.some(function(user) {return user.username === newUser})) {
                    alert('Username already exists!');
                    return;
                }
                if (users.some(function(user) {return user.email === newEmail})) {
                    alert('Email already exists!');
                    return;
                }
                users.push({'email': newEmail, 'password': this.password});
                localStorage.setItem('users', JSON.stringify(users));
            }
            else {
                users = [{'email': newEmail, 'password': this.password}];
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }
});