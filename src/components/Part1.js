import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { input } from './InputControl'
import { FormValidator } from './FormValidator';
import { connect } from 'react-redux';
import { setUserName, setUserPassword, setLoggin } from '../Redux/Action/UserAction';

function simpleForm(props) {

    const { handleSubmit, loggin, reset, valid, submitting, pristine, setName, setPassword, uName, uPassword } = props;
    const userName = React.createRef()
    const userPassword = React.createRef()

    function signin() {
        loggin()
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit(signin)}></form>
            <Field
                name='firstName'
                type='text'
                placeholder='enter your  name'
                component={input}
                id='first-name'
                ref={userName}
                onChange={(e) => uName(e.target.value)}
            >
            </Field><br></br>


            <Field
                name='password'
                type='text'
                component={input}
                placeholder='enter your password'
                id='email'
                ref={userPassword}
                onChange={(e) => uPassword(e.target.value)}
            ></Field><br></br>
            <button type='button' disabled={!valid || pristine || submitting}>submit</button>
            <button type='button' onClick={reset}>reset</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    uName: (name) => dispatch(setUserName(name)),
    uPassword: (pass) => dispatch(setUserPassword(pass)),
    loggin: () => dispatch(setLoggin())
})

function mapStateToProps(state) {
    return {
        user: state.UserReducer.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'simpleForm',
    validate: FormValidator
})(simpleForm))