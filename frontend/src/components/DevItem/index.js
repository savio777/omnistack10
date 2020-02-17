import React from 'react'

import './styles.css'

function DevItem({ user }) {
  return (
    <li className="dev-item">
      <header>
        <img src={user.avatar_url} alt={user.name} />
        <div className="user-info">
          <strong>{user.name}</strong>
          <span>
            {user.techs[0]}
            {(user.techs.length > 2) && user.techs.map((tech, index) => (
              <>
                {(index !== 0) && (', ' + tech)}
              </>
            ))}
          </span>
        </div>
      </header>
      <p>{user.bio}</p>
      <a href={`https://github.com/${user.github_user}`}>Acessar perfil</a>
    </li>
  )
}

export default DevItem
