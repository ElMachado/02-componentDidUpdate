import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './scss/styles.scss'

const images = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      image : {
        alt: '',
        src: ''
      }
    }
  }

  componentDidMount() {
    console.warn('1. componentDidMount')
    // fetch images
    images.push({
      url: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?cs=srgb&dl=adorable-animal-breed-356378.jpg&fm=jpg',
      alt: 'dog'
    })
    images.push({
      url: 'https://images.pexels.com/photos/2831538/pexels-photo-2831538.jpeg?cs=srgb&dl=animal-animal-photography-bokeh-2831538.jpg&fm=jpg',
      alt: 'cat'
    })
    images.push({
      url: 'https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?cs=srgb&dl=adorable-animal-animal-photography-2883510.jpg&fm=jpg',
      alt: 'rabbit'
    })

    this.setState({
      images,
      image: {
        src: images[1].url,
        alt: images[1].alt
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.warn('2. componentDidUpdate')
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    if (prevState.image.alt === 'cat') {
      const img = document.querySelector('img')
      img.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(300px)' }
      ], {
        // timing options
        duration: 2000,
        iterations: 2
      });
    }
  }

  handleImage = (e) => {
    e.preventDefault()
    const animal = e.target.innerHTML
    let state = { }
    if (animal.toLowerCase() === 'cat') {
      state = {
        ...this.state,
        image: {
          src: images[1].url,
          alt: images[1].alt
        }
      }
      this.setState(state)
    }
    if (animal.toLowerCase() === 'dog') {
      state = {
        ...this.state,
        image: {
          src: images[0].url,
          alt: images[0].alt
        }
      }
      this.setState(state)
    }
    if (animal.toLowerCase() === 'rabbit') {
      state = {
        ...this.state,
        image: {
          src: images[2].url,
          alt: images[2].alt
        }
      }
      this.setState(state)
    }
  }

  render () {
    console.count('render')
    const { image } = this.state
    const { src, alt } = image

    return (<div>
      <button onClick={this.handleImage} className="btn">Cat</button>
      <button onClick={this.handleImage} className="btn">Dog</button>
      <button onClick={this.handleImage} className="btn">Rabbit</button>

      <section className="gallery">
        <img src={src} alt={alt} className="gallery__img" />
      </section>
    </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
