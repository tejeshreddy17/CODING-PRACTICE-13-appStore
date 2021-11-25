// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, onChangingTab, isSelected} = props
  const {tabId, displayText} = tab
  const onClickingTab = () => {
    onChangingTab(tabId)
  }
  const activeTab = isSelected ? 'selected-button' : ''
  return (
    <li>
      <button
        onClick={onClickingTab}
        className={`button-style ${activeTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
