import { Box, Card, CardBody, Center, Flex, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import {Tag} from "./ui/Tag";

export const RecipeCard = ({recipe, clickFn}) => {



    return (
        <Card
            maxW="sm"
            borderRadius="xl"
            cursor="pointer"
            onClick={() => clickFn(recipe)}
        >
            <CardBody padding="0" align="center">
                <Image            
                    h="200px"
                    w="full"
                    objectFit="cover"
                    borderTopRadius="xl"           
                    src={recipe.recipe.image} 
                />
            
            < Stack m={[1, 6]} spacing="-0.5" >
                <Text fontSize="14px" color="grey" fontWeight="medium" textTransform="uppercase">{recipe.recipe.mealType}</Text>
                <Heading size="md" fontWeight="medium">{recipe.recipe.label}</Heading>
                
                <HStack mt={3} spacing={3} justify="center">
                {recipe.recipe.healthLabels.filter((label) => 
                    label === "Vegetarian" || label ==="Vegan").map((label) => (
                    <Tag key={label} bgColor="purple.100">{label}</Tag>
                    ))}   
                </HStack>
                
                <HStack mt={3} spacing={3} justify="center">
                {recipe.recipe.dietLabels.map((label) => {
                    return (
                        <Tag key={label}>{label}</Tag>
                    );
                })}
                </HStack>
                           
            </Stack>         
            </CardBody>  
        </Card>
            
    )
}