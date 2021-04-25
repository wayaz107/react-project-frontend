import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="HomePage">
            <h1>Diva Skin Lounge</h1>
             <Link to="/products"/>
        </div>
    )
}

export default Home;