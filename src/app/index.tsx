import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Expo Product Explorer!</Text>
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Nawal Hassan (22I-2428)
      </Text>
    </View>
  );
}