import AppNavigation from "./src/navigation";

export default function App() {
  return <AppNavigation />;
}

//Pokemon App
// import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
// import PokemonCard from "./components/PokemonCard";

// export default function App() {
//   const charmenderData = {
//     name: "Charmander",
//     image: require("./assets/charmander.png"),
//     type: "Fire",
//     hp: 39,
//     moves: ["Scratch", "Ember", "Growl", "Leer"],
//     weaknesses: ["Water", "Rock"],
//   };

//   const squirtleData = {
//     name: "Squirtle",
//     image: require("./assets/squirtle.png"),
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };

//   const bulbasaurData = {
//     name: "Bulbasaur",
//     image: require("./assets/bulbasaur.png"),
//     type: "Grass",
//     hp: 45,
//     moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
//     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//   };

//   const pikachuData = {
//     name: "Pikachu",
//     image: require("./assets/pikachu.png"),
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
//     weaknesses: ["Ground"],
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsHorizontalScrollIndicator={false}>
//         <PokemonCard {...charmenderData} />
//         <PokemonCard {...squirtleData} />
//         <PokemonCard {...bulbasaurData} />
//         <PokemonCard {...pikachuData} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: Platform.OS === "android" ? 25 : 0,
//   },
// });
