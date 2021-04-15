import React, { useState, useEffect } from 'react';
import './Shop.css';

function ItemView (match) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.com/v1/playlists/${match.match.params.id}`);
        const item = await data.json();

        console.log(item.data);
        setItem(item.data);
    };

    return (
        <div>
            <span>
                <h1>{item.name}</h1>
                <h2>{item.description}</h2>
            </span>

            <img src={item.images.showcase} alt=""/>
        </div>
    );
}

export default ItemView;
