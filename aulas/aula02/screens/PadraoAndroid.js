import { View, Text, StyleSheet } from "react-native"

function PadraoAndroid() {
    return <View style={{ flex: 1 }}>
        <View style={styles.appBar}>
            <Text style={styles.appTitle}>Meu App</Text>
        </View>
        <View style={{ height: 64, justifyContent: "center", borderBottomColor: "#333", borderBottomWidth: 1, paddingHorizontal: 16 }}>
            <Text>Item 1</Text>
            <Text>Descriçao 1</Text>
        </View>
        <View style={{ height: 64, justifyContent: "center", borderBottomColor: "#333", borderBottomWidth: 1, paddingHorizontal: 16 }}>
            <Text>Item 2</Text>
            <Text>Descriçao 2</Text>
        </View>
        <View style={{ height: 64, justifyContent: "center", borderBottomColor: "#333", borderBottomWidth: 1, paddingHorizontal: 16 }}>
            <Text>Item 3</Text>
            <Text>Descriçao 3</Text>
        </View>
        <View style={{ height: 48, width: 48, backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", borderRadius: 16, position: "absolute", bottom: 16, right: "16" }}>
            <Text>+</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    appBar: {
        height: 64, backgroundColor: "gray", justifyContent: "center", paddingTop: 32, paddingLeft: 16
    },
    appTitle: { fontSize: 24, color: "white" }
})
export default PadraoAndroid