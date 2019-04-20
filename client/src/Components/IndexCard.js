import React, { Component } from 'react';
import FilterList from './FilterList'
export default class IndexCard extends Component {
    render() {

        return (
            <div >
                <h1>Phone Catalogue</h1>
                <FilterList />
            </div>
        );
    }
}

