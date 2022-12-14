import {Component} from 'react'
import ListView from '../ListView/index'
import './index.css'

class HistoryList extends Component {
  state = {searchInput: '', historyItems: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyItems: initialHistoryList})
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteList = id => {
    const {historyItems} = this.state
    // const {initialHistoryList} = this.props
    const updateHistory = historyItems.filter(each => each.id !== id)
    this.setState({historyItems: updateHistory})
    console.log(`clicked: ${id}`)
  }

  render() {
    // const {initialHistoryList} = this.props
    const {searchInput, historyItems} = this.state

    const filterdata = historyItems.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />
            <input
              type="search"
              className="input"
              placeholder="search history"
              onChange={this.changeInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="history-container">
          {filterdata.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            <ul className="history-list-container">
              {filterdata === [] ? (
                <p className="no-history">There is no history to show</p>
              ) : (
                filterdata.map(eachItem => (
                  <ListView
                    eachItems={eachItem}
                    key={eachItem.id}
                    deleteList={this.deleteList}
                  />
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryList
