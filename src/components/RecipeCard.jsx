import { Card, CardBody, Image } from "@chakra-ui/react"

export const RecipeCard = ({recipe, clickFn}) => {


    return (
        <Card
            onClick={() => clickFn(recipe)}
        >
            <CardBody>
                <Image
                    w="sm"
                    h={64}
                    src={recipe.recipe.image}
                    
                >

                </Image>
            </CardBody>  
        </Card>
            
    )
}