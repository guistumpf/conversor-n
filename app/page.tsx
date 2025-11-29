'use client'

import { useState } from "react"

export default function Conv(){

const [input,setinput] = useState<any>("")
const number = parseFloat(input)

let valor =  (number - 32) * 5/9
  
let real: any = valor.toFixed(1) + "°C"

  if(input === ""){
  valor = NaN
  real = ""
  }


console.log(valor)
  return(
    
    <section className="caixaconv">
      <h1 className="conv">Conversor de temperaturas</h1>
      <p className="sub">Converta °F para °C</p>
      <input type="number" onChange={(e) => {
        setinput(e.target.value) 
      }} className="val" placeholder="°F" />
      <p className="rel">Celsius: {real}</p>
    </section>
  )
}