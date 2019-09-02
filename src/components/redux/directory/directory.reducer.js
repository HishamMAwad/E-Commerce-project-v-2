
const INITIAL_STATE = {
    sections: [
        {
          title: 'Arabic',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'English',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'French',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shoes'
        },
        {
          title: 'German',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '',
          size: 'large'
        },
        {
          title: 'Translation',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: '',
          size: 'large'
        }
      ]
};



const directoryReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        default:
            return state;
    }
};


export default directoryReducer;