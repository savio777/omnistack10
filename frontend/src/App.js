import React, { useState, useEffect } from 'react'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

const App = () => {

  useEffect(() => {
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

  const [githubUser, setGithubUser] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [repeticaoTeste, setRepeticaoTeste] = useState([1, 2, 3, 4, 5])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
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
          {(repeticaoTeste) && (repeticaoTeste.map(value => (

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/35678887?s=460&v=4" alt="Sávio" />
                <div className="user-info">
                  <strong>Sávio</strong>
                  <span>React, Nodejs</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
              <a href="https://github.com/savio777">Acessar perfil</a>
            </li>
          )))}

        </ul>
      </main>
    </div>
  )
}

export default App
