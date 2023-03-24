import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {each, likedImageChanging} = props
  const {nameInput, isLiked, dateInput, id} = each

  const imaging = () => {
    likedImageChanging(id)
  }

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const result = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

  return (
    <li>
      <div className="list-content-container">
        <p>{nameInput}</p>
        <p>{result}</p>
      </div>
      <button
        onClick={imaging}
        type="button"
        data-testid="star"
        className="list-image-container"
      >
        <img src={imgUrl} alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
