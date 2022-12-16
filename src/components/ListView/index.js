import './index.css'

const ListView = props => {
  const {eachItems, deleteList, key} = props
  const {title, id, timeAccessed, logoUrl, domainUrl} = eachItems
  const deleteHistory = () => {
    deleteList(id)
  }
  return (
    <li className="list-container" id={key}>
      <p className="time">{timeAccessed}</p>

      <div className="history-content">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="heading">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="delete-logo"
        onClick={deleteHistory}
        type="button"
        testid='delete'
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          id="delete"
        />
      </button>
    </li>
  )
}

export default ListView
