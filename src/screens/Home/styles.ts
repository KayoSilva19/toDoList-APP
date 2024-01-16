import { StyleSheet } from "react-native"
import { colors } from '../../colors/styles'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.gray700,
    paddingTop: 70,
  },
  logo: {
    width: 110,
    height: 32,
    resizeMode: 'contain',
    margin: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    width: 327,
    justifyContent: 'center',
    padding: 24,
    gap: 8,
  },
  input: {
    width: 271,
    color: colors.gray100,
    backgroundColor: colors.gray500,
    padding: 16,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray700,
  },
  button: {
    backgroundColor: colors.blueDark,
    height: 52,
    width: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.blueDark,
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    fontSize: 32,
    color: colors.gray100,
  },
  taskHeader: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countTask: {
    backgroundColor: colors.gray400,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 9,

    fontWeight: 'bold',
    color: colors.gray200,

  },
  create: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  completed: {
    color: colors.purple,
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',

  },
  emptyTaskList: {  
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: colors.gray400,
    paddingTop: 48,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconEmpty: {
    alignSelf: 'center',
    color: colors.gray400,
  },
  emptyText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 16,
    color: colors.gray300,
  }
})