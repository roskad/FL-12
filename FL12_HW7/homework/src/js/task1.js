let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let vEmail = prompt('Please enter your email:');
const minEmailLength = 5;
const minPassLength = 6;

if (vEmail === '' || vEmail === null) {
    alert('Verification canceled.');
} else if (vEmail.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (vEmail === userEmail || vEmail === adminEmail) {
    let vPassword = prompt('Please enter your password');
    if (vPassword === '' || vPassword === null) {
        alert('Verification canceled.');
    } else if (vEmail === userEmail && vPassword === 'UserPass' || vEmail === adminEmail && vPassword === 'AdminPass') {
        let isPasswordChange = confirm('Do you want to change your password?')
        if (isPasswordChange === true) {
            let oldPassword = prompt('Please enter your old password:');
            if (oldPassword === vPassword) {
                let newPassword = prompt('Please enter your new password:');
                if (newPassword === '' || newPassword === null) {
                    alert('Password change canceled.');
                } else if (newPassword.length < minPassLength) {
                    alert('Your new password is to short. Sorry.');
                } else if (prompt('Please enter your new password again:') === newPassword) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('Your password doesn\'t match.');
                }
            } else {
                alert('You wrote the wrong password!');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}