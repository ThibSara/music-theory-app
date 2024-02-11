import { View, Image } from "react-native";

import smiling from "../../../assets/images/notes/Smiling.jpg";
import angry from "../../../assets/images/notes/Angry.jpg";
import note from "../../../assets/images/notes/Default.jpg";

import exampleImage from "./assets/images/example.png";
const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

export default function Note() {
  var imgSrc = note;
  switch (props.note) {
    case "smiling":
      imgSrc = smiling;
      break;
    case "angry":
      imgSrc = angry;
      break;
  }
  return (
    <View>
      <Image source={{ uri: exampleImageUri }} />
    </View>
  );
}
