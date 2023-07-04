import React from 'react'

function MainPage() {
  const [password, setPassword] = React.useState("")

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  function chooseRandomLetter() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber]
  }

  function generatePassword() {
    setPassword(() => {
      let password = ""
      for (let i = 0; i < 15; i++) {
        password += chooseRandomLetter(characters)
      }
      return password
    })
  }
  return (
    <main>
      <header>
        <h1>Generate a</h1>
        <h1><span>random password</span></h1>
        <h4>Never use an insecure password again</h4>
        <button onClick={generatePassword}>Generate passwords</button>
      </header>
      <section>
        <div>
          <p>{password}</p>
        </div>
      </section>
    </main>
  )
}

export default MainPage