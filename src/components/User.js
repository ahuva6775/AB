import React from 'react'
import { connect } from 'react-redux';
import { setUserName, setUserLName, setUserCity } from '../Redux/Action/UserAction'
import styled from 'styled-components';

function mapStateToProps(state) {
    return {
        user: state.UserReducer.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFName: (fname) => dispatch(setUserName(fname)),
    setLName: (lname) => dispatch(setUserLName(lname)),
    setCity: (city) => dispatch(setUserCity(city))
})

export default connect(mapStateToProps, mapDispatchToProps)(function User(props) {
    const { user, setFName, setLName, setCity } = props;
    return (
        <>
            <input value={user.firstName} onChange={(e) => setFName(e.target.value)}></input>
            <input value={user.lastName} onChange={(e) => setLName(e.target.value)}></input>
            <input value={user.city} onChange={(e) => setCity(e.target.value)}></input>
        </>
    )
})