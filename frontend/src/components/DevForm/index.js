import React, { useState, useEffect } from 'react'

const DevForm = (props) => {

  const [githubUser, setGithubUser] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

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

  async function createUser(e) {
    e.preventDefault()

    const body = {
      github_user: githubUser,
      techs: techs,
      latitude: latitude,
      longitude: longitude
    }

    setGithubUser('')
    setTechs('')

    props.createUser(body)
  }

  return (
    <>
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
    </>
  )
}

export default DevForm
