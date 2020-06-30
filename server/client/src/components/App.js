import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as  actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h3>Dashboard</h3>;
const EviteNew = () => <h2>EviteNew</h2>;


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/"  component={Landing}/>
                    <Route exact path="/evites" component={Dashboard} />
                    <Route path="/evites/new" component={EviteNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
    }
};

export default connect(null, actions)(App);