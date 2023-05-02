import { Component } from 'react'
import './movies-add-form.css'

class MoviesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: ''
    }
  }

  changeHandlerInput = (e) => {
   this.setState({
    [e.target.name]: e.target.value
   })
  }

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({name: this.state.name, viewers: this.state.views})
    this.setState({
      name: '',
      views: '',
    })
  }

  render() {
    const {name, views} = this.state
    const {addForm} = this.props
    return (
      <div className='movies-add-form'>
          <h3>Yangi Kino Qo'shish</h3>
          <form className="add-form d-flex" onSubmit={this.addFormHandler}>
              <input value={name} name='name' onChange={this.changeHandlerInput} type="text" className='form-control new-post-label' placeholder='Qanday kino ?' />
              <input value={views} name='views' onChange={this.changeHandlerInput} type="number" className='form-control new-post-label' placeholder='Necha marotaba korilgan' />
              <button type='submit' className='btn btn-outline-dark'>
                  Qo'shish
              </button>
          </form>
      </div>
    )
  }
}

// const MoviesAddForm = () => {
//   return (
//     <div className='movies-add-form'>
//         <h3>Yangi Kino Qo'shish</h3>
//         <form className="add-form d-flex">
//             <input type="text" className='form-control new-post-label' placeholder='Qanday kino ?' />
//             <input type="number" className='form-control new-post-label' placeholder='Necha marotaba korilgan' />
//             <button type='submit' className='btn btn-outline-dark'>
//                 Qo'shish
//             </button>
//         </form>
//     </div>
//   )
// }

export default MoviesAddForm
