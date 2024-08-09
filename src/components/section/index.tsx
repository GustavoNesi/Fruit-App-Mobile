import { Container, TextSection } from "./styles";

interface SectionProps {
    name: string;
}

export function Section({ name } : SectionProps){
    return(
        <Container>
            <TextSection>{name}</TextSection>
        </Container>
    )
}