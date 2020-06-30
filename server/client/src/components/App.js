import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h3>Dashboard</h3>;
const EviteNew = () => <h2>EviteNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/"  component={Landing}/>
                <Route exact path="/evites" component={Dashboard} />
                <Route path="/evites/new" component={EviteNew}/>
            </div>
        </BrowserRouter>
    );
};

export default App;