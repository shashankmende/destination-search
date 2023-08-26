// Write your code here

import './index.css'

const searchInput = event => {
  console.log(event.target.value)
}

const DestinationItem = props1 => {
  const {user} = props1
  const {name, imgUrl} = user
  return (
    <li className="list-item-container">
      <img src={imgUrl} className="imgCss" alt="dest" />
      <p>{name}</p>
    </li>
  )
}

const DestinationSearch = props => {
  const {destinationsList} = props
  console.log(destinationsList)
  return (
    <div className="bg_container">
      <h1 className="heading">Destination Search</h1>
      <div className="search_container">
        <input
          type="search"
          placeholder="Search"
          className="inputelement"
          onChange={searchInput}
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="icon"
        />
      </div>
      <ul className="list-items-container">
        {destinationsList.map(eachUser => (
          <DestinationItem key={eachUser.id} user={eachUser} />
        ))}
      </ul>
    </div>
  )
}
export default DestinationSearch
