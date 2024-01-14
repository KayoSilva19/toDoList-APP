import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Ionicons } from "@expo/vector-icons";

export function Task() {
  return (
    <View style={styles.taskCard}>
      <View style={styles.infoCard}>
        <Text style={styles.iconCheck}>1</Text>
        <Text style={styles.textInfoCard}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="trash-outline" size={22} style={styles.iconTrash}/>
      </TouchableOpacity>
    </View>
  )
}