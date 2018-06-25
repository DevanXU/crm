import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApps } from '../actions/homeAction'
import HomeMenuBar from './tabbar';
import './home.css'


export class Home extends Component {
    render() {
        return (
            <div>
                <HomeMenuBar />
            </div >
        );
    }
}


const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchApps: () => dispatch(fetchApps())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
