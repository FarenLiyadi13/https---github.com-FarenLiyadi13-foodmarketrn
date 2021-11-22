import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Button = ({text, color, textColor, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
  }),
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
});
