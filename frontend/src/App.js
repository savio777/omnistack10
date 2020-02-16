import React, { useState, useEffect } from 'react'

import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  useEffect(() => {
    getUsers()

    navigator.geolocation.getCurrentPosition(
      (postition) => {
        setLongitude(postition.coords.longitude)
        setLatitude(postition.coords.latitude)
      },
      (error) => {
        console.log('error geolocation~> ', error)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  const [users, setUsers] = useState([])
  const [githubUser, setGithubUser] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  async function getUsers() {
    const response = await api.get('/devs')

    setUsers(response.data)
  }

  async function createUser(e) {
    e.preventDefault()
    const body = {
      github_user: githubUser,
      techs: techs,
      latitude: latitude,
      longitude: longitude
    }

    const response = await api.post('/devs', body)

    console.log(response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={(e) => createUser(e)}>
          <div className="input-block">
            <label htmlFor="github_user">Usuário do Github</label>
            <input
              name='github_user'
              id='github_user'
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name='techs'
              id='techs'
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name='latitude'
                id='latitude'
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
                disabled
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name='longitude'
                id='longitude'
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
                disabled
              />
            </div>
          </div>
          <button type='submit'>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          {(users.length > 0) && (users.map((value) => (

            <li className="dev-item">
              <header>
                <img src={value.avatar_url} alt={value.name} />
                <div className="user-info">
                  <strong>{value.name}</strong>
                  <span>
                    {value.techs[0]}
                    {(value.techs.length > 2) && value.techs.map((tech) => (
                      <>
                        {', ' + tech}
                      </>
                    ))}
                  </span>
                </div>
              </header>
              <p>{value.bio}</p>
              <a href={`https://github.com/${value.github_user}`}>Acessar perfil</a>
            </li>
          )))}

        </ul>
      </main>
    </div>
  )
}

export default App
