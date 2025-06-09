import { createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Registrar from "../screens/Registrar"

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="registrar" component={Registrar}/>
    </Stack.Navigator>
}

export default StackNavigator