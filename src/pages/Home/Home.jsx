import React from 'react';
import Directory from '../../components/directory/Directory';
import Footer from '../../components/Footer/Footer';



class Home extends React.Component {


    render() {
        return(
            <div>
                <Directory/>
                <Footer/>
            </div>
        );
    }
}



export default Home;