import { useState } from 'react'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import './App.css'
import type { IUser, inputUser } from './types'
import { UserContext } from './context'



function App() {

  const [users, setUsers] = useState<IUser[]>([
    {id:101, name:"Gago", age:18, salary:400000, isMarried:false},
    {id:102, name:"Alexandra", age:33, salary:180000, isMarried:true},
    {id:103, name:"Hans", age:28, salary:200000, isMarried:true},
    {id:104, name:"Anna", age:22, salary:250000, isMarried:true}
  ])

  const onAdd = (user:inputUser):void => {
    setUsers([...users, { ...user, id:Date.now()}])
  }

  const removeUser = (id:number):void => {
    setUsers(users.filter(user => user.id != id))
  }

  return <>
  <UserContext.Provider value={{users, removeUser, onAdd}}>
    <AddUser />
    <UserList />
    </UserContext.Provider>
  </>
}

export default App
