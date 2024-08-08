
import { Header } from "../../components/Header";
import { Container, ScrollView, SearchContainer,  } from "./styles";
import { Banner } from "../../components/Banner";
import { FilterButton } from "../../components/FilterButton";
import { Items } from "../../components/FilterItens";
import { Search } from "../../components/Search";

export function Home() {
    return(
      <ScrollView>
        <Container>
          
          <Header/>  

          <Banner/>

          <FilterButton/>

          <SearchContainer>

            <Search/>

            <Items/>

          </SearchContainer>
          
        </Container>
      </ScrollView>
        
    )
}