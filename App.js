import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import {styles} from './assets/style'
import { Button, TextInput, Touchable, TouchableOpacity } from 'react-native-web';
export default function App() {
  // states
  const[value1, setValue1] = useState('')
  const[value2, setValue2] = useState('')
  const[result, setResult] = useState('')

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
      style={{padding:5, textAlign:'center', borderRadius:50, borderColor:'blue', borderWidth:'2'}}
      placeholder='ingrese valor 1'
      onChageText={value1 => setValue1(value1)}
      value={value1}/>
      <Text>valor2</Text>
     <TextInput
     style={{padding:5, textAlign:'center', borderRadious:10, borderColor:'red', borderWidth:'2'}}
     placeholder='ingrese valor 2'
     onChageText={value2 => setValue1(value2)}
    value={value2}
     />
     <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
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


