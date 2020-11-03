import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import database from '../database/db.json';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text key={item.id} style={styles.title}>
        {item.name} {item.brand}
    </Text>
    <Text>{item.price}</Text>
  </TouchableOpacity>
);

const ProductList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#9caea7" : "#bdd0c9";

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('Details', {item})}
        style={{ backgroundColor: "#bdd0c9" }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={database}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    }
});

export default ProductList;