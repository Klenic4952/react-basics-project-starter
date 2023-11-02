import { Center, Heading } from '@chakra-ui/react';
import { RecipeCard } from '../components/RecipeCard';
import { data } from '../utils/data';

export const RecipeListPage = (clickFn) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  // console.log(data.hits[2].recipe.label);
  // console.log(data.hits);

 const recipes = data.hits
 
  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
        {recipes.map((recipe) => (
          <RecipeCard clickFn={clickFn} recipe={recipe} key={recipe.recipe.label} />
  ))}
    </Center>
  );
};
  