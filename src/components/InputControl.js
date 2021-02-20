import React from 'react'

export const input = ({
    input, type, placeholder, id, meta: { touched, error }
}) => {
    return (
        <div>
            <input {...input} type={type} placeholder={placeholder} id={id}></input><br></br>
            {touched && error && (
                <span style={{ backgroundColor: 'pink', textAlign: 'center', color: 'brown' }}>{error}</span>
            )}
        </div>
    )
}