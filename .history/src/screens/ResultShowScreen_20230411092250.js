import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const ResultsShowScreen = ({navigation}) => {
    navigation.getParam('id')
    return <View>
        <Text>Results show</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen;