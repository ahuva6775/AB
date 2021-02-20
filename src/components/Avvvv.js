import React, { useEffect, useState } from 'react'

export default function Avvvv() {

    const [item, setItem] = useState([])

    useEffect(() => {
        fffff()
    }, [])

    function fffff() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // var urlencoded = new URLSearchParams();
        // urlencoded.append("name", "רחל עזרא");
        // urlencoded.append("password", "74773");
        // urlencoded.append("", "");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            //   body: urlencoded,
        };

        fetch("http://localhost:3007/user/שרי פינקלשטיין/88849", requestOptions)
            .then(response => response.json())
            .then(resJson => {
                console.log(resJson)
                console.log(typeof (resJson))
                // setItem(x => x.concat(result))
                return resJson.data["json"],
                    setItem(resJson)
                console.log(item)
            })
            .catch(error => console.log('error', error));
    }





    return (
        <>
            <p>hhhhhh</p>
            <p>{item}</p>
            {
                Object.keys(item).map((ite, index) => {
                    <li key={index}>{ite[0].name}</li>
                })
                // item.map((ite, index) => {
                //     <li key={index}>{ite.name}</li>
                // })
            }
        </>
    )
}