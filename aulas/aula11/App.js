import {SafeAreaProvider} from "react-native-context"
import {NavigationContainer} from "@react=navigation/native"
import { AuthProvider} from "./context/AuthContext"
import { StackNavigator} from "./routes/StackNavigator"

function App() {
  return (
   <SafeAreaProvider>
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>
   </SafeAreaProvider>
  );
}



export default App