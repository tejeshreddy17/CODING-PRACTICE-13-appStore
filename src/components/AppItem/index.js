// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appId, appName, imageUrl, category} = app
  return (
    <li className="app-style">
      <img className="image-style" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
