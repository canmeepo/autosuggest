
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/styles/SearchBar.styl';

export class SearchBar extends Component {

    componentDidMount() {
    }

    componentDidUpdate() {
    }


    render() {
        return (
            <div className="SearchBar">

            </div>
        );
    }
}

const mapStateToProps = ({ suggestions }) => {
    return { suggestions };
};

export default connect(mapStateToProps, actions)(SearchBar);
