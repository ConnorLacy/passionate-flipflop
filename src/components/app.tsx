import React from 'react'

const sayHello = () => console.log('Hello!')

export const App = () => {
  return (
    <div>
      <h1 onClick={sayHello} onKeyDown={sayHello}>
        It's aliveeee!
      </h1>
    </div>
  )
}
