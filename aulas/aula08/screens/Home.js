import { useEffect } from "react";
import { View } from "react-native";
import ListaVertical
    from "../components/ListaVertical";
import ListaHorizontal from "../components/ListaHorizontal";
import { useEffect } from "react";

function Home() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <ListaHorizontal />
            <ListaVertical />
        </View>
    );
}

export default Home;