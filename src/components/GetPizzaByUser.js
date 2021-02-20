import React, { useState, useEffect } from 'react'

export default function GetPizzaByUser() {

    const [items, setItems] = useState([])

    useEffect(function () {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'get',
            headers: myHeaders,
        };

        fetch("https://api.spoonacular.com/food/search?query=pizza&apiKey=d1c4cb5b163f4ce3a1e92a28c2f3a7f1", requestOptions)
            .then(response => response.json())
            .then((resJson) => {
                setItems(resJson.searchResults[0].results)
                console.log(resJson)
                debugger
                console.log('p', resJson)
                // setItems(resJson.searchResults[0].results)
                console.log(resJson.searchResults[0].results)
                console.log('users', items)
                console.log('items=', items)
            })
            .catch(error => console.log('error', error))

    }, []);




    function deleteRecipy(name) {

    }


    return (
        <>{
            items[0] && items.map((item, index) =>

                <div classNames="card" style={{ width: "18rem" }} key={index}>
                    <img src={item.image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.content}</p>
                        <button classNames='btn btn-link'>{item.link}</button>
                        <button className="btn btn-primary" onClick={deleteRecipy(item.name)}>הוספה לספר מתכונים</button>
                    </div>
                </div>
            )}
            <ul>
                {items[0] && items.map((item, index) => <li key={index}>{item.name}</li>)}
            </ul>

        </>

    )
}