import PagerView from "react-native-pager-view";
import { ButtonContainer, Container, ImageBanner } from "./styles";

import Banner1 from "../../assets/Banne1.jpg"

export function Banner(){
    return(
        <Container>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={15}>
                
                <ButtonContainer key="1">
                    <ImageBanner source={require("../../assets/Banne1.jpg")}/>
                </ButtonContainer>

                <ButtonContainer key="2">
                    <ImageBanner source={require("../../assets/Banne2.jpg")}/>
                </ButtonContainer>

                <ButtonContainer key="3">
                    <ImageBanner source={require("../../assets/Banne3.jpg")}/>
                </ButtonContainer>

            </PagerView>
        </Container>
    )
}