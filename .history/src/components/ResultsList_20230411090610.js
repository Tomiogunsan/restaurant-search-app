import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from "./ResultsDetails";

const ResultsList = ({title, results, navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       <FlatList
       horizontal={true}
       data={results}
       showsHorizontalScrollIndicator={false}
       keyExtractor={(result) => result.id}
       renderItem={({item}) => {
        return( 
            <TouchableOpacity >
        <ResultsDetail result={item} />
        </TouchableOpacity>
        )
       }}
       />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;