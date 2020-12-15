import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([
            {
              "id": "1",
              "name": "Apple Core",
              "type": "food",
              "description": "A tasty half-eaten rotten apple",
              "price": 130,
              "image": "/images/Apple-Core.jpeg",
              "count": 1
            },
            {
              "id": "2",
              "name": "Old Sock",
              "type": "accs",
              "description": "A single, lightly torn sock glazed in locally sourced puddle.",
              "price": 200,
              "image": "/images/Old-Sock.png",
              "count": 1
            },
            {
              "id": "3",
              "name": "Dish Sponge",
              "type": "misc",
              "description": "Aged and marinated in the scraps of a stainless steal sink.",
              "price": 80,
              "image": "/images/dish-sponge.png",
              "count": 1
            },
          
            {
              "id": "4",
              "name": "Banana Peel",
              "type": "food",
              "description": "A slippery, slimy, old, blackened banana peel",
              "price": 100,
              "image": "/images/bananapeel.jpeg",
              "count": 1
            },
            {
              "id": "5",
              "name": "Used Tissue",
              "type": "misc",
              "description": "A classic household tissue coated in a creamy mucus ganache.",
              "price": 220,
              "image": "/images/used-tissue.jpg",
              "count": 1
            },
            {
              "id": "6",
              "name": "Worn Boot",
              "type": "clothing",
              "description": "Cradle your babies in this cozy vintage boot.",
              "price": 300,
              "image": "/images/old boot.jpg",
              "count": 1
            },
            {
              "id": "7",
              "name": "Rotten Egg",
              "type": "food",
              "description": "It may be rotten but it stinks so good!",
              "price": 150,
              "image": "/images/Rotten-Egg.jpg",
              "count": 1
            },
            {
              "id": "8",
              "name": "Broken Bottle",
              "type": "accs",
              "description": "Tempered using the latest technology, these radiant shards glimmer like diamonds.",
              "price": 250,
              "image": "/images/broken-bottle.jpg",
              "count": 1
            },
            {
              "id": "9",
              "name": "Cardboard Box",
              "type": "accs",
              "description": "Perfect for afternoon naps away from the midday sun.",
              "price": 175,
              "image": "/images/broken-box.jpg",
              "count": 1
            },
            {
              "id": "10",
              "name": "Fish Bones",
              "type": "misc",
              "description": "Never have a bad fur-day again with this contemporary comb.",
              "price": 120,
              "image": "/images/fish-bone.webp",
              "count": 1
            }
          ]     
    )

    const [cart, setCart] = useState([]);
    
    const addCart = (id) => {
      const check = cart.every(item =>{
        return item.id !== id
      })
      if(check){
        const data = products.filter(product =>{
          return product.id === id
        })
        setCart([...cart, ...data])
      } else{
        alert('The product has been added to the cart')
      }
      }
    
    useEffect(() => {
      const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      if(dataCart) setCart(dataCart)
    },[])

    useEffect(() => {
      localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

    const value = {
      products: [products, setProducts],
      cart: [cart, setCart],
      addCart: addCart
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>

    
    )
}