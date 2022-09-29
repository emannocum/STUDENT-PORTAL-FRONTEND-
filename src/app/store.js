import { configureStore } from '@reduxjs/toolkit'
import userInfo from '../slice/UserSession/userSession'
import menuState from '../slice/MenuSlice/MenuState'
import formState from '../slice/FormSlice/FormSlice'
import formType from '../slice/FormType/FormType'
import themeMode from '../slice/ThemeMode/ThemeMode'
import pageState from '../slice/PageSlice/PageSlice'
import employeeSelect from '../slice/FormSelectedRow/EmployeeSelected'
import openEmployeeTable from '../slice/Snackbars/EmployeeTableOpen/EmployeeTableOpen'
import statusEmployeeTable from '../slice/Snackbars/EmployeeTableStatus/EmployeeTableStatus'
import messageEmployeeTable from '../slice/Snackbars/EmployeeTableMessage/EmployeeTableMessage'
import addFormFor from '../slice/AddFormSlice/AddEmployeeSlice/AddEmployeeSlice'

export const store = configureStore({
  reducer: {
    user: userInfo,
    isOpen: menuState,
    isOpenForm: formState,
    formType: formType,
    selectedTheme: themeMode,
    selectedPage: pageState,
    employeeSelected: employeeSelect,
    openSnackEmp: openEmployeeTable,
    snackStatusEmp: statusEmployeeTable,
    snackMessageEmp: messageEmployeeTable,
    addForm: addFormFor,
  },
})