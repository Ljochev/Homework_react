import { useState } from 'react'
import './App.css'
import AirbnbCard from './components/AirbnbCard'
import Image from './components/Image'
import JonchereyFrance from './assets/JonchereyFrance.jpg'
import FlorenceItaly from './assets/FlorenceItaly.jpg'
import JablonneChechia from './assets/JablonneChechia.jpg'
import RiedhausenGermany from './assets/RiedhausenGermany.jpg'

function App() {
 const Joncherey = {
  location: "Joncherey, France", 
  rating: "5.0", 
  distance: "1,291 kilometers away", 
  dates: "Apr 14 – 19Apr 14 – 19", 
  price: "$284 night"
 }
 const Florence = {
  location: "Florence, Italy", 
  rating: "4.9", 
  distance: "854 kilometers away", 
  dates: "Jul 11 – 16Jul 11 – 16", 
  price: "$323 night"}
 const Riedhausen = {
  location: "Riedhausen, Germany", 
  rating: "4.95", 
  distance: "1,149 kilometers away", 
  dates: "Apr 14 – 19Apr 14 – 19", 
  price: "$85 night"
 }
 const Jablonne = {
  location: "Jablonné v Podještědí, Czechia", 
  rating: "4.89", 
  distance: "1,103 kilometers away", 
  dates: "Apr 14 – 19Apr 14 – 19", 
  price: "$101 night"
 }
 console.log("This is the original object file", Joncherey)

  return (
    <>
    <AirbnbCard myData={Joncherey} theImage={JonchereyFrance}/>
    <AirbnbCard myData={Florence} theImage={FlorenceItaly}/>
    <AirbnbCard myData={Riedhausen} theImage={RiedhausenGermany}/>
    <AirbnbCard myData={Jablonne} theImage={JablonneChechia}/>
    </>
  )
}

export default App
