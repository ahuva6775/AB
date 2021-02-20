import React, { useEffect, useState } from 'react'

export default function Hello() {

    const [items, setItems] = useState(false);

    useEffect(() => {
        getCategory()
        // fetch('http://localhost:3007/user', {
        //     method: 'get',
        //     headers: { 'Content-Type': 'application/json' },
        // })
        //     .then((res) => res.json()).then((resJson) => {
        //         setItems(resJson)
        //         console.log(items)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     }
        //     )
    }, []);

    function getCategory() {
        fetch("http://localhost:3007/user")
            .then(response => {
                const aaa = response.json()
                console.log(aaa)
                console.log(aaa[0].name)

            })

            .then(data => {
                setItems(data)
                console.log(data)
            })
    }




    return (
        <>
            <p>{items}</p>
            <ul>


                {/* {items.map((item, index) => <li key={index}>
                    {item.name}
                </li>)} */}
                {Object.keys(items).map((item, index) => <li key={index}>{item}:{items[item]}</li>)}
            </ul>
            <p>hello!</p>
        </>
    )
}