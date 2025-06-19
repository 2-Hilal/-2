const { ipcRenderer } = require('electron');
const path = require('path');

// Global Variables
let jobs = [];
let printers = [];
let currentFilter = 'all';
let jobIdCounter = 1;
let autoSyncInterval;
let sharedFolderPath = '';
let databaseFileName = 'printing-database.json';

// Initialize System
document.addEventListener('DOMContentLoaded', async function() {
    showLoading('جاري تحميل النظام...');
    
    try {
        // Get default shared folder path
        sharedFolderPath = await ipcRenderer.invoke('get-default-shared-path');
        document.getElementById('sharedFolderPath').value = sharedFolderPath;
        
        // Load data
        await loadData();
        updateStats();
        displayJobs();
        displayPrinters();
        
        // Set today's date as default
        document.getElementById('receiptDate').value = new Date().toISOString().split('T')[0];
        
        // Start auto-sync
        startAutoSync();
        
        hideLoading();
        showToast('تم تحميل النظام بنجاح', 'success');
    } catch (error) {
        hideLoading();
        console.error('Error initializing:', error);
        showToast('خطأ في تحميل النظام', 'error');
    }
});

// Loading Functions
function showLoading(text = 'جاري التحميل...') {
    const overlay = document.getElementById('loadingOverlay');
    const loadingText = overlay.querySelector('.loading-text');
    loadingText.textContent = text;
    overlay.classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Data Management
async function loadData() {
    try {
        const filePath = path.join(sharedFolderPath, databaseFileName);
        const fileExists = await ipcRenderer.invoke('file-exists', filePath);
        
        if (fileExists) {
            const result = await ipcRenderer.invoke('read-file', filePath);
            if (result.success) {
                const data = result.data;
                jobs = data.jobs || [];
                printers = data.printers || [];
                jobIdCounter = data.jobIdCounter || 1;
                
                updateSyncStatus('تم التحميل');
            } else {
                console.error('Error reading file:', result.error);
                loadDefaultData();
            }
        } else {
            loadDefaultData();
            await saveData(); // Create initial file
        }
    } catch (error) {
        console.error('Error loading data:', error);
        loadDefaultData();
    }
}

function loadDefaultData() {
    jobs = [];
    printers = [
        { id: 1, name: 'أحمد محمد', password: '1234' },
        { id: 2, name: 'سارة أحمد', password: '5678' }
    ];
    jobIdCounter = 1;
}

async function saveData() {
    try {
        const data = {
            jobs: jobs,
            printers: printers,
            jobIdCounter: jobIdCounter,
            lastSync: new Date().toISOString(),
            version: '1.0'
        };
        
        const filePath = path.join(sharedFolderPath, databaseFileName);
        const result = await ipcRenderer.invoke('write-file', filePath, data);
        
        if (result.success) {
            updateSyncStatus('محفوظ');
            return true;
        } else {
            console.error('Error saving file:', result.error);
            showToast('خطأ في حفظ البيانات: ' + result.error, 'error');
            return false;
        }
    } catch (error) {
        console.error('Error saving data:', error);
        showToast('خطأ في حفظ البيانات', 'error');
        return false;
    }
}

function updateSyncStatus(message) {
    const syncStatus = document.getElementById('syncStatus');
    syncStatus.textContent = 'محفوظ تلقائ<|im_start|> - ' + new Date().toLocaleTimeString('ar-SA');
}

// File Operations
async function selectSharedFolder() {
    try {
        const folderPath = await ipcRenderer.invoke('select-folder');
        if (folderPath) {
            sharedFolderPath = folderPath;
            document.getElementById('sharedFolderPath').value = folderPath;
            showToast('تم اختيار المجلد المشترك', 'success');
            
            // Reload data from new location
            await loadData();
            updateStats();
            displayJobs();
            displayPrinters();
        }
    } catch (error) {
        console.error('Error selecting folder:', error);
        showToast('خطأ في اختيار المجلد', 'error');
    }
}

async function importFromFile() {
    try {
        const filePath = await ipcRenderer.invoke('select-import-file');
        if (filePath) {
            showLoading('جاري استيراد البيانات...');
            
            const result = await ipcRenderer.invoke('read-file', filePath);
            if (result.success) {
                const data = result.data;
                
                if (data.jobs && Array.isArray(data.jobs)) {
                    jobs = data.jobs;
                }
                
                if (data.printers && Array.isArray(data.printers)) {
                    printers = data.printers;
                }
                
                if (data.jobIdCounter) {
                    jobIdCounter = data.jobIdCounter;
                }
                
                await saveData();
                updateStats();
                displayJobs();
                displayPrinters();
                
                hideLoading();
                showToast('تم استيراد البيانات بنجاح', 'success');
            } else {
                hideLoading();
                showToast('خطأ في قراءة الملف: ' + result.error, 'error');
            }
        }
    } catch (error) {
        hideLoading();
        console.error('Error importing file:', error);
        showToast('خطأ في استيراد البيانات', 'error');
    }
}

async function exportToFile() {
    try {
        showLoading('جاري تصدير البيانات...');
        
        const data = {
            jobs: jobs,
            printers: printers,
            jobIdCounter: jobIdCounter,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const result = await ipcRenderer.invoke('save-export-file', data);
        
        hideLoading();
        
        if (result.success) {
            showToast('تم تصدير البيانات بنجاح', 'success');
        } else {
            showToast('خطأ في تصدير البيانات: ' + result.error, 'error');
        }
    } catch (error) {
        hideLoading();
        console.error('Error exporting file:', error);
        showToast('خطأ في تصدير البيانات', 'error');
    }
}

// تم حذف وظيفة فرض التزامن لأن النظام يحفظ تلقائ<|im_start|>

// Auto-sync Functions
function startAutoSync() {
    if (autoSyncInterval) {
        clearInterval(autoSyncInterval);
    }
    
    autoSyncInterval = setInterval(async () => {
        try {
            await saveData();
        } catch (error) {
            console.error('Auto-sync error:', error);
        }
    }, 30000); // Every 30 seconds
}

function stopAutoSync() {
    if (autoSyncInterval) {
        clearInterval(autoSyncInterval);
        autoSyncInterval = null;
    }
}

// Tab Management
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.remove('hidden');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Job Management
async function addJob() {
    const receiptDate = document.getElementById('receiptDate').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const workDetails = document.getElementById('workDetails').value;
    const isUrgent = document.getElementById('isUrgent').checked;
    
    if (!receiptDate || !workDetails) {
        showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    const newJob = {
        id: jobIdCounter++,
        receiptDate: receiptDate,
        deliveryDate: deliveryDate,
        workDetails: workDetails,
        isUrgent: isUrgent,
        status: 'pending',
        quantity: 0,
        printedQuantity: 0,
        printerName: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    jobs.unshift(newJob);
    
    if (await saveData()) {
        clearForm();
        updateStats();
        displayJobs();
        showToast('تم إضافة العمل بنجاح', 'success');
        showTab('jobs');
    }
}

function clearForm() {
    document.getElementById('addJobForm').reset();
    document.getElementById('receiptDate').value = new Date().toISOString().split('T')[0];
}

async function updateJobStatus(jobId, newStatus) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = newStatus;
        job.updatedAt = new Date().toISOString();
        
        if (await saveData()) {
            updateStats();
            displayJobs();
            showToast('تم تحديث حالة العمل', 'success');
        }
    }
}

async function updateJobQuantity(jobId, quantity, printerName) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.printedQuantity = parseInt(quantity) || 0;
        job.printerName = printerName;
        job.status = quantity > 0 ? 'in-progress' : 'pending';
        job.updatedAt = new Date().toISOString();
        
        if (await saveData()) {
            updateStats();
            displayJobs();
            showToast('تم تحديث الكمية المطبوعة', 'success');
        }
    }
}

async function completeJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = 'completed';
        job.completedAt = new Date().toISOString();
        job.updatedAt = new Date().toISOString();

        if (await saveData()) {
            updateStats();
            displayJobs();
            showToast('تم ترحيل العمل', 'success');
        }
    }
}

// Display Functions
function displayJobs() {
    const jobsGrid = document.getElementById('jobsGrid');
    let filteredJobs = jobs;

    // Apply filter
    if (currentFilter !== 'all') {
        filteredJobs = jobs.filter(job => job.status === currentFilter);
    }

    // Apply search
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredJobs = filteredJobs.filter(job =>
            job.workDetails.toLowerCase().includes(searchTerm) ||
            job.printerName.toLowerCase().includes(searchTerm) ||
            job.id.toString().includes(searchTerm)
        );
    }

    // Sort: urgent first, then by date
    filteredJobs.sort((a, b) => {
        if (a.isUrgent && !b.isUrgent) return -1;
        if (!a.isUrgent && b.isUrgent) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    jobsGrid.innerHTML = '';

    if (filteredJobs.length === 0) {
        jobsGrid.innerHTML = '<div style="text-align: center; color: #6b7280; padding: 40px; font-size: 18px;">لا توجد أعمال</div>';
        return;
    }

    filteredJobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsGrid.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = `job-card ${job.status}${job.isUrgent ? ' urgent' : ''}`;

    const statusText = {
        'pending': 'في الانتظار',
        'in-progress': 'قيد الطباعة',
        'printed': 'تم الطباعة',
        'completed': 'مكتمل'
    };

    const statusColor = {
        'pending': '#6b7280',
        'in-progress': '#f59e0b',
        'printed': '#3b82f6',
        'completed': '#10b981'
    };

    card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="background: ${statusColor[job.status]}; color: white; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                ${statusText[job.status]}
            </div>
            <div style="font-weight: bold; color: #1e293b; font-size: 20px;">
                #${job.id}
            </div>
        </div>

        ${job.isUrgent ? '<div style="color: #ef4444; font-weight: bold; margin-bottom: 8px; font-size: 16px;">🚨 عاجل</div>' : ''}

        <div style="margin-bottom: 12px;">
            <strong>تفاصيل العمل:</strong><br>
            <div style="background: #f8fafc; padding: 10px; border-radius: 8px; margin-top: 6px; border: 1px solid #e2e8f0;">
                ${job.workDetails}
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; font-size: 14px;">
            <div><strong>تاريخ الاستلام:</strong><br>${job.receiptDate}</div>
            <div><strong>تاريخ التسليم:</strong><br>${job.deliveryDate || 'غير محدد'}</div>
        </div>

        ${job.printerName ? `<div style="margin-bottom: 8px; font-size: 14px;"><strong>الطباع:</strong> ${job.printerName}</div>` : ''}
        ${job.printedQuantity > 0 ? `<div style="margin-bottom: 8px; font-size: 14px;"><strong>الكمية المطبوعة:</strong> ${job.printedQuantity}</div>` : ''}

        <div style="display: flex; gap: 8px; margin-top: 16px;">
            ${job.status !== 'completed' ? `
                <button class="btn btn-primary" style="flex: 1; padding: 10px 14px; font-size: 13px;" onclick="showUpdateModal(${job.id})">
                    📝 تحديث
                </button>
                <button class="btn btn-success" style="flex: 1; padding: 10px 14px; font-size: 13px;" onclick="completeJob(${job.id})">
                    ✅ ترحيل
                </button>
            ` : ''}
        </div>
    `;

    return card;
}

// Statistics
function updateStats() {
    const total = jobs.length;
    const pending = jobs.filter(j => j.status === 'pending').length;
    const inProgress = jobs.filter(j => j.status === 'in-progress').length;
    const printed = jobs.filter(j => j.status === 'printed').length;
    const completed = jobs.filter(j => j.status === 'completed').length;

    document.getElementById('totalJobs').textContent = total;
    document.getElementById('pendingJobs').textContent = pending;
    document.getElementById('inProgressJobs').textContent = inProgress;
    document.getElementById('printedJobs').textContent = printed;
    document.getElementById('completedJobs').textContent = completed;
}

// Filter Functions
function filterJobs(status) {
    currentFilter = status;

    // Update active stat card
    document.querySelectorAll('.stat-card').forEach(card => {
        card.classList.remove('active');
    });

    if (status === 'all') {
        document.getElementById('statAll').classList.add('active');
    } else if (status === 'pending') {
        document.getElementById('statPending').classList.add('active');
    } else if (status === 'in-progress') {
        document.getElementById('statInProgress').classList.add('active');
    } else if (status === 'printed') {
        document.getElementById('statPrinted').classList.add('active');
    } else if (status === 'completed') {
        document.getElementById('statCompleted').classList.add('active');
    }

    displayJobs();
}

function searchJobs() {
    displayJobs();
}

// Printer Management
async function addPrinter() {
    const name = document.getElementById('printerName').value.trim();
    const password = document.getElementById('printerPassword').value.trim();

    if (!name || !password) {
        showToast('يرجى ملء جميع الحقول', 'error');
        return;
    }

    const newPrinter = {
        id: Date.now(),
        name: name,
        password: password
    };

    printers.push(newPrinter);

    if (await saveData()) {
        document.getElementById('printerName').value = '';
        document.getElementById('printerPassword').value = '';
        displayPrinters();
        showToast('تم إضافة الطباع بنجاح', 'success');
    }
}

function displayPrinters() {
    const printersList = document.getElementById('printersList');

    if (printers.length === 0) {
        printersList.innerHTML = '<div style="text-align: center; color: #6b7280; padding: 20px; font-size: 16px;">لا يوجد طباعين</div>';
        return;
    }

    printersList.innerHTML = printers.map(printer => `
        <div style="background: white; border-radius: 12px; padding: 18px; margin-bottom: 12px; border: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div>
                <div style="font-weight: 600; color: #1e293b; font-size: 16px;">${printer.name}</div>
                <div style="color: #6b7280; font-size: 14px; margin-top: 4px;">كلمة المرور: ${'*'.repeat(printer.password.length)}</div>
            </div>
            <button class="btn btn-danger" style="padding: 8px 16px; font-size: 12px;" onclick="removePrinter(${printer.id})">
                🗑️ حذف
            </button>
        </div>
    `).join('');
}

async function removePrinter(printerId) {
    if (confirm('هل أنت متأكد من حذف هذا الطباع؟')) {
        printers = printers.filter(p => p.id !== printerId);

        if (await saveData()) {
            displayPrinters();
            showToast('تم حذف الطباع', 'success');
        }
    }
}

// Settings
async function saveSettings() {
    const autoSync = document.getElementById('autoSync').checked;
    const newSharedPath = document.getElementById('sharedFolderPath').value;
    const newDatabaseName = document.getElementById('databaseFileName').value;

    // Update settings
    sharedFolderPath = newSharedPath;
    databaseFileName = newDatabaseName;

    if (autoSync) {
        startAutoSync();
    } else {
        stopAutoSync();
    }

    // Save data to new location if path changed
    await saveData();

    showToast('تم حفظ الإعدادات', 'success');
}

async function resetData() {
    if (confirm('هل أنت متأكد من حذف جميع البيانات؟ هذا الإجراء لا يمكن التراجع عنه.')) {
        jobs = [];
        printers = [];
        jobIdCounter = 1;

        await saveData();
        updateStats();
        displayJobs();
        displayPrinters();

        showToast('تم حذف جميع البيانات', 'warning');
    }
}

// Modal for updating jobs
function showUpdateModal(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    const quantity = prompt('أدخل الكمية المطبوعة:', job.printedQuantity || '');
    if (quantity === null) return;

    const printerName = prompt('أدخل اسم الطباع:', job.printerName || '');
    if (printerName === null) return;

    updateJobQuantity(jobId, quantity, printerName);
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Event Listeners
document.getElementById('addJobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addJob();
});

document.getElementById('autoSync').addEventListener('change', function() {
    if (this.checked) {
        startAutoSync();
        showToast('تم تفعيل التزامن التلقائي', 'success');
    } else {
        stopAutoSync();
        showToast('تم إيقاف التزامن التلقائي', 'warning');
    }
});

// Menu event listeners
ipcRenderer.on('menu-import', () => {
    importFromFile();
});

ipcRenderer.on('menu-export', () => {
    exportToFile();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'n':
                e.preventDefault();
                showTab('add');
                break;
            case 'f':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
            case 's':
                e.preventDefault();
                exportToFile();
                break;
            case 'o':
                e.preventDefault();
                importFromFile();
                break;
        }
    }
});

// Window resize handler
window.addEventListener('resize', function() {
    // Adjust layout if needed
    displayJobs();
});

// Cleanup on window close
window.addEventListener('beforeunload', function() {
    stopAutoSync();
});

// Initialize filter to show all jobs
filterJobs('all');
