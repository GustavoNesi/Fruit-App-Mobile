import { useState } from "react";

import { Container, 
  Input, 
  InputContainer, 
  ScrollView, 
  SearchContainer,  
} from "./styles";

import { Banner } from "../../components/Banner";
import { Items } from "../../components/FilterItens";
import { Header } from "../../components/Header";

export function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    return(
      <ScrollView>
        <Container>
          
          <Header/>  

          <Banner/>

          <SearchContainer>
            <InputContainer>
              <Input
                  placeholder="Procure sua fruta"
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
              />
            </InputContainer>
          </SearchContainer>

          <Items searchQuery={searchQuery}/>

        </Container>
      </ScrollView>
        
    )
}