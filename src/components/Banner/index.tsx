import PagerView from "react-native-pager-view";
import { ButtonContainer, Container, ImageBanner } from "./styles";


export function Banner(){
    return(
        <Container>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                
                <ButtonContainer key="1">
                    <ImageBanner source={require("../../assets/banner/Banne1.jpg")}/>
                </ButtonContainer>

                <ButtonContainer key="2">
                    <ImageBanner source={require("../../assets/banner/Banne2.jpg")}/>
                </ButtonContainer>

                <ButtonContainer key="3">
                    <ImageBanner source={require("../../assets/banner/Banne3.jpg")}/>
                </ButtonContainer>

            </PagerView>
        </Container>
    )
}