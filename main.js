const {app, BroserWindow, BrowserWindow} = require('electron')
const { truncate } = require('fs')

function createWindow(){
  const ventana = new BrowserWindow({
    width : 380,
    height : 300,
    webPreferences: {
      nodeIntegration: true
    }

  })
  ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)