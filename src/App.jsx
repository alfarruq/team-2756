
import './App.css'

function App() {

  let ism = 'Alijon'

  let vaqt = new Date()

  let num = Math.floor(Math.random() * 100)

  let isLight = (vaqt.getHours() > 7 && vaqt.getHours() < 19) ? true : false

  return (
    <div style={{ backgroundColor: isLight ? 'white' : 'black', color: isLight ? 'black' : 'white' }} className='wrapper' >
      <h3>Hello my name is <span className='ism' > {ism}</span> </h3>
      <h3>This day: {vaqt.getDate()}.{vaqt.getMonth() + 1}.{vaqt.getFullYear()} </h3>
      <hr />

      <h1 className={num > 50 ? 'big' : 'small'} > {num} </h1>
    </div>
  )
}

export default App
