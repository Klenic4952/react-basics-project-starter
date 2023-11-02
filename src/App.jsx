import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  
  return <RecipeListPage />;
};
