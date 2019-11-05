var loginApp = new Vue({
    el: '#login',
    data: {
        username: '',
        password: '',
    },
    methods: {
        onSubmit: function () {
            var users = '';
            var admin = '';
            var newUser = this.username;
            var passcheck = this.password;

            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'))
            }

            if (localStorage.getItem('admin')) { // 'users' is an array of objects
                admin = JSON.parse(localStorage.getItem('admin'))
            }


            if(users){
                if (users.some(function (user) {
                    return user.username === newUser & user.password === passcheck
                })) {
                    alert('Welcome Back' + newUser);
                    window.location.href = 'userprofile.html' + '#' + newUser
                } else{
                    alert('Incorrect credentials');
                }
            }

            if(admin){
                if (admin.some(function (user) {
                    return user.username === newUser & user.password === passcheck
                })) {
                    alert('Welcome Back' + newUser);
                    window.location.href = 'userprofile.html' + '#' + newUser
                } else{
                    alert('Incorrect credentials');
                }
            }

        }
    }
});
