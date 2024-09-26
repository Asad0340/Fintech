import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './buttonsStyles';  // Import styles from a separate file

export const Buttons = memo(function Buttons({ onButtonPress }) { // Accept onButtonPress as a prop
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('M+')}><Text style={styles.buttonText}>M+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('M-')}><Text style={styles.buttonText}>M-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('MRC')}><Text style={styles.buttonText}>MRC</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('GTO')}><Text style={styles.buttonText}>GTO</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('C/CE')}><Text style={styles.buttonText}>C/CE</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('7')}><Text style={styles.buttonTexts}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('8')}><Text style={styles.buttonTexts}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('9')}><Text style={styles.buttonTexts}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('x')}><Text style={styles.buttonText}>x</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('>')}><Text style={styles.buttonText}>{'>'}</Text></TouchableOpacity>
      </View>
      {/* Row 3 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('4')}><Text style={styles.buttonTexts}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('5')}><Text style={styles.buttonTexts}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('6')}><Text style={styles.buttonTexts}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('-')}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('%')}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('1')}><Text style={styles.buttonTexts}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('2')}><Text style={styles.buttonTexts}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('3')}><Text style={styles.buttonTexts}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('+')}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onButtonPress('√')}><Text style={styles.buttonText}>√</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('0')}><Text style={styles.buttonTexts}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('00')}><Text style={styles.buttonTexts}>00</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonss} onPress={() => onButtonPress('.')}><Text style={styles.buttonTexts}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.doubleButton} onPress={() => onButtonPress('=')}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cashButton} >
          <Text style={styles.cashButtonText}>Cash In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashButtonout} >
          <Text style={styles.cashButtonText}>Cash Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
