import { View, Text, StyleSheet } from "react-native";

export default function FishList() {
  const fishes = [
    { id: 1, fish: "Pike", length: 98, weight: 6.57 },
    { id: 2, fish: "Pike", length: 74, weight: 3.43 },
    { id: 3, fish: "Pearch", length: 34, weight: 634 },
    { id: 4, fish: "Pike", length: 102, weight: 8.03 },
    { id: 5, fish: "Pearch", length: 42, weight: 1230 },
  ];

  return (
    <View style={styles.fishContainer}>
      <View style={styles.catchedFishHeader}>Latest Catches</View>
      {fishes &&
        fishes.map((fish) => (
          <View key={fish.id} style={[styles.aSingleFish, styles.shadowProp]}>
            <Text style={{ width: "33%" }}>{fish.fish}</Text>
            <Text style={{ width: "33%" }}>{fish.length} cm</Text>
            <Text style={{ width: "33%" }}>
              {fish.fish === "Pike" ? fish.weight + " kg" : fish.weight + " g"}
            </Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fishContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  aSingleFish: {
    flex: 2,
    flexDirection: "row",
    borderRadius: 50,
    width: "80%",
    padding: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "black",
  },
  fishCardStatStyling: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
  },
  catchedFishHeader: {
    fontSize: 24,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
  },
});
