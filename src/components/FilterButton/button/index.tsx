import { ItemProps } from "..";
import { Container, ImageButton } from "./styles";


export function ButtonList({ backgroundColor, image }: ItemProps) {
    return(
        <Container backgroundColor={backgroundColor}>
            <ImageButton source={image}/> 
        </Container>

    )
}