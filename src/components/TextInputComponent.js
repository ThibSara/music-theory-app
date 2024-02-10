import React from 'react';
import { View, StyleSheet, TextInput,Text} from 'react-native';



const TextInputComponent = ({label="hello",isSecure=false,error,value, onChangeText}) => {
    return (
      <View>
        <View style={{width:260, height:48, borderColor:'Black',borderWidth:1,borderRadius:8, alignItems:"center", justifyContent:"center",paddingHorizontal:20}}>
          <TextInput
            placeholder= {label}
            value={value}
            onChangeText={onChangeText}
            style={{width:"100%", height:48, fontSize:16}}
            secureTextEntry={isSecure}
          />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      error: {
          color: 'red',
          fontSize: 12,
      },
  });

export default TextInputComponent;