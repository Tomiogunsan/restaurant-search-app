import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import

const ResultsList = ({title, results }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
       <FlatList
       horizontal={true}
       data={results}
       keyExtractor={(result) => result.id}
       renderItem={({item}) => {
        return <Text>{item.name}</Text>
       }}
       />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
