import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
   const id = navigation.getParam('id');

   const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
      setResult(response.data) ;
   };

   useEffect(() => {
     first
   
     return () => {
       second
     }
   }, [third])
   

    return <View>
        <Text>Results show</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen;