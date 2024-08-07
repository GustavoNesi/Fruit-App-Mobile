
import { Header } from "../../components/Header";
import { Container, ScrollView, SearchContainer,  } from "./styles";
import { Banner } from "../../components/Banner";
import { FilterButton } from "../../components/FilterButton";
import { Items } from "../../components/FilterItens";

export function Home() {
    return(
      <ScrollView>
        <Container>
          
          <Header/>  

          <Banner/>
          
          <SearchContainer>
            <FilterButton/>

            <Items/>
          </SearchContainer>
          
        </Container>
      </ScrollView>
        
    )
}