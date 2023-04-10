import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return <View>
        <Image source={{uri: result.image_url}} />
        <Text>{result.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    ima
});

export default ResultsDetail;