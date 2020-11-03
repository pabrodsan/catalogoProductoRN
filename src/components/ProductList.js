import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import database from '../database/db.json';
import { colorList } from '../utils/constants';
import { headphone, keyboard, monitor, mouse, noImageLoad, urlHeadphone, urlKeyboard, urlMonitor, urlMouse } from '../utils/constants';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image
      style={{ width: 50, height: 50,}}
      source={{
          uri: item.urlImage
      }}
    />
    <Text key={item.id} style={styles.title}>
        {item.name} {item.brand}
    </Text>
    <Text>{item.price}</Text>
  </TouchableOpacity>
);

const ProductList = ({navigation}) => {

  const renderItem = ({ item }) => {

    const urlImage = () => {
      switch (item.name) {
          case keyboard:
              return urlKeyboard
          case headphone:
              return urlHeadphone
          case monitor:
              return urlMonitor
          case mouse:
              return urlMouse
          default:
              return noImageLoad
      }
    }
    item.urlImage = urlImage();
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('information', item)}
        style={{ backgroundColor: colorList }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
            uri: "https://thumb.pccomponentes.com/w-220-220/articles/19/194723/1.jpg"
        }}
      />
      <FlatList
        data={database}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center"
    },
    title: {
        fontSize: 16,
    },
    image: {
      alignSelf: "center",
      width: 200,
      height: 150,
    }
});

export default ProductList;