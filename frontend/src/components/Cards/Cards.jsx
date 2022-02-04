import React, {useState, useEffect} from 'react';
import Card from '../../components/Cards/Card';
import { squareCards } from '../../data';
import { Container } from '../../components/styles/Cards.styled';
import axios from '../../util/axiosInstance'
const Cards = () => {

  const [results,setResults] = useState([])

  const getArtists = async () =>{
    const response = await axios.get('/shows/attractions?attractionName=madonna')
    console.log(response.data)
    setResults(response.data.payload.attractions)


    
  }

  useEffect(() => {
    getArtists()
  }, [])

  return (
    <Container>
      {results ? results.map((event)=>(
       <Card
  
        event={event} key={event.id}/> 
      )) : 'no shows'}
    </Container>
  //   <Container>
  //     {squareCards.map((item) => (
  //       <Card item={item} key={item.id} />
  //     ))}
  //   </Container>
  );
}

export default Cards;

