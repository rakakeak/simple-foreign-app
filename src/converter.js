import React, {Component} from 'react'
import {Content, Card, CardItem, Input, Text, View, StyleSheet} from 'native-base' 
import Axios from 'axios';
import {API_URL} from './constants'

class Converter extends Component{

    constructor(props){
        super(props);
        this.state= {
           
            cad : '',
            idr: '',
            gbp:'',
            chf:'',
            sgd:'',
            inr:'',
            myr:'',
            jpy:'',
            krw:'',
            input: '',
            rates: []
        }

        this.getRates = this.getRates.bind(this);
   
    };

    componentDidMount(){
        this.getRates();
    };

    getRates(){
        Axios.get(API_URL)
        .then(response => this.setState({rates: response.data.rates})) 
        .catch(err=>console.log(err)); 
    }; 

    render(){
        
        const { cad, idr, gbp, chf, sgd, inr, myr, jpy, krw, rates} = this.state;
        
        return(
            <Content> 
            
            <Input
            placeholder= 'Enter USD Value'
            keyboardType = 'numeric'
            onChangeText= {(text)=> {
                const i = parseFloat(text) || 0; 
                this.setState({
                    input : text,
                    // toFixed() is method that returns a string representing a number in fixed-point notation.
                    cad : (i * rates['CAD']).toFixed(3),
                    idr : (i * rates['IDR']).toFixed(3),
                    gbp : (i * rates['GBP']).toFixed(3),
                    chf : (i * rates['CHF']).toFixed(3),
                    sgd : (i * rates['SGD']).toFixed(3),
                    inr : (i * rates['INR']).toFixed(3),
                    myr : (i * rates['MYR']).toFixed(3),
                    jpy : (i * rates['JPY']).toFixed(3),
                    krw : (i * rates['KRW']).toFixed(3),
                })

            }}
            value={this.state.input} 
            textAlignVertical='center'
            style={{textAlign:'center'}}
            />
            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:8}}>
                    <View style={{ borderWidth:1, padding:6, margin:4, marginRight:0, height:80, justifyContent:'center', flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:2}}>
                            <Text style={{fontSize:20}}>CAD</Text>
                            <Text style={{fontSize:20}}>{cad}</Text>
                        </View>
                        <View>
                            <Text>CAD - Dolar Kanada</Text>
                            <Text>1 USD = CAD {(1 * rates['CAD']).toFixed(3)}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems:'center', borderWidth:1, margin:4, marginLeft:0, height:80, width:40, justifyContent:'center', borderLeftWidth:0}}>
                        <Text>(-)</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:8}}>
                    <View style={{ borderWidth:1, padding:6, margin:4, marginRight:0, height:80, justifyContent:'center', flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:2}}>
                            <Text style={{fontSize:20}}>IDR</Text>
                            <Text style={{fontSize:20}}>{idr}</Text>
                        </View>
                        <View>
                            <Text>IDR - Indonesian Rupiah</Text>
                            <Text>1 USD = IDR {(1 * rates['IDR']).toFixed(3)}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems:'center', borderWidth:1, margin:4, marginLeft:0, height:80, width:40, justifyContent:'center', borderLeftWidth:0}}>
                        <Text>(-)</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:8}}>
                    <View style={{ borderWidth:1, padding:6, margin:4, marginRight:0, height:80, justifyContent:'center', flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:2}}>
                            <Text style={{fontSize:20}}>GBP</Text>
                            <Text style={{fontSize:20}}>{gbp}</Text>
                        </View>
                        <View>
                            <Text>GBP - Pound Britania</Text>
                            <Text>1 USD = GBP {(1 * rates['GBP']).toFixed(3)}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems:'center', borderWidth:1, margin:4, marginLeft:0, height:80, width:40, justifyContent:'center', borderLeftWidth:0}}>
                        <Text>(-)</Text>
                    </View>
                </View>
            </View>


            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:8}}>
                    <View style={{ borderWidth:1, padding:6, margin:4, marginRight:0, height:80, justifyContent:'center', flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:2}}>
                            <Text style={{fontSize:20}}>CHF</Text>
                            <Text style={{fontSize:20}}>{chf}</Text>
                        </View>
                        <View>
                            <Text>CHF - Franc Swizz</Text>
                            <Text>1 USD = CHF {(1 * rates['CHF']).toFixed(3)}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems:'center', borderWidth:1, margin:4, marginLeft:0, height:80, width:40, justifyContent:'center', borderLeftWidth:0}}>
                        <Text>(-)</Text>
                    </View>
                </View>
            </View>


            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:8}}>
                    <View style={{ borderWidth:1, padding:6, margin:4, marginRight:0, height:80, justifyContent:'center', flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:2}}>
                            <Text style={{fontSize:20}}>SGD</Text>
                            <Text style={{fontSize:20}}>{sgd}</Text>
                        </View>
                        <View>
                            <Text>SGD - Dolar Singapura</Text>
                            <Text>1 USD = SGD {(1 * rates['SGD']).toFixed(3)}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems:'center', borderWidth:1, margin:4, marginLeft:0, height:80, width:40, justifyContent:'center', borderLeftWidth:0}}>
                        <Text>(-)</Text>
                    </View>
                </View>
            </View>




                {/* <Card>
                <CardItem>
                <Text> CAD: {cad}</Text> 
                </CardItem>
                <CardItem>
                <Text> IDR: {idr}</Text> 
                </CardItem>
                <CardItem>
                <Text> GBP: {gbp}</Text>
                </CardItem>
                <CardItem>
                <Text> CHF: {chf}</Text> 
                </CardItem> 
                <CardItem>
                <Text> SGD: {sgd}</Text> 
                </CardItem> 
                <CardItem>
                <Text> INR: {inr}</Text> 
                </CardItem> 
                <CardItem>
                <Text> MYR: {myr}</Text> 
                </CardItem> 
                <CardItem>
                <Text> JPY: {jpy}</Text> 
                </CardItem> 
                <CardItem>
                <Text> KRW: {krw}</Text> 
                </CardItem> 
                </Card> */}

                
                </Content>

              
        );
        
    }
};


export default Converter;