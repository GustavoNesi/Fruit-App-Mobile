
import { Header } from "../../components/Header";
import { Container, ScrollView, SearchContainer,  } from "./styles";
import { Banner } from "../../components/Banner";
import { FilterButton } from "../../components/FilterButton";
import { Items } from "../../components/FilterItens";
import { Search } from "../../components/Search";
import { Section } from "../../components/section";

export function Home() {
    return(
      <ScrollView>
        <Container>
          
          <Header/>  

          <Banner/>

          <Section name="Categorias"/>

          <FilterButton/>

          <SearchContainer>
            <Search/>
          </SearchContainer>

          <Items/>
          
        </Container>
      </ScrollView>
        
    )
}