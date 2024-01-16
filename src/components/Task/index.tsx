import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Ionicons } from "@expo/vector-icons";

type Props =  {
  task: string;
  onDelete: () => void;
  onComplete: () => void;
  active: () => boolean;

}

export function Task({ task, onComplete, onDelete, active }: Props) {

  return (
    <View style={styles.taskCard}>
      <View style={styles.infoCard}>
        <TouchableOpacity onPress={onComplete}>
          <View style={active() ? styles.checkBoxActive : styles.checkBox}>
            {active() ? <Ionicons name="checkmark-outline" size={17} style={styles.iconComleted}/> : ''}
          </View>
        </TouchableOpacity>
        <Text style={active() ? styles.taskCompleted : styles.textInfoCard}>{task}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash-outline" size={22} style={styles.iconTrash}/>
      </TouchableOpacity>
    </View>
  )
}