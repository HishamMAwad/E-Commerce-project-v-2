
const INITIAL_STATE = {
    products : {
        hats: [
            {
                "id": 1,
                "name": "Brown Brim",
                "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                "price": 25
              },
              {
                "id": 2,
                "name": "Blue Beanie",
                "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                "price": 18
              },
              {
                "id": 3,
                "name": "Brown Cowboy",
                "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                "price": 35
              },
              {
                "id": 4,
                "name": "Grey Brim",
                "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
                "price": 25
              },
              {
                "id": 5,
                "name": "Green Beanie",
                "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
                "price": 18
              },
              {
                "id": 6,
                "name": "Palm Tree Cap",
                "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                "price": 14
              }
          ],
    
          shoes: [
            {
              id: 10,
              name: 'Adidas NMD',
              imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
              price: 220
            },
            {
              id: 11,
              name: 'Adidas Yeezy',
              imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
              price: 280
            },
            {
              id: 12,
              name: 'Black Converse',
              imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
              price: 110
            },
            {
              id: 13,
              name: 'Nike White AirForce',
              imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
              price: 160
            },
            {
              id: 14,
              name: 'Nike Red High Tops',
              imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
              price: 160
            },
            {
              id: 15,
              name: 'Nike Brown High Tops',
              imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
              price: 160
            },
            {
              id: 16,
              name: 'Air Jordan Limited',
              imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
              price: 190
            },
            {
              id: 17,
              name: 'Timberlands',
              imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
              price: 200
            }
          ],
    }
}



const collectionReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        default:
            return state;
    }
};


export default collectionReducer;