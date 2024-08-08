
import { Container } from "./styles";

type ItemProps = {
    backgroundColor: string;
};

export function ButtonList({ backgroundColor }: ItemProps) {
    return(
        <Container backgroundColor={backgroundColor}/>

    )
}