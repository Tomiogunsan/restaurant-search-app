import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from "./ResultsDetails";

const ResultsList = ({title, results }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
       <FlatList
       horizontal={true}
       data={results}
       keyExtractor={(result) => result.id}
       renderItem={({item}) => {
        return <ResultsDetail result={item} />
       }}
       />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
        margin
    }
});

export default ResultsList;
