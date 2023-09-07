const{app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        icon: 'src/assets/img/5533582.png',
        width: 226,
        height: 249,
        autoHideMenuBar: true,
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


