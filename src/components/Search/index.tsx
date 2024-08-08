import { Feather } from "@expo/vector-icons";
import { Container, Input } from "./styles";

export function Search() {
    return(
        <Container>
            <Input
                placeholder="Procure sua fruta"
            />
            <Feather name="search" size={24} color="#64748b"/>
        </Container>
    )
}