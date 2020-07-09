import React from "react"
import CharacterItem from "./characterItem"
import Spinner from "../ui/spinner"
export const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
  return <div></div>
}
export default CharacterGrid
