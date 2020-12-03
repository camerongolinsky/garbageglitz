import React from 'react';
import './App.css';

const TrashShop = (props) => {
    return (
        <div>
            <h1>Trash Shop</h1>
            <ul key={trash.id}>
              <li>{trash.type}</li>
              <li>{trash.name}</li>
              <li>{trash.price}</li>
            </ul>
        </div>
    );
}

export default TrashShop;