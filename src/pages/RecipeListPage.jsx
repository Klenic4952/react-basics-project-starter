import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { RecipeCard } from '../components/RecipeCard';
import { data } from '../utils/data';

export const RecipeListPage = ({clickFn}) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  // console.log(data.hits[2].recipe.label);
  

 const recipes = data.hits
 //console.log(data.hits);
 
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Heading margin="20">Your Recipe App</Heading>
      </Box>
      <Container maxW="80%">
        <SimpleGrid spacing="5" minChildWidth="300px">
        
          {recipes.map((recipe) => (
              <RecipeCard
                clickFn={clickFn} 
                recipe={recipe} 
                key={recipe.recipe.url}          
              />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};
  