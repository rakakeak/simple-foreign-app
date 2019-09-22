import React, { Component } from 'react';
import { View } from 'react-native';
import { Container} from 'native-base'; 
import Converter from './src/converter';
import Header from './src/header'; 


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {

    return (
      <Container> 
        <Header/> 
        <Converter/>
      </Container>
      
    );
  }
}

