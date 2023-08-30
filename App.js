import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import {styles} from './assets/style'

export default function App() {
  // states
  const[value1, setValue1] = useState('')
  const[value2, setValue2] = useState('')
  const[result, setResult] = useState('')

  function operation(operar){
    let resultado = 0
    let valor1 = parseFloat(value1)
    let valor2 = parseFloat(value2)
    switch(operar){
      case '+': resultado = valor1 + valor2
      break
      case '-': resultado = valor1 - valor2
      break
      case '*': resultado = valor1 * valor2
      break
      case '/': resultado = valor1 / valor2
      break
      case '**': resultado = Math.pow(valor1, valor2)
      break
      case 'sqr': resultado = valor1 / valor2
      break
    }
     setResult(resultado)    
  }

  let msg="asdbf" 
  let imgcalc1 = "calc2.jpg"
  return (  
    //LOS COMPONENTES DEBEN ESTAR DENTRO DE UN CONTENEDOR         
    <View style={styles.container}>    
    <Banner imagename={imgcalc1}></Banner> 
     <View style={{flex:3, borderWidth:2, borderColor:'red', backgroundColor:'gray',
     width:'100%', alignItems:'center', justifyContent:'center'}}>
      <Text>
        calculadora
      </Text>
      <Text>
        valor1
      </Text>
      <TextInput
      //style={{padding:5, textAlign:'center', borderRadius:50, borderColor:'blue', borderWidth:'2'}}
      label='valor 1'
      onChangeText={value1 => setValue1(value1)}
      value={value1}
      right={<TextInput.Icon icon='numeric'/>}
       />
      <Text>valor2</Text>
     <TextInput
     //style={{padding:5, textAlign:'center', borderRadious:10, borderColor:'red', borderWidth:'2'}}
     label='valor 2'
     onChangeText={value2 => setValue2(value2)}
    value={value2}
    right={<TextInput.Icon icon='forward'/>}
     />
     <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20}}>Resultado: </Text>
      <Text style={{fontSize:20}}>{parseFloat(result).toFixed(1)}</Text>
     </View>     
     <View style={{flexDirection:'row'}}>
          {/* <TouchableOpacity>
            <Text style={{backgroundColor:'red', padding:10, borderRadius:'20%', marginTop:5}}>+</Text>
          </TouchableOpacity> */}
           <Button icon="plus" mode="contained"
            onPress={()=>operation('+')} style={{marginTop:5}}>
    sumar
  </Button>
  <Button icon="minus" mode="contained" onPress={() => operation('-')} style={{marginTop:5}}>
    restar
  </Button>
     </View>
     <View style={{flexDirection:'row'}}>
          {/* <TouchableOpacity>
            <Text style={{backgroundColor:'red', padding:10, borderRadius:'20%', marginTop:5}}>+</Text>
          </TouchableOpacity> */}
           <Button icon="asterisk" mode="contained" onPress={() => operation('*')} style={{marginTop:5}}>
    multiplicar
  </Button>
  <Button icon="division" mode="contained" onPress={() => operation('/')} style={{marginTop:5}}>
    dividir
  </Button>    
     </View>
     <View style={{flexDirection:'row'}}>
  <Button icon="delete" mode="contained" onPress={() => {setValue1(''), setValue2(''), setResult('')}} style={{marginTop:5}}>
    limpiar
  </Button> 
  </View>
     </View>     
     <View style={{flex:1}}>
      <Footer message="this is the footer" style={{ alignItems:'center', justifyContent:'center'}}></Footer>
     </View>
     </View>
     );
}

// function Banner(props){
//   return(
//     <View>  
//     <Text>{props.title}</Text>
//     <Text>{props.subtitle}</Text>
//   </View>
//   );
//   }


