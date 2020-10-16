import React from 'react';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart ,faShoppingBasket,faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import OrderList from '../OrderList/OrderList/OrderList';
import Review from '../Customers/Review/Review';
import Home from '../Home/Home/Home';


const styles = {
    background: '#000',
    width: '2px',
    cursor: 'col-resize',
    margin: '0 5px',
    height: '100%',
  };

const CustomerDashboard = () => {
    return (
        <section>
            <div className="row">
            </div>
                <Router>
                <SplitPane
                minSize={100}
                defaultSize={100}
                >
                <menu style={{padding:'20px', marginLeft:'100px'}}>
                    <div><Link to="/dashboard/order"><FontAwesomeIcon style={{color:'gray'}} icon={faShoppingCart} /><span>order</span> </Link></div>
                    <div><Link to="/"><FontAwesomeIcon style={{color:'gray'}} icon={faShoppingCart} /><span>review</span> </Link></div>
                    <div><Link to="/topics">Topics</Link></div>
                </menu>
                <div>
                    <Route exact path="/dashboard/order" component={OrderList} />
                    <Route exact path="/" component={Home} />
                </div>
                </SplitPane>
            </Router>


        </section>
        
    );
};

export default CustomerDashboard;