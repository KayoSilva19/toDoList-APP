import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { Task } from "../../components/Task";
import { useState } from "react";

const logoImg = '../../../assets/Logo.png';
export function Home() {
    const [taskList, setTaskList] = useState<string[]>([])
    const [taskText, setTaskText] = useState('')
    const [tasksCompleted, setTaskCompleted] = useState<string[]>([])

    function handleTaskAdd() {
      if(taskList.includes(taskText)) {
        return Alert.alert('Ops!', 'Parece que você já tem uma task aberta com este mesmo assunto.')
      }

      if(taskText === '') {
        return Alert.alert('Ops!', 'Parece que você não tem nada para fazer.')
      }

      setTaskList((prevState) => [...prevState, taskText ])
      setTaskText('')
    }

    function handleDelete (task: string) {
      Alert.alert('Remover Task', 'Deseja mesmo remover esta task ?',  [{
        text: 'Sim', 
        onPress: () => {
          setTaskList((prevState) => prevState.filter((taksText) => taksText !== task))
          setTaskCompleted((prevState) => prevState.filter((taksText) => taksText !== task))
        }
      }, 
      {
        text: 'Não', 
        style: 'cancel'
      }  
    ])
    }

    function handleTaskComplete (task: string) {
      if (tasksCompleted.includes(task)) {
        return setTaskCompleted((prevState) => prevState.filter((taksText) => taksText !== task))
          
      }

      setTaskCompleted((prevState) => [...prevState, task])
    }
    
    function onActive(item: string) {
      return tasksCompleted.includes(item) ? true : false
    }

  return (
  <View style={styles.content}> 
    <View style={styles.header}>
      <Image style={styles.logo} source={require(logoImg)}/>
     <View style={styles.form}>
        <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#7f7f7f'
            value={taskText} 
            onChangeText={(task) => setTaskText(task)}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
          <Text style={styles.countTask}>{taskList.length === 0 ? '0' : taskList.length}</Text>
        </View>
        <View style={styles.contentHeader}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.countTask}>{tasksCompleted.length === 0 ? '0' : tasksCompleted.length}</Text>
        </View>
      </View>
   

      <View style={styles.taskList}>
        <FlatList
          data={taskList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              onDelete={() => handleDelete(item)}
              onComplete={() => handleTaskComplete(item)}
              active = {() => onActive(item) }
            />
          )}

          showsVerticalScrollIndicator={false} 

          ListEmptyComponent={() => (
           <View style={styles.emptyTaskList}>
              <Ionicons name="clipboard-outline" size={56} style={styles.iconEmpty} />
              <Text style={styles.emptyText}>
                <Text style={{fontWeight: 'bold', }}>
                  Você ainda não tem tarefas cadastradas 
                </Text> Crie tarefas e organize seus itens a fazer 
              </Text>
           </View> 

          )}
        />

      </View>
    </View>
  )
}