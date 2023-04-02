import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Button from "@mui/material/Button"
import styled from 'styled-components'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

const Title = styled.h1`
color: orange;
background: grey;
text-decoration: underline;
font-style: ${props => props.italic? "italic" : "normal"}
`

const StyledLink = styled(Link)`
color: red;
font-weight: 700;
`

function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
        <header>
          <Title italic={true}>Welcome to Monty's Mineral SPA</Title>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <StyledLink to="/about">About Us</StyledLink>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
            </ul>
          </div>
        </header>

        <Button variant= "containerd" color="error"

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;