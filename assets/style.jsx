import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'red',
      fontSize:22
    },
  });

  const miImagen = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    },
  })

  const styleFooter = StyleSheet.create({
    container: {
        position:'absolute',
        bottom:'0'
    },
  });

  
  export {styles, miImagen, styleFooter}