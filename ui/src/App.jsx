import reactLogo from './assets/react.svg'
import telegramLogo from './assets/telegram.svg'
import fastapiLogo from './assets/fastapi.svg'
import telegrafLogo from './assets/telegraf.png'
import kyLogo from './assets/ky.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ky from 'ky'
import { useEffect, useState } from 'react'

function App() {

  const [alertMessage, setAlertMessage] = useState("")
  
  useEffect(() => {
    async function fetchSetData(endpoint = '/') {
      const data = await ky.get(`http://127.0.0.1:8000${endpoint}`).json()

      setAlertMessage(data['alert_message'])
    }

    fetchSetData()
  }, [])

  const onShowTelegramDialog = () => {
    window.Telegram.WebApp.showAlert(alertMessage);
    console.log(alertMessage)
  };

  return (
    <>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://core.telegram.org/bots/webapps" target="_blank" rel="noreferrer">
          <img src={telegramLogo} className="logo telegram" alt="Telegram logo" />
        </a>
        <a href="https://telegraf.js.org/" target="_blank" rel="noreferrer">
          <img src={telegrafLogo} className="logo telegraf" alt="Telegraf logo" />
        </a>
        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
          <img src={fastapiLogo} className="logo fastapi" alt="FastAPI logo" />
        </a>
        <a href="https://www.npmjs.com/package/ky" target="_blank" rel="noreferrer">
          <img src={kyLogo} className="logo ky" alt="ky logo" />
        </a>
      </div>
      <h1>Telegram Mini App Template Bot</h1>
      <div className="card">
        <button onClick={onShowTelegramDialog}>
          Show Telegram Dialog
        </button>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
