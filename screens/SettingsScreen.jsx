import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Switch } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { setData } from '../mock/setData';
import { ThemeContext } from '../config/themeContext';
import colors from '../config/colors';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.headerContainer}>
      {/** Header Text = SETTINGS */}
      <Text style={[styles.headerText, { color: theme.colors.text }]}>Settings</Text>
      </View>
      <View style={{ marginTop: 50 }}>
      {/** Settings Options */}
        <FlatList
          data={setData}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.titleAndIcon}>
              <Text style={[styles.titleText, { color: theme.colors.text }]}>{item.title}</Text>
                <TouchableOpacity>
                  <Text>{item.icon}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.themeTextContainer}>
        <Text style={[styles.themeText, { color: theme.colors.text }]}>Theme</Text>
        {/** The toggle switch for changing themes */}
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700',
  },
  listContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor:colors.lightgrey,
    width: '90%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '600',
  },
  titleAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  themeTextContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeText: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default SettingsScreen;
