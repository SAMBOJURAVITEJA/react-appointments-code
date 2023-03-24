import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {nameInput: '', dateInput: '', listContainer: []}

  likedImageChanging = id => {
    this.setState(prevState => ({
      listContainer: prevState.listContainer.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  submitting = event => {
    event.preventDefault()
    const {nameInput, dateInput} = this.state

    const newData = {
      nameInput,
      dateInput,
      id: v4(),
      date: new Date(),
      isLiked: false,
    }

    this.setState(prevState => ({
      listContainer: [...prevState.listContainer, newData],
      nameInput: '',
      dateInput: '',
    }))
  }

  textChange = event => {
    this.setState({nameInput: event.target.value})
  }

  dateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {listContainer, nameInput, dateInput} = this.state

    return (
      <div className="bg-container">
        <form className="card-container" onSubmit={this.submitting}>
          <div className="content-container">
            <h1>Add Appointment</h1>
            <input value={nameInput} onChange={this.textChange} type="text" />
            <input value={dateInput} onChange={this.dateChange} type="date" />
            <button className="button1" type="submit">
              Add
            </button>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </form>
        <hr className="horizontal-line" />
        <ul className="list-container">
          <li className="first-item">
            <h1>Appointments</h1>
            <button type="button">Starred</button>
          </li>

          {listContainer.map(each => (
            <AppointmentItem
              likedImageChanging={this.likedImageChanging}
              each={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
