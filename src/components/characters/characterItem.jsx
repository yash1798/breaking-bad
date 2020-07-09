import React from "react"

export const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>Actor Name: {item.potrayed}</li>
            <li>Nickname: {item.nickname}</li>
            <li>Status: {item.status}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default CharacterItem
