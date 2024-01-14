import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { Task } from "../../components/Task";

const logoImg = '../../../assets/Logo.png';
export function Home() {
  return (
  <View style={styles.content}> 
    <View style={styles.header}>
      <Image style={styles.logo} source={require(logoImg)}/>
     <View style={styles.form}>
        <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#7f7f7f'
          
        />

        <TouchableOpacity style={styles.button}>
          <Ionicons 
            name="add-circle-outline" 
            size={24} 
            style={styles.iconButton} 
          />
        </TouchableOpacity> 
     </View>
    </View>

      <View style={styles.taskHeader}>
        <View style={styles.contentHeader}>
          <Text style={styles.create}>Criadas</Text>
          <Text style={styles.countTask}>0</Text>
        </View>
        <View style={styles.contentHeader}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.countTask}>0</Text>
        </View>
      </View>
   

      <View style={styles.taskList}>
          {/* <View style={styles.emptyTaskList}>
            <Ionicons name="clipboard-outline" size={56} style={styles.iconEmpty} />
            <Text style={styles.emptyText}><Text style={{fontWeight: 'bold', }}>Você ainda não tem tarefas cadastradas </Text>
              Crie tarefas e organize seus itens a fazer</Text>
          </View> */}

           <Task/>
      </View>
    </View>
  )
}