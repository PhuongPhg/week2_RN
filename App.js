import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import Constants from "expo-constants";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import MasonryList from '@appandflow/masonry-list';

export default function App() {
  const users = [
    {
      username: 'phngtrnh',
      avatarUrl: require("./assets/1.jpg"),
      intro: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
  ];
  const imgData = [
    { id: 1, imgSource: require('./assets/1.jpg')},
    { id: 2, imgSource: require('./assets/2.jpg')},
    { id: 3, imgSource: require('./assets/3.jpg')},
    { id: 4, imgSource: require('./assets/4.jpg')},
    { id: 5, imgSource: require('./assets/5.jpg')},
    { id: 6, imgSource: require('./assets/6.jpg')},
    { id: 7, imgSource: require('./assets/7.jpg')},
    { id: 8, imgSource: require('./assets/8.jpg')},
    { id: 9, imgSource: require('./assets/9.jpg')},
  ];
  const centerImgData = Math.floor(imgData.length/2);

  
  return (
<>
    <View style={styles.bar}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
      <Entypo name="menu" size={24} color="black" />
    </View>
    
    <View>
      {users.map((user) => (
        <View style={styles.avatarStyle}>
          <Image source={user.avatarUrl} style={styles.imgAva} />
          <View style={styles.innerPro}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.intro}>{user.intro}</Text> 
            <View style={{flexDirection:'row'}}>
              <View style={
                {backgroundColor: '#393b44', marginRight: 12, borderRadius: 30, width: 150, alignItems:'center', }}>
                    <Button color="white" title="Follow"/>
              </View>
              <View style={{backgroundColor: '#393b44', alignItems:'center', padding: 5, width: 50, marginRight: 12, borderRadius: 40}}>
                <Feather name="message-circle" size={24} color="white"  />
              </View>
            </View>
          </View>
        </View>
        ))}
    </View>

        <View style={{flexDirection: 'row', paddingVertical: 15,}}>
          <View style={styles.ratingBar}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>50</Text>
            <Text style={{fontSize: 15}}>Photos</Text>
          </View>
          <View style={styles.ratingBar}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>50</Text>
            <Text style={{fontSize: 15}}>Followers</Text>
          </View>
          <View style={styles.ratingBar}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>51</Text>
            <Text style={{fontSize: 15}}>Following</Text>
          </View>
        </View>
        <ScrollView style={styles.ScrollView}>
      <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
        <View style={{flexDirection: 'column',}}>
          {imgData.slice(0, centerImgData).map(item => {
            var newSize = Math.floor(Math.random() * 250)+120;
            return <Image source={item.imgSource} style={{width: 170, height: newSize, justifyContent: 'space-between',
            borderRadius: 15,
            margin: 10,}} />
          })}
        </View>
        <View style={{flexDirection: 'column'}}>
        {imgData.slice(centerImgData).map(item => {
            var newSize = Math.floor(Math.random() * 250)+100;
            return <Image source={item.imgSource} style={{width: 170, height: newSize, justifyContent: 'space-between',
            borderRadius: 15,
            margin: 10,}} />
          })}
        </View>
      </View>
      </ScrollView>
</>
  );
}

const styles = StyleSheet.create({
  bar: {
    marginTop: Constants.statusBarHeight,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // position: 'absolute',
    // top: 0,
  },

  ScrollView: {
    // marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  avatarStyle: {
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 15,
    flexWrap: 'wrap',
    // margin: 20,
  },
  innerPro: {
    flexDirection: "column",
    marginLeft: 15,
  },
  imgAva: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    // marginBottom: 10,
    // marginTop: 0,
  },
  intro: {
    flex: 1,
    fontSize: 15,
    fontWeight: "normal",
    // color:'#add8e6',
    flexWrap: 'wrap',
    width: 220,
    marginTop: 5,
    // marginBottom: 5,
  },
  ratingBar: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 3,
  },
  imagesEven: {
    width: 170,
    height: 170,
    justifyContent: 'space-between',
    borderRadius: 15,
    margin: 10,
  },
  imagesOdd: {
    width: 170,
    height: 220,
    justifyContent: 'space-between',
    borderRadius: 15,
    margin: 10,
  }
});
