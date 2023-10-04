import { View, Text, FlatList, ImageProps } from "react-native";
import { Card } from "../../../shared/components/card";
import { useNavigation } from '@react-navigation/native'


type cardInfo = {
    id: string,
    title: string,
    image: ImageProps["source"],
    price: string,
    ofer: string

}

const itens: cardInfo[] = [
    { id: '1', title: 'lamp 1', image: require("../../../assets/R.jpg"), price: 'R$ 9,90', ofer: 'R$ 29,99' },
    { id: '2', title: 'lamp 2', image: require("../../../assets/light.png"), price: 'R$ 9,90', ofer: 'R$ 34,99' },
    { id: '3', title: 'lamp 3', image: require("../../../assets/R.jpg"), price: 'R$ 9,90', ofer: 'R$ 19,99' },
    { id: '4', title: 'lamp 4', image: require("../../../assets/light.png"), price: 'R$ 9,90', ofer: 'R$ 15,99' },

]

const Profile = () => {
    const navigation = useNavigation();
    function changeScreen() {
        navigation.navigate('View');
    }

    return (

        <View style={{ flex: 1 }}>
            <FlatList
                ItemSeparatorComponent={() => <View style={{ alignItems: 'center' }}><View style={{ backgroundColor: '#767676', height: 1, width: '80%' }} /></View>}
                data={itens}
                renderItem={({ item }) => (<Card
                    title={item.title} 
                    image={item.image} 
                    price={item.price} 
                    ofer={item.ofer} 
                    onPress={changeScreen}></Card>)}
            />
            {/* <Card onPress={changeScreen}></Card> */}
        </View>
    )
}

export default Profile;