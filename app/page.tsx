'use client'

import { useState } from "react"

export default function Conv(){

const [input,setinput] = useState<any>(0)

const number = parseFloat(input)

let valor =  (input - 32) * 5/9

if(input === ""){
  valor = NaN
}

console.log(valor)
  return(
    <section>
      <h1>Converter</h1>
      <input type="number" onChange={(e) => {
setinput(e.target.value)
console.log(e.target.value)
      }}/>
      <p>C:{valor.toFixed(1)}</p>
    </section>
  )
}