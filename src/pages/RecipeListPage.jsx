import { Container, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
//import { data } from "../utils/data";

export const RecipeListPage = ({ clickFn, recipes }) => {
 // const recipes = data.hits;

  return (
    <Container maxW="85%">
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
  );
};
