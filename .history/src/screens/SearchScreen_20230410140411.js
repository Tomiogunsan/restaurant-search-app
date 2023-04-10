import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from  '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
       try{
        const res = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
           });
           setResults(res.data.businesses)
        } catch (err){
            co
        }
       }
      

    return <View>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi()}
        />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} result</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;