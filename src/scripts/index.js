function togglePasswordVisibility() {
    const passwordInput = document.getElementById('senha')
    const iconVisible = document.getElementById('icon-visible')

    if (passwordInput.type  === 'password') {
        passwordInput.type = 'text'
        iconVisible.name = 'eye-off-outline'
    } else {
        passwordInput.type = 'password'
        iconVisible.name = 'eye-outline'
    }
}

function togglePasswordConfirmationVisibility() {
    const passwordConfirmationInput = document.getElementById('senha-confirmation')
    const iconVisible = document.getElementById('icon-visible2')

    if (passwordConfirmationInput.type === 'password') {
        passwordConfirmationInput.type = 'text'
        iconVisible.name = 'eye-off-outline'
    } else {
        passwordConfirmationInput.type = 'password'
        iconVisible.name = 'eye-outline'
    }
}