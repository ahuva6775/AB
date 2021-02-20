export const FormValidator = values => {

    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'name is required'
    }



    if (!values.password) {
        errors.password = 'password is required'
    }

    console.log(errors)
    return errors
}