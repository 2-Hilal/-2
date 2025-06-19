const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;

// إنشاء النافذة الرئيسية
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        icon: path.join(__dirname, 'assets', 'icon.png'), // إضافة أيقونة لاحقاً
        title: '🖨️ نظام إدارة الطباعة',
        show: false // لا تظهر النافذة حتى تكون جاهزة
    });

    // تحميل الملف الرئيسي
    mainWindow.loadFile('index.html');

    // إظهار النافذة عند الجاهزية
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        
        // فتح أدوات المطور في وضع التطوير
        if (process.env.NODE_ENV === 'development') {
            mainWindow.webContents.openDevTools();
        }
    });

    // إغلاق التطبيق عند إغلاق النافذة
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// تشغيل التطبيق
app.whenReady().then(createWindow);

// إغلاق التطبيق على macOS
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

// معالجة قراءة الملفات
ipcMain.handle('read-file', async (event, filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return { success: true, data: JSON.parse(data) };
    } catch (error) {
        console.error('Error reading file:', error);
        return { success: false, error: error.message };
    }
});

// معالجة كتابة الملفات
ipcMain.handle('write-file', async (event, filePath, data) => {
    try {
        // إنشاء المجلد إذا لم يكن موجوداً
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });
        
        // كتابة البيانات
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        return { success: true };
    } catch (error) {
        console.error('Error writing file:', error);
        return { success: false, error: error.message };
    }
});

// معالجة فحص وجود الملف
ipcMain.handle('file-exists', async (event, filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
});

// معالجة اختيار مجلد
ipcMain.handle('select-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory'],
        title: 'اختر المجلد المشترك'
    });
    
    if (!result.canceled && result.filePaths.length > 0) {
        return result.filePaths[0];
    }
    return null;
});

// معالجة اختيار ملف للاستيراد
ipcMain.handle('select-import-file', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters: [
            { name: 'JSON Files', extensions: ['json'] }
        ],
        title: 'اختر ملف البيانات للاستيراد'
    });
    
    if (!result.canceled && result.filePaths.length > 0) {
        return result.filePaths[0];
    }
    return null;
});

// معالجة حفظ ملف التصدير
ipcMain.handle('save-export-file', async (event, data) => {
    const result = await dialog.showSaveDialog(mainWindow, {
        filters: [
            { name: 'JSON Files', extensions: ['json'] }
        ],
        defaultPath: `printing-data-${new Date().toISOString().split('T')[0]}.json`,
        title: 'حفظ ملف البيانات'
    });
    
    if (!result.canceled) {
        try {
            await fs.writeFile(result.filePath, JSON.stringify(data, null, 2), 'utf8');
            return { success: true, filePath: result.filePath };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    return { success: false, error: 'تم إلغاء العملية' };
});

// معالجة الحصول على مسار المجلد الافتراضي
ipcMain.handle('get-default-shared-path', () => {
    const os = require('os');
    const platform = process.platform;
    
    if (platform === 'win32') {
        return 'D:\\SharedPrinting\\';
    } else if (platform === 'darwin') {
        return path.join(os.homedir(), 'SharedPrinting');
    } else {
        return path.join(os.homedir(), 'SharedPrinting');
    }
});

// إعداد القائمة
const { Menu } = require('electron');

const template = [
    {
        label: 'ملف',
        submenu: [
            {
                label: 'استيراد البيانات',
                accelerator: 'CmdOrCtrl+O',
                click: () => {
                    mainWindow.webContents.send('menu-import');
                }
            },
            {
                label: 'تصدير البيانات',
                accelerator: 'CmdOrCtrl+S',
                click: () => {
                    mainWindow.webContents.send('menu-export');
                }
            },
            { type: 'separator' },
            {
                label: 'إعادة تحميل',
                accelerator: 'CmdOrCtrl+R',
                click: () => {
                    mainWindow.reload();
                }
            },
            { type: 'separator' },
            {
                label: 'خروج',
                accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                click: () => {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'عرض',
        submenu: [
            {
                label: 'تكبير',
                accelerator: 'CmdOrCtrl+Plus',
                click: () => {
                    const webContents = mainWindow.webContents;
                    webContents.setZoomLevel(webContents.getZoomLevel() + 0.5);
                }
            },
            {
                label: 'تصغير',
                accelerator: 'CmdOrCtrl+-',
                click: () => {
                    const webContents = mainWindow.webContents;
                    webContents.setZoomLevel(webContents.getZoomLevel() - 0.5);
                }
            },
            {
                label: 'الحجم الطبيعي',
                accelerator: 'CmdOrCtrl+0',
                click: () => {
                    mainWindow.webContents.setZoomLevel(0);
                }
            },
            { type: 'separator' },
            {
                label: 'ملء الشاشة',
                accelerator: 'F11',
                click: () => {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }
        ]
    },
    {
        label: 'مساعدة',
        submenu: [
            {
                label: 'حول التطبيق',
                click: () => {
                    dialog.showMessageBox(mainWindow, {
                        type: 'info',
                        title: 'حول التطبيق',
                        message: 'نظام إدارة الطباعة',
                        detail: 'تطبيق سطح المكتب لإدارة أعمال الطباعة\nالإصدار 1.0.0'
                    });
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
