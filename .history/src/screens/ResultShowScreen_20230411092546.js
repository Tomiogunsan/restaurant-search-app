import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation}) => {
   const id = navigation.getParam('id');

   const getResult = (id) => {

   }
    return <View>
        <Text>Results show</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen;