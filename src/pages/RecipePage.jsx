import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const RecipePage = ({ recipe }) => {
  return (
    <Box bgColor="blue.100">
      <Container     
        maxWidth={{ base: "95vw", sm: "80vw", md: "50vw" }}
        minHeight="100vh"
        padding="0px"
        ml="auto"
        mr="auto"
      >
        <Card bgColor="white">
          <CardBody padding="0">
            <Image
              h="300px"
              w="full"
              mt="10"
              objectFit="cover"
              src={recipe.recipe.image}
            />

            <SimpleGrid spacing="5" m="7" minChildWidth="75px">
              <Box>
                <Text
                  fontSize={{ base: "12px", lg: "14px" }}
                  color="grey"
                  fontWeight="medium"
                  textTransform="uppercase"
                >
                  {recipe.recipe.mealType}
                </Text>
                <Heading
                  fontSize={{ base: "18px", lg: "22px" }}
                  mt="1"
                  fontWeight="medium"
                >
                  {recipe.recipe.label}
                </Heading>
                <Flex gap="2" mt="3">
                  <Text>Total cooking time:</Text>
                  <Text fontWeight="medium">
                    {recipe.recipe.totalTime} minutes
                  </Text>
                </Flex>
                <Flex gap="2" mt=".5">
                  <Text>Servings:</Text>
                  <Text fontWeight="medium">{recipe.recipe.yield}</Text>
                </Flex>
                <Box mt="2">
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    fontWeight="semibold"
                    mb="2"
                  >
                    Ingredients:
                  </Text>
                  {recipe.recipe.ingredientLines.map((ingredient) => {
                    return (
                      <Text
                        mb="3"
                        lineHeight={1}
                        fontSize={{ base: "15px", lg: "17px" }}
                        key={ingredient}
                      >
                        {ingredient}
                      </Text>
                    );
                  })}
                </Box>
              </Box>
              <Box>
                <Text>Health Labels:</Text>
                <Box>
                  {recipe.recipe.healthLabels.map((label) => {
                    return (
                      <Tag key={label} bgColor="purple.100" mr="1" mb="1">
                        {label}
                      </Tag>
                    );
                  })}
                </Box>
                <Text mt="2">Diet:</Text>
                <Box>
                  {recipe.recipe.dietLabels.map((diet) => {
                    return (
                      <Tag key={diet} bgColor="green.100" mr="1" mb="1">
                        {diet}
                      </Tag>
                    );
                  })}
                </Box>
                <Text>Cautions:</Text>
                <Box>
                  {recipe.recipe.cautions.map((label) => {
                    return (
                      <Tag key={label} bgColor="#FCC3B2" mr="1" mb="1">
                        {label}
                      </Tag>
                    );
                  })}
                </Box>
                <Text fontWeight="semibold" mt="2" mb="2">
                  Total nutriënts:
                </Text>
                <Flex
                  flexDir="row"
                  wrap="wrap"
                  justify="flex-start"
                  columnGap="3.5"
                  mb="15px"
                >
                  <Flex flexDir="column" justify="space-evenly">
                    <Flex fontSize="14px">
                      {Math.round(
                        recipe.recipe.totalNutrients.ENERC_KCAL.quantity
                      )}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      CALORIES
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Flex fontSize="14px">
                      {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                      {recipe.recipe.totalNutrients.CHOCDF.unit}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      {recipe.recipe.totalNutrients.CHOCDF.label.toUpperCase()}
                    </Text>
                  </Flex>

                  <Flex flexDir="column">
                    <Flex fontSize="14px">
                      {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}
                      {recipe.recipe.totalNutrients.PROCNT.unit}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      {recipe.recipe.totalNutrients.PROCNT.label.toUpperCase()}
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Flex fontSize="14px">
                      {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}
                      {recipe.recipe.totalNutrients.FAT.unit}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      {recipe.recipe.totalNutrients.FAT.label.toUpperCase()}
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Flex fontSize="14px">
                      {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}
                      {recipe.recipe.totalNutrients.CHOLE.unit}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      {recipe.recipe.totalNutrients.CHOLE.label.toUpperCase()}
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Flex fontSize="14px">
                      {Math.round(recipe.recipe.totalNutrients.NA.quantity)}
                      {recipe.recipe.totalNutrients.NA.unit}
                    </Flex>
                    <Text fontWeight="semibold" fontSize="14px">
                      {recipe.recipe.totalNutrients.NA.label.toUpperCase()}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};
