import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Estilo from './Estilo';


export default class Numeros extends React.Component{
state={
 
  numero:0
}
incremento =()=>{
this.setState({numero: this.state.numero+1})
}



descrementar =()=>{
 this.setState({numero: this.state.numero-1})   
}

apagar= ()=>{
this.setState({numero:0 })    
}
    render(){
 
    

    return(
<View style={Estilo.container}>
<View style={Estilo.inputText}><Text style={Estilo.numero}>{this.state.numero}</Text></View>
<TouchableOpacity style={Estilo.button}
onPress={this.incremento}
onLongPress={this.apagar}>
    <Text style={Estilo.text}>
        
        
        Acrescentar </Text>
</TouchableOpacity>
<TouchableOpacity style={Estilo.button}
onPress={this.descrementar}>
<Text style={ Estilo.text}>
 Descrescer
</Text>

</TouchableOpacity>

</View>





    );
} 
    

}

//<TouchableHighlight style={Estilo.button}
//onPress={this.incremento}
//onLongPress={this.apagar}
//> <Text style={Estilo.text}></Text>
//</TouchableHighlight>
