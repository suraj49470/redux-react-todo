import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './components/Content';
import './App.css';

class App extends Component {
            render() {
                              return (
                                    <Content />
                              );
                      }
}
function mapStateToProps(state){
    return {todos:state.todos};
}

export default connect(mapStateToProps)(App);
