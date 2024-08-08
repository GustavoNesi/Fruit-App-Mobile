import { ButtonList } from "./button";
import {List} from "./styles";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      backgroundColor: "#A02334",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      backgroundColor: "#FFB22C",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      backgroundColor: "#C84B31",
    },
    {
      id: '586494a0f-3da1-471f-bd96-145571e29d72',
      backgroundColor: "#346751",
    },
    {
      id: '5826494a0f-3da1-471f-bd96-145571e29d72',
      backgroundColor: "#522258",
    },
    {
      id: '5864944a0f-3da1-471f-bd96-145571e29d72',
      backgroundColor: "#FFB22C",
    },
  ];

export function FilterButton() {
    return(
        <List 
            data={DATA}
            renderItem={({item}) => <ButtonList  backgroundColor={item.backgroundColor}/>}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
        />
    )
}