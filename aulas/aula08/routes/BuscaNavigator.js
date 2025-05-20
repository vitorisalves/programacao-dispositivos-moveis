import {createNativeStackNavigator} from "@react-navigator/native-stack"
import Categorias from "../screens/Categorias"
import Lojas from "../screens/Lojas"
const Stack = createNativeStackNavigator()

function BuscaNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Categorias" components={Categorias}/>
            <Stack.Screen name="Lojas" components={Lojas}/>
        </Stack.Navigator>
    )
}