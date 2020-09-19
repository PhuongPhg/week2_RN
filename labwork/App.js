import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';

export default function App() {
  const users = [
    {
      posterName: "phngtrnh",
      avatarUrl: require("./assets/2.jpg"),
      imageUrl: require("./assets/3.jpg"),
      likeCount: "111 likes",
    },
    {
      posterName: "still.phuong",
      avatarUrl: require("./assets/4.jpg"),
      imageUrl: require("./assets/5.jpg"),
      likeCount: "333 likes",
    },
    {
      posterName: "phuong.again",
      avatarUrl: require("./assets/6.jpg"),
      imageUrl: require("./assets/7.jpg"),
      likeCount: "555 likes",
    },
  ];
  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
      <View style={{ width: 27 }} />
        <Image source={{
          uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          }} style={styles.instaLogo} resizeMode="contain"/>
        <Feather name="inbox" size={24} color="black" style={{paddingRight: 10}} />
      </View>
      <View>
        {users.map((user)=>(
          <>
          <View style={styles.avatarWrapper}>
            <Image source={user.avatarUrl} style={styles.avatarImg} resizeMode="cover"/>
            <Text style={styles.posterNames}>{user.posterName}</Text>
          </View>
          <View style={{height: 300}}>
            <Image source={user.imageUrl} style={styles.imgPoster} resizeMode="cover"/>
          </View>
          <View style={styles.rating}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => alert("Liked")}>
            <Feather name="heart" size={27} color="black" style={{marginRight: 5}}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => alert("Direct")} >
            <Feather name="message-circle" size={27} color="black" style={{marginRight: 5}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}  onPress={() => alert("Shared")} >
            <Feather name="share" size={27} color="black" style={{marginRight: 5}}/>
          </TouchableOpacity>
          </View>
          <View>
            <Text style={{marginLeft: 12, fontSize: 17,}}>{user.likeCount}</Text>
          </View>
          </>
        ))}
      </View>
    </ScrollView>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  instaLogo:{
    flex: 1,
    width: null,
    height: 40,
    // alignItems: 'center',
  },
  banner: {
    flexDirection:'row', 
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    flexDirection: 'row',
    // height: 300,
    flex:1,
    alignItems:'center',
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImg:{
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  posterNames:{
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '500',
  },
  imgPoster:{
    flex: 1,
    width: null,
    height: null,
  },
  rating:{
    flex: 1,
    flexDirection:'row',
    marginVertical: 10,
    marginLeft: 12,
  }
});
