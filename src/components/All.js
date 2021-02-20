import React, { useEffect, useState } from 'react'

const All = () => {

    const [userim, setUserim] = useState([])

    useEffect(function () {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");



        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3007/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                console.log('p', result.users)
                setUserim(result.users)
                console.log('users', userim)
            })
            .catch(error => console.log('error', error))

    }, []);
    // getAll()

    // function getAll() {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");



    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:3007/user", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {

    //             console.log(result)
    //             setUserim(result)
    //             console.log(userim)
    //         })
    //         .catch(error => console.log('error', error));
    // }

    return (
        <>
            <p>lllllll</p>
            {/* {userim} */}
            <p>fffff</p>
            {/* <p>{userim}</p> */}
            {
                Object.keys(userim).map((item, index) => {
                    <li key={index}>{item.name}</li>
                })
            }
            {
                userim.map((item, index) => {
                    <li key={index}>{item}</li>
                })
            }
        </>
    )
}

export default All

