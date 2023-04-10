import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return <View>
        <Image  style={styles.image} 
        source={{uri: result.image_url}} 
        />
        <Text>{result.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height
        borderRadius: 4
    }
});

export default ResultsDetail;