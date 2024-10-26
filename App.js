import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function restaurante() {
  const [contador, setContador] = useState(0)
  

  function adcContador(){
    setContador(cont => cont + 1)
  }

  function rmvContador(){
    setContador(cont => (cont > 0 ? cont - 1 : 0))
  }

  return (

    <View style={styles.container}>
      <Text style={styles.txt}>
        Pessoas no Restaurante:
      </Text>

      <View style={styles.contador}>
        <Text style={styles.txtContador}>{contador}</Text>
      </View>

      <View style={styles.containerBtn}>

        <TouchableOpacity style={styles.btnAdc} onPress={adcContador}>
          <Text>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRmv} onPress={rmvContador}>
          <Text>Remover</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.div}/>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  contador: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: 50,
    height: 55,
    marginTop: 10,
    borderRadius: 10
  },
  txtContador: {
    color: '#ffffff',
    fontSize: 25,
  },
  containerBtn:{
    flexDirection: 'row',
  },
  btnAdc:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    backgroundColor: '#537bc5',
    borderRadius: 6,
    margin: 7,
  },
  btnRmv:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    backgroundColor: '#aaaaaa',
    borderRadius: 6,
    margin: 7,
  },
  div:{
    width: '100%',
    height: 3,
    backgroundColor: '#537bc5',
    marginTop: 10,
  }
})