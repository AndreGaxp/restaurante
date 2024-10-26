import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function restaurante() {
  const [contador, setContador] = useState(0)
  const mesas = [1, 2, 3, 4, 5, 6, 7, 8]


  function adcContador() {
    setContador(cont => cont + 1)
  }

  function rmvContador() {
    setContador(cont => (cont > 0 ? cont - 1 : 0))
  }

  function mesa(){
    style={
      sty
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
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
      </View>

      {/* ONDE COMEÇA AS MESAS */}
      <View style={styles.mesas}>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 2
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mesas}>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 4
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mesas}>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 6
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mesas}>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mesa}>
          <Text style={styles.txtMesa}>
            Mesa 8
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center'
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
  containerBtn: {
    flexDirection: 'row',
  },
  btnAdc: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    backgroundColor: '#537bc5',
    borderRadius: 6,
    margin: 7,
  },
  btnRmv: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    backgroundColor: '#aaaaaa',
    borderRadius: 6,
    margin: 7,
  },
  mesas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  mesa: {
    height: 100,
    width: '40%',
    backgroundColor: '#a9ff8f',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtMesa:{
    fontSize: 25,
    fontWeight: 'bold',
marginTop: 5,
  }

})