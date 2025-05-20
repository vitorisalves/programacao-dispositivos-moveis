import { View, FlatList } from "react-native";
import { List, Text } from "react-native-paper";

function ListaVertical() {
    const lojas = [
        "Restaurante Asa Sul",
        "Restaurante Asa Norte",
        "Restaurante Tagua",
        "Bar Ceilandia",
        "Bar Sudoeste",
        "Lanchonete Gama",
        "Pizzaria Nucleo"
    ]
    return (
        <View>
            <Text variant="tittleMedium">Loja</Text>
            <FlatList
                data={lojas}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <List.Item
                        tittle={item}
                        description={"*4,8"}
                    />
                )}
            />
        </View>
    )


}

export default ListaVertical