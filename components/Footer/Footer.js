import { StyleSheet, View, Text } from "react-native";
import { styleFooter } from "../../assets/style";
export default function Footer(props){
    return(
        <View style={styleFooter.container}>
            <Text >{props.message}</Text>
        </View>
    );
}

 