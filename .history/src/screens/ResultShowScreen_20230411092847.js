import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState()
   const id = navigation.getParam('id');

   const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
       response.data;
   };
    return <View>
        <Text>Results show</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen;