import { StyleSheet } from "react-native"
import { colors } from '../../colors/styles'

export const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: colors.gray500,
    width: 327,
    minHeight: 64,
    borderRadius: 8,
    gap: 8,

    marginBottom: 8,

    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
   
    padding: 14,
  },
  infoCard: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  iconCheck: {
    height: 24,
    width: 24,
  },
  textInfoCard: {
    fontSize: 14,
    width: 235,
    color: colors.gray100, 
  },
  iconTrash: {
    color: colors.gray300,
  },
  taskCompleted: {
    fontSize: 14,
    maxWidth: 235,
    color: colors.gray300, 
    textDecorationLine: 'line-through'
  },
  checkBox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.blue
  },
  checkBoxActive: {
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: colors.purple,
    border: 'none',
  }, 
  iconComleted: {
    color: colors.gray100,
    alignSelf: 'center',
  }
})