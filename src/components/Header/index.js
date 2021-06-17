import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../../assets/img/logo.png';
import send from '../../assets/img/send.png';

const Header = () => {
  return (
    <View style={st.container}>
      <TouchableOpacity>
        <Image source={logo} style={st.logo} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={send} style={st.send} />
      </TouchableOpacity>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#f1f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#333',
    elevation: 2,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  }
})

export default Header;
