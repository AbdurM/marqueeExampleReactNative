import { Text, View } from "react-native";
import { Marquee } from "@animatereactnative/marquee";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Marquee style={{ flex: 1, marginTop: 34 }} spacing={20} speed={1}>
        <Text>React native is Awesome!</Text>
      </Marquee>
    </View>
  );
}
