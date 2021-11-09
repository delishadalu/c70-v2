import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Transaction extends React.Component{

  constructor(){
    super()
    this.state={
      hasCameraPermission:false,
      scannedData:'data not scanned',
      buttonState:'normal'
    }
  }

getCamerapermission=async()=>{
 const {status}=await Permissions.askAsync(Permissions.CAMERA)
 console.log(status)

 this.setState({
   hasCameraPermission: status==='granted',
   buttonState:'clicked'
 })
}

handleBarCodeScanner=({data})=>{ 
  this.setState({
    scannedData:data,
    buttonState:'normal'
  })
}


  render(){

if(this.state.buttonState==='clicked' &&  this.state.hasCameraPermission===true){
  return(
    <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={this.handleBarCodeScanner}/>
  )
}


    return(
      <View style={{ backgroundColor:'teal',flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>{this.state.hasCameraPermission?this.state.scannedData:'request for camera permission' }</Text>
     <TouchableOpacity style={{borderWidth:4}} onPress={this.getCamerapermission}>
     <Text>scan code</Text>
     </TouchableOpacity>
      </View>
    )
  }
}