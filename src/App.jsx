import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrafficLight from './TrafficLight';

function App() {
  const [light, setLight] = useState('red')

  //Functions to control the light
  const advanceLight = () => {
        if (light === 'red') {
            setLight('amber');
        } else if (light === 'amber') {
            setLight('green');
        } else {
            setLight('red');
        }
    };


  return (
    <>
      <TrafficLight color="red" isActive={light === 'red'} />
      <TrafficLight color="amber" isActive={light === 'amber'} />
      <TrafficLight color="green" isActive={light === 'green'} />
      <button onClick={advanceLight}>Advance</button>
    </>
  )
}

export default App
