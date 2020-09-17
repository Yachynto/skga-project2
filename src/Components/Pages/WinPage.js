import React from 'react' 
import Pokewin from '../../Images/pokewin.gif'

import { Link } from 'react-router-dom'

class WinPage extends React.Component {
  render () {
    return (
      <section>
        <div>
          <h1 className="title is-1 has-text-centered has-text-black">
            Well Done! You did it!
          </h1>
          <figure className="image-is-128x128 is-center">
            <img src={Pokewin} alt="pokewin"/>
          </figure>
        </div>
        <div>
          <Link to="/GamePage" className="button is-medium is-center is-link has-border-white">Play Again
          </Link>

          <Link to="/" className="button is-medium is-center is-link has-border-white">Back to the Homepage
          </Link>
        </div>
      </section>
    )
  }
}
export default WinPage