import React, { Component } from 'react'
import { Text, TouchableOpacity, View ,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'


export default class Transaction extends Component {

    constructor(){
        super()
        this.state={
            hasCameraPermission:false,
            buttonState:"normal"
        }
    }
getCameraPermission= async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)

this.setState({
    hasCameraPermission : status === "granted",
    buttonState:"clicked"
})
    
}
handleBarCodeScanned=async({type,data})=>{

    this.setState({
        buttonState:"normal",
        scannedData:data
    })
}

    render() {

        if(this.state.buttonState==="clicked"){
            return(
            <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={this.handleBarCodeScanned}/>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: "teal", alignItems: "center", justifyContent: "center" }}>
              <Text >{this.state.hasCameraPermission? this.state.scannedData :"requet for camera permission"} </Text>
               <TouchableOpacity onPress={this.getCameraPermission}>
                    <Text style={{ backgroundColor: "blue" }}>scan qr code</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  inputView: { flexDirection: 'row', marginTop: 20 },
  inputBox: { backgroundColor: 'teal', width: 200, height: 40 },
  scanBox: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
