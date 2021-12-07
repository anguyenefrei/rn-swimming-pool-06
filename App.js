import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, View, Button, TouchableHighlight } from 'react-native';
 
export default function App() {
  const [text, setText] = useState('');
  const [countrys, setCountry] = useState([]);
  const [isPressed, setIsPressed] = useState('false');

  const changeHandler = (val) => {
    setText(val)
  }
  const addCountry = (text) => {
    console.log("avant", ...countrys)
    const newCountrys = [...countrys,text]
    setCountry(newCountrys)
    console.log("after" ,newCountrys) 
    setText('')
  }
  const textProps = isPressed? styles.text: styles.textPressed
  
  const newProps = (isPressed,index) => {
    isPressed? styles.text: styles.textPressed
    
  }
  return (
    <ScrollView style={styles.container}>
      {/* HEADER : Input qui permet d'ajouter un pays à la liste */}
        <View style={styles.header}>
          <TextInput 
          style={styles.input}
          placeholder='Saisir un pays'
          value={text}
          // addCountry = {addCountry}
          onChangeText={changeHandler}
          />
          <Button
          // addCountry = {addCountry}
          style={styles.button}
          onPress={ () => addCountry(text) }
          title='add'
          />
        </View>

      {/* BODY : quelques exemple de pays  */}
        <View style={styles.body}>
          <View style={styles.ligne}>
            <Text onPress={() => setIsPressed(!isPressed)}  style={textProps} >
              France 
            </Text>
          </View>

          <View style={styles.ligne}>
            <Text onPress={() => setIsPressed(!isPressed)}  style={textProps} >
              Japon 
            </Text>
          </View>
          {/* BODY : Tab contenant tous les pays ajoutés dynamiquement*/}
          {countrys.map((country,i) => (
            
          <View  style={styles.ligne}>
            <Text index={i} onPress={(i) => setIsPressed(!isPressed)}  style={textProps}>
              {country}
            </Text>
          </View>
          
          ))}

        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.content}>
            Footer
          </Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  input: {
    width: 200,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center'
  },
  header: {
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'beige'
  },
  body: {
    flex: 3,
    top: 40,
    height: 600,
    backgroundColor: 'aliceblue'
  },
  ligne: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    width: 400,
    height: 60,
    textAlign: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 165
    
  },
  button: {
    height: 50,
    width: 50,
    margin: 20
  },
  text: {
    margin: 10,
    fontSize: 30
  },
  textPressed: {
    margin: 10,
    fontSize: 30,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});
