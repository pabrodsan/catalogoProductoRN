import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { headphone, keyboard, monitor, mouse, noImageLoad, urlHeadphone, urlKeyboard, urlMonitor, urlMouse } from '../utils/constants';

const ProductInformation = ({route}) => {

    const { price, name, brand, about} = route.params;

    const urlImage = () => {
        console.log(name)
        switch (name) {
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
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>{name} {brand}</Text>
            </View>
            <Image
                style={styles.image}
                source={{
                    uri: urlImage()
                }}
            />
            <View style={styles.about}>
                <Text style={{ fontSize: 18}}> {about} </Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={[styles.price, {backgroundColor: 'orange'}]}>Price: {price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#e3a04d"
    },    
    about: {
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    image: {
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: "center",
        width: 200,
        height: 200,
        resizeMode: "center"
    },
    price: {
        fontSize: 40
    }
});
export default ProductInformation;