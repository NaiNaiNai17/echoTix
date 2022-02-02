import React from 'react';

const SearchResults = () => {
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

  );
};

export default SearchResults;
