var signupApp = new Vue ({
    el: '#signup',
    data: {
        username: '',
        email: '',
        password: '',
    },

    methods:{
        onSubmit :function(){
            var users = '';
            var newUser = this.username;
            var newEmail = this.email;

            if (localStorage.getItem('users')) {
                users = JSON.parse(localStorage.getItem('users'));
            }

            if (users) {
                if (users.some(function (user) {
                    return user.username === newUser
                }))

                {
                    alert('Account already exists');
                }

                if (users) {
                    if (users.some(function (user) {
                        return user.email === newEmail
                    }))

                    {
                        alert('Account already exists');
                    }

                    else {
                        alert('Account created');
                    }
                }

                users.push({'username': newUser, 'email': newEmail, 'password': this.password});
                localStorage.setItem('users', JSON.stringify(users))
            } else {
                users = ({'username': newUser, 'email': newEmail, 'password': this.password});
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
    }
});