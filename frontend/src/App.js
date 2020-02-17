import React, { useState, useEffect } from 'react'

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  useEffect(() => {
    getUsers()
  }, [])

  const [users, setUsers] = useState([])

  async function getUsers() {
    const response = await api.get('/devs')

    setUsers(response.data)
  }

  async function createUser(body) {
    const response = await api.post('/devs', body)

    setUsers([...users, response.data])
  }

  return (
    <div id="app">
      <aside>
        <DevForm
          users={users}
          setUsers={() => setUsers()}
          createUser={(e) => createUser(e)}
        />
      </aside>

      <main>
        <ul>
          {(users.length > 0) && (users.map((value) => (
            <DevItem
              key={value._id}
              user={value}
            />
          )))}
        </ul>
      </main>
    </div>
  )
}

export default App
