import React from 'react'
import { Header, Title } from 'native-base'
// import { Constants } from 'react-native'
// const top = Constants.statusBarHeight;
const HeaderApp = () => {
  return (
    <Header
      style={{ marginTop: 0, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}
      androidStatusBarColor='yellow'>
      <Title style={{color:'black'}}>Foreign Exchange</Title>
    </Header>
  )
}
export default HeaderApp; 