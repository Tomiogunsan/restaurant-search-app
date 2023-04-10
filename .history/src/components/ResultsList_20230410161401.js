import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const ResultsList = ({title, results }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
       <Fl>
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
