const{app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 600,
        minWidth: 800,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})
