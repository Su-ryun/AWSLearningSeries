import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './header/Header'
import Home from './pages/home/Home';
import Footer from './footer/Footer';
import './index.css';

var routing = (
    <Router>
        <div>
            <Route path="/home" component={Home} />
        </div>
    </Router>
)

class Root extends Component {
    render() {
        return (
        <div>
            <Header/>
            <div>
                {routing}
            </div>
            <Footer/>
        </div> 
        )       
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));