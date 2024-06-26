import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from "../config/colors";
import { FontAwesome } from '@expo/vector-icons';
import { arrowData } from '../mock/arrowData';
import { transactionsData } from '../mock/transactionsData';
import { ThemeContext } from '../config/themeContext';
import search from "../assets/search.png"

const WelcomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.wholeScreen, { backgroundColor: theme.colors.background }]}>
      <View style={styles.headerContainer}>
        <View style={styles.imageAndText}>
          <Image source={require("../assets/profile.png")} style={styles.profilePic} />
          <View style={styles.bothTexts}>
          {/** Welcome Text */}
            <Text style={{ color: "gray", fontSize: 18, fontWeight: "600" }}>Welcome Back,</Text>
            <View style={styles.textAndIcon}>
            {/** Name of the user */}
              <Text style={{ color: theme.colors.text , fontSize: 25, fontWeight: "700" }}>Afia Christabel</Text>
              {/** The Search Icon */}
              <TouchableOpacity style={{display:"flex", alignItems: "center", backgroundColor: "gray", justifyContent: "center", width: 40, height: 40, borderRadius: 50, marginLeft:70}}>
                <Image source={search} style={{}}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/** The MasterCard Image */}
        <View style={styles.cardContainer}>
          <Image source={require("../assets/Card.png")} />
        </View>
        <View>
        {/** Payment Options and Process */}
          <FlatList
            data={arrowData}
            renderItem={({ item }) => (
              <View style={styles.bothImageAndTitleContainer}>
                <View>
                  <TouchableOpacity>
                    <View style={styles.imagesContainer}>
                      <Image source={item.image} style={styles.iconImage} />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.titleTextContainer}>
                    <Text style={{ color: theme.colors.text  }}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 5 }}>
        {/** Transaction Text */}
          <Text style={{ color: theme.colors.text, fontSize: 25, fontWeight: "700" }}>Transaction</Text>
          <Text style={{ color: colors.blue, fontWeight: "600", fontSize: 15 }}>See All</Text>
        </View>
        <View>
        {/** Transaction Options and Processes */}
          <FlatList
            data={transactionsData}
            renderItem={({ item }) => (
              <View style={styles.transactionContainer}>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <View style={styles.transactionIconContainer}>
                      <Image source={item.icon} style={styles.transactionIcon} />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: theme.colors.text, fontWeight: "800", fontSize: 20 }}>{item.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ color: theme.colors.text, fontWeight: "400", fontSize: 15 }}>{item.subTitle}</Text>
                      <View>
                        <Text style={[item.style, { color: theme.colors.text === colors.white ? colors.white : colors.black },{ color: item.title === "Money Transfer" && colors.blue === colors.blue ? colors.blue : theme.colors.text }]}>{item.amount}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    marginTop: 45,
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  profilePic: {
    height: 70,
    width: 70,
  },
  imageAndText: {
    flexDirection: "row",
  },
  bothTexts: {
    marginLeft: 20,
    justifyContent: "center",
    flexDirection: "column",
  },
  textAndIcon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchIcon: {
    marginLeft: 150,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  bothImageAndTitleContainer: {
    justifyContent: "center",
    margin: 12,
  },
  imagesContainer: {
    alignSelf: "center",
    backgroundColor: colors.lightgrey,
    padding: 25,
    borderRadius: 50,
  },
  titleTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  transactionContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgrey,
    width: "90%",
    alignSelf: "center",
  },
  transactionIconContainer: {
    backgroundColor: colors.lightgrey,
    
    padding:10,
    margin:5,
    borderRadius: 50,
  },
});

export default WelcomeScreen;
