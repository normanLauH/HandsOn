import React, { Component } from 'react';
import Header from '../component/header/header';
import Create from '../component/create/create.js';
import Filters from '../component/filters/filters.js'

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header />
                <Create />
                <Filters />
            </div>
        );
    }
    
}