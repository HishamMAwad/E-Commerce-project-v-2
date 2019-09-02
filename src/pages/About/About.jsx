import React from 'react';
import {db} from '../../components/FireBase';



class About extends React.Component {


    componentDidMount() {
        db.settings({ timestampsInSnapshots: true })
    }

    getData = (e) => {
        e.preventDefault();

        db.collection('users').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            })
        })
    }


    render() {

    return(
        <div>
            <h1>About Page</h1>
        </div>
    )
    }
}



export default About;