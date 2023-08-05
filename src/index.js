const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'production'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    icon : 'app.ico',
  });

  //Implement Menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  //Maximize screen
  mainWindow.maximize()

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};

const createAboutUs = () => {
  // Create the browser window.
  const aboutWindow = new BrowserWindow({
   title : 'About Us',
    width: 800,
    height: 600,
    icon : 'app.ico',

  });


  const aboutMenu = Menu.buildFromTemplate(menuEmpty);
  aboutWindow.setMenu(aboutMenu)

  // and load the index.html of the app.
  aboutWindow.loadFile(path.join(__dirname, 'aboutus.html'));

}


app.on('ready', createWindow);

// Menu template
const menu = [
   {
      role: 'window',
      submenu: [
         {
            role: 'minimize'
         },
         {
            role: 'close'
         }
      ]
   },

   {
    label: 'Edit',
    submenu: [
       {
          role: 'cut'
       },
       {
          role: 'copy'
       },
       {
          role: 'paste'
       }
    ]
   },
 
   {
    label: 'View',
    submenu: [
       {
          role: 'reload'
       },
       {
          type: 'separator'
       },
       {
          role: 'resetzoom'
       },
       {
          role: 'zoomin'
       },
       {
          role: 'zoomout'
       },
       {
          type: 'separator'
       },
       {
          role: 'togglefullscreen'
       }
    ]
   },

   {
    role: 'help',
    submenu: [
       {
          label: 'About Us',
          click : createAboutUs
       }
    ]
  }
]

const menuEmpty = [
  {
    role: 'window',
    submenu: [
       {
          role: 'minimize'
       },
       {
          role: 'close'
       }
    ]
  },
]


// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

