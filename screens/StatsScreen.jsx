import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../config/themeContext';

const StatsScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    {/** Statistics Text */}
      <Text style={[styles.text, { color: theme.colors.text }]}>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight:"500"
  },
});

export default StatsScreen;
