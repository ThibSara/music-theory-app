import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';



const TextInputComponent = ({label="hello",isSecure=false}) => {
    const [text, setText] = React.useState("");
    return (
        <View style={{width:260, height:48, borderColor:'Black',borderWidth:1,borderRadius:8, alignItems:"center", justifyContent:"center",paddingHorizontal:20}}>
          <TextInput
            placeholder= {label}
            value={text}
            onChangeText={text => setText(text)}
            style={{width:"100%", height:48, fontSize:16}}
            secureTextEntry={isSecure}
          />
        </View>
      );
    };
    

export default TextInputComponent;