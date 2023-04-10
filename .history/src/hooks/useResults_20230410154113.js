import {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
       try{
        const res = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
           });
           setResults(res.data.businesses)
        } catch (err){
            setError('Something went wrong');
        }
       }
      
       useEffect(()=> {
        searchApi('pasta')
       }, []);
}