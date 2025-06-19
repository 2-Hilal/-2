<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🖨️ نظام إدارة الطباعة</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
            background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
            min-height: 100vh;
            color: #f1f5f9;
            direction: rtl;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border: 1px solid #475569;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .header h1 {
            font-size: 28px;
            font-weight: bold;
            color: #f1f5f9;
            margin: 0;
        }

        .tabs {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border: 1px solid #475569;
            border-radius: 16px;
            padding: 8px;
            margin-bottom: 20px;
            display: flex;
            gap: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .tab {
            flex: 1;
            padding: 12px 20px;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            font-size: 16px;
            border: 1px solid transparent;
        }

        .tab:hover {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .tab.active {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
        }

        .content {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            color: #1e293b;
        }

        .search-container {
            margin-bottom: 24px;
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 16px 20px 16px 50px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 16px;
            background: white;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-icon {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #64748b;
            font-size: 18px;
        }

        .jobs-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
        }

        .jobs-grid .job-card {
            flex: 1 1 320px;
            max-width: 450px;
        }

        .job-card {
            background: white;
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
            overflow: hidden;
        }

        .job-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .job-card.urgent {
            border: 3px solid #ef4444;
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            position: relative;
            animation: urgentPulse 2s infinite;
            box-shadow: 0 8px 32px rgba(239, 68, 68, 0.4);
            order: -1;
            transform: scale(1.02);
        }

        .job-card.urgent::before {
            content: '🚨';
            position: absolute;
            top: -10px;
            right: -10px;
            background: #ef4444;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            animation: urgentBounce 1s infinite;
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.5);
        }

        @keyframes urgentPulse {
            0%, 100% {
                box-shadow: 0 8px 32px rgba(239, 68, 68, 0.3);
            }
            50% {
                box-shadow: 0 8px 32px rgba(239, 68, 68, 0.6);
            }
        }

        @keyframes urgentBounce {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        .job-card.in-progress {
            border-left: 6px solid #f59e0b;
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        }

        .job-card.completed {
            border-left: 6px solid #10b981;
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            position: relative;
        }

        .job-card.completed::after {
            content: '🔒';
            position: absolute;
            top: 10px;
            left: 10px;
            background: #10b981;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .job-title {
            font-size: 24px;
            font-weight: bold;
            color: #1e293b;
            line-height: 1.3;
        }

        .job-status {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .status-urgent {
            background: #ef4444;
            color: white;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
        }

        .status-progress {
            background: #f59e0b;
            color: white;
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }

        .status-completed {
            background: #10b981;
            color: white;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .status-pending {
            background: #f97316;
            color: white;
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
        }

        .job-details {
            margin-bottom: 16px;
            line-height: 1.6;
        }

        .job-detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding: 4px 0;
        }

        .job-detail-label {
            font-weight: 600;
            color: #64748b;
        }

        .job-detail-value {
            color: #1e293b;
            font-weight: 500;
        }

        .job-actions {
            display: flex;
            gap: 8px;
            margin-top: 16px;
        }

        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
        }

        .btn-success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
        }

        .btn-danger {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .form-section {
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
            resize: vertical;
            min-height: 100px;
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
        }

        .checkbox-group input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: #3b82f6;
        }

        .form-actions {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 24px;
        }

        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
        }

        .stat-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .stat-card.active {
            border: 2px solid #3b82f6;
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .stat-card.active::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #1d4ed8);
        }

        /* مربع في الانتظار - لون برتقالي */
        #stat-pending {
            background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
            border: 2px solid #f97316;
            color: #9a3412;
        }

        #stat-pending .stat-number {
            color: #ea580c;
            font-weight: 800;
        }

        #stat-pending.active {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            border: 2px solid #ea580c;
            color: white;
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
        }

        #stat-pending.active .stat-number {
            color: white;
        }

        #stat-pending.active::before {
            background: linear-gradient(90deg, #f97316, #ea580c);
        }

        /* مربع قيد الطباعة - لون أصفر */
        #stat-progress {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            color: #92400e;
        }

        #stat-progress .stat-number {
            color: #d97706;
            font-weight: 800;
        }

        #stat-progress.active {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            border: 2px solid #d97706;
            color: white;
            box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
        }

        #stat-progress.active .stat-number {
            color: white;
        }

        #stat-progress.active::before {
            background: linear-gradient(90deg, #f59e0b, #d97706);
        }

        /* مربع تم الطباعة - لون أخضر */
        #stat-printed {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border: 2px solid #10b981;
            color: #065f46;
        }

        #stat-printed .stat-number {
            color: #059669;
            font-weight: 800;
        }

        #stat-printed.active {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border: 2px solid #059669;
            color: white;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        #stat-printed.active .stat-number {
            color: white;
        }

        #stat-printed.active::before {
            background: linear-gradient(90deg, #10b981, #059669);
        }

        /* مربع مرحلة - لون بنفسجي */
        #stat-completed {
            background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
            border: 2px solid #8b5cf6;
            color: #5b21b6;
        }

        #stat-completed .stat-number {
            color: #7c3aed;
            font-weight: 800;
        }

        #stat-completed.active {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            border: 2px solid #7c3aed;
            color: white;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        #stat-completed.active .stat-number {
            color: white;
        }

        #stat-completed.active::before {
            background: linear-gradient(90deg, #8b5cf6, #7c3aed);
        }

        /* مربع إجمالي الأعمال - لون أزرق */
        #stat-all {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border: 2px solid #3b82f6;
            color: #1e40af;
        }

        #stat-all .stat-number {
            color: #2563eb;
            font-weight: 800;
        }

        #stat-all.active {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            border: 2px solid #2563eb;
            color: white;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        #stat-all.active .stat-number {
            color: white;
        }

        #stat-all.active::before {
            background: linear-gradient(90deg, #3b82f6, #2563eb);
        }

        .stat-number {
            font-size: 32px;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 8px;
        }

        .stat-label {
            color: #64748b;
            font-weight: 600;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #64748b;
        }

        .empty-state-icon {
            font-size: 64px;
            margin-bottom: 16px;
            opacity: 0.5;
        }

        .message {
            padding: 16px 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            font-weight: 600;
            text-align: center;
        }

        .message.success {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            color: #065f46;
            border: 1px solid #10b981;
        }

        .message.error {
            background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
            color: #991b1b;
            border: 1px solid #ef4444;
        }

        .hidden {
            display: none !important;
        }

        .customer-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 2px solid #e5e7eb;
            border-top: none;
            border-radius: 0 0 8px 8px;
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .customer-suggestion-item {
            padding: 12px 16px;
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .customer-suggestion-item:hover {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .customer-suggestion-item.existing {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-left: 4px solid #10b981;
        }

        .customer-suggestion-item.existing:hover {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        }

        .customer-badge {
            background: #10b981;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .tabs {
                flex-direction: column;
            }

            .jobs-grid {
                grid-template-columns: 1fr;
            }

            .job-actions {
                flex-direction: column;
            }

            .form-actions {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- العنوان الرئيسي -->
        <div class="header">
            <h1>🖨️ نظام إدارة الطباعة</h1>
        </div>

        <!-- التبويبات -->
        <div class="tabs">
            <div class="tab active" onclick="switchTab('jobs')">الأعمال</div>
            <div class="tab" onclick="switchTab('add-job')">إضافة عمل</div>
            <div class="tab" onclick="switchTab('printers')">الطباعين</div>
        </div>

        <!-- المحتوى -->
        <div class="content">
            <div id="messages"></div>

            <!-- قسم الأعمال -->
            <div id="jobs-section">
                <!-- شريط البحث -->
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="البحث في الأعمال..." id="searchInput">
                    <span class="search-icon">🔍</span>
                </div>

                <!-- الإحصائيات -->
                <div class="stats-container">
                    <div class="stat-card" id="stat-all" onclick="filterByStatus('all')">
                        <div class="stat-number" id="totalJobs">0</div>
                        <div class="stat-label">إجمالي الأعمال</div>
                    </div>
                    <div class="stat-card" id="stat-pending" onclick="filterByStatus('pending')">
                        <div class="stat-number" id="pendingJobs">0</div>
                        <div class="stat-label">في الانتظار</div>
                    </div>
                    <div class="stat-card" id="stat-progress" onclick="filterByStatus('in-progress')">
                        <div class="stat-number" id="inProgressJobs">0</div>
                        <div class="stat-label">قيد الطباعة</div>
                    </div>
                    <div class="stat-card" id="stat-printed" onclick="filterByStatus('printed')">
                        <div class="stat-number" id="printedJobs">0</div>
                        <div class="stat-label">تم الطباعة</div>
                    </div>
                    <div class="stat-card" id="stat-completed" onclick="filterByStatus('completed')">
                        <div class="stat-number" id="completedJobs">0</div>
                        <div class="stat-label">مرحلة</div>
                    </div>
                </div>

                <!-- قائمة الأعمال -->
                <div id="jobsList" class="jobs-grid">
                    <!-- سيتم ملؤها بـ JavaScript -->
                </div>
            </div>

            <!-- قسم إضافة عمل -->
            <div id="add-job-section" class="hidden">
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    padding: 2px;
                    margin-bottom: 20px;
                    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
                ">
                    <div style="
                        background: white;
                        border-radius: 18px;
                        padding: 40px;
                        position: relative;
                        overflow: hidden;
                    ">
                        <!-- خلفية زخرفية -->
                        <div style="
                            position: absolute;
                            top: -50px;
                            right: -50px;
                            width: 150px;
                            height: 150px;
                            background: linear-gradient(135deg, #667eea20, #764ba220);
                            border-radius: 50%;
                            z-index: 0;
                        "></div>
                        <div style="
                            position: absolute;
                            bottom: -30px;
                            left: -30px;
                            width: 100px;
                            height: 100px;
                            background: linear-gradient(135deg, #f093fb20, #f5576c20);
                            border-radius: 50%;
                            z-index: 0;
                        "></div>

                        <div style="position: relative; z-index: 1;">
                            <div style="text-align: center; margin-bottom: 40px;">
                                <div style="
                                    display: inline-block;
                                    background: linear-gradient(135deg, #667eea, #764ba2);
                                    color: white;
                                    padding: 15px 25px;
                                    border-radius: 50px;
                                    font-size: 24px;
                                    font-weight: bold;
                                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                                    margin-bottom: 15px;
                                ">
                                    🖨️ إضافة عمل طباعة جديد
                                </div>
                                <div style="
                                    display: inline-block;
                                    background: linear-gradient(135deg, #1e3a8a, #1e40af);
                                    color: white;
                                    padding: 8px 20px;
                                    border-radius: 25px;
                                    font-size: 18px;
                                    font-weight: bold;
                                    font-family: monospace;
                                    margin-bottom: 10px;
                                    box-shadow: 0 4px 15px rgba(30, 58, 138, 0.4);
                                ">
                                    رقم العمل: <span id="nextJobNumber">4</span>
                                </div>
                                <p style="
                                    color: #64748b;
                                    font-size: 16px;
                                    margin: 0;
                                ">أدخل تفاصيل العمل الجديد</p>
                            </div>

                            <form id="jobForm">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                                    <div class="enhanced-form-group">
                                        <label style="
                                            display: block;
                                            margin-bottom: 10px;
                                            font-weight: 700;
                                            color: #374151;
                                            font-size: 16px;
                                        ">📝 اسم العمل *</label>
                                        <input type="text" id="jobName" required style="
                                            width: 100%;
                                            padding: 15px 20px;
                                            border: 2px solid #e5e7eb;
                                            border-radius: 12px;
                                            font-size: 16px;
                                            transition: all 0.3s ease;
                                            background: #f9fafb;
                                        " placeholder="مثال: طباعة بروشورات"
                                        onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                        onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'">
                                    </div>

                                    <!-- زر الحفظ السريع بعد اسم العمل مباشرة -->
                                    <div style="
                                        display: flex;
                                        gap: 15px;
                                        justify-content: center;
                                        margin: 25px 0;
                                        padding: 20px;
                                        background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
                                        border-radius: 15px;
                                        border: 2px solid #0ea5e9;
                                    ">
                                        <button type="submit" style="
                                            background: linear-gradient(135deg, #10b981, #059669);
                                            color: white;
                                            border: none;
                                            padding: 15px 35px;
                                            border-radius: 50px;
                                            font-weight: 700;
                                            font-size: 18px;
                                            cursor: pointer;
                                            transition: all 0.3s ease;
                                            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
                                            min-width: 180px;
                                        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 35px rgba(16, 185, 129, 0.5)'"
                                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(16, 185, 129, 0.4)'">
                                            💾 حفظ العمل
                                        </button>

                                        <button type="button" onclick="clearForm()" style="
                                            background: linear-gradient(135deg, #ef4444, #dc2626);
                                            color: white;
                                            border: none;
                                            padding: 15px 35px;
                                            border-radius: 50px;
                                            font-weight: 700;
                                            font-size: 18px;
                                            cursor: pointer;
                                            transition: all 0.3s ease;
                                            box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
                                            min-width: 180px;
                                        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 35px rgba(239, 68, 68, 0.5)'"
                                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(239, 68, 68, 0.4)'">
                                            🗑️ مسح النموذج
                                        </button>
                                    </div>

                                    <div class="enhanced-form-group">
                                        <label style="
                                            display: block;
                                            margin-bottom: 10px;
                                            font-weight: 700;
                                            color: #374151;
                                            font-size: 16px;
                                        ">📋 تفاصيل العمل</label>
                                        <textarea id="jobDetails" style="
                                            width: 100%;
                                            padding: 15px 20px;
                                            border: 2px solid #e5e7eb;
                                            border-radius: 12px;
                                            font-size: 16px;
                                            transition: all 0.3s ease;
                                            background: #f9fafb;
                                            min-height: 120px;
                                            resize: vertical;
                                            font-family: inherit;
                                        " placeholder="مثال: طباعة بروشورات - 4 ألوان - ورق مطفي - مقاس A4"
                                        onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                        onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'"></textarea>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                                    <div class="enhanced-form-group">
                                        <label style="
                                            display: block;
                                            margin-bottom: 10px;
                                            font-weight: 700;
                                            color: #374151;
                                            font-size: 16px;
                                        ">👤 اسم الطباع</label>
                                        <select id="printerNameSelect" style="
                                            width: 100%;
                                            padding: 15px 20px;
                                            border: 2px solid #e5e7eb;
                                            border-radius: 12px;
                                            font-size: 16px;
                                            transition: all 0.3s ease;
                                            background: #f9fafb;
                                        " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                        onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'">
                                            <option value="">اختر الطباع...</option>
                                        </select>
                                    </div>

                                    <div class="enhanced-form-group">
                                        <label style="
                                            display: block;
                                            margin-bottom: 10px;
                                            font-weight: 700;
                                            color: #374151;
                                            font-size: 16px;
                                        ">📊 الكمية المطلوبة</label>
                                        <input type="text" id="totalQuantity" style="
                                            width: 100%;
                                            padding: 15px 20px;
                                            border: 2px solid #e5e7eb;
                                            border-radius: 12px;
                                            font-size: 16px;
                                            transition: all 0.3s ease;
                                            background: #f9fafb;
                                        " placeholder="مثال: 1000 قطعة"
                                        onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                        onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'">
                                    </div>
                                </div>

                                <div style="
                                    background: linear-gradient(135deg, #fef3c7, #fde68a);
                                    border: 2px solid #f59e0b;
                                    border-radius: 15px;
                                    padding: 20px;
                                    margin-bottom: 30px;
                                ">
                                    <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 15px;
                                    ">
                                        <input type="checkbox" id="isUrgent" style="
                                            width: 20px;
                                            height: 20px;
                                            accent-color: #f59e0b;
                                            cursor: pointer;
                                        ">
                                        <label for="isUrgent" style="
                                            font-size: 18px;
                                            font-weight: 700;
                                            color: #92400e;
                                            cursor: pointer;
                                            user-select: none;
                                        ">⚡ عمل مستعجل</label>
                                    </div>
                                </div>

                                <!-- قسم رفع الصور -->
                                <div style="
                                    background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
                                    border: 2px solid #0288d1;
                                    border-radius: 15px;
                                    padding: 20px;
                                    margin-bottom: 30px;
                                ">
                                    <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 15px;
                                        margin-bottom: 15px;
                                    ">
                                        <h4 style="
                                            margin: 0;
                                            font-size: 16px;
                                            font-weight: 700;
                                            color: #01579b;
                                        ">📷 إضافة صور للعمل</h4>
                                    </div>

                                    <div style="
                                        display: grid;
                                        grid-template-columns: 1fr 1fr;
                                        gap: 15px;
                                        margin-bottom: 15px;
                                    ">
                                        <button type="button" onclick="openCamera()" style="
                                            background: linear-gradient(135deg, #0288d1, #0277bd);
                                            color: white;
                                            border: none;
                                            padding: 12px 20px;
                                            border-radius: 10px;
                                            font-weight: 600;
                                            cursor: pointer;
                                            transition: all 0.3s ease;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            gap: 8px;
                                        " onmouseover="this.style.transform='translateY(-2px)'"
                                        onmouseout="this.style.transform='translateY(0)'">
                                            📸 فتح الكاميرا
                                        </button>

                                        <label for="imageUpload" style="
                                            background: linear-gradient(135deg, #00acc1, #0097a7);
                                            color: white;
                                            border: none;
                                            padding: 12px 20px;
                                            border-radius: 10px;
                                            font-weight: 600;
                                            cursor: pointer;
                                            transition: all 0.3s ease;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            gap: 8px;
                                        " onmouseover="this.style.transform='translateY(-2px)'"
                                        onmouseout="this.style.transform='translateY(0)'">
                                            🖼️ رفع صورة
                                        </label>
                                        <input type="file" id="imageUpload" accept="image/*" multiple style="display: none;" onchange="handleImageUpload(event)">
                                    </div>

                                    <!-- منطقة عرض الصور -->
                                    <div id="imagePreview" style="
                                        display: none;
                                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                                        gap: 10px;
                                        margin-top: 15px;
                                        padding: 15px;
                                        background: white;
                                        border-radius: 10px;
                                        border: 1px solid #b3e5fc;
                                    "></div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- قسم الطباعين -->
            <div id="printers-section" class="hidden">
                <!-- إضافة طباع جديد -->
                <div class="form-section">
                    <h2 style="margin-bottom: 24px; color: #1e293b; text-align: center;">➕ إضافة طباع جديد</h2>

                    <form id="printerForm">
                        <div class="form-group">
                            <label class="form-label">اسم الطباع *</label>
                            <input type="text" class="form-input" id="printerName" placeholder="مثال: أحمد محمد" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">رقم الهاتف</label>
                            <input type="text" class="form-input" id="printerPhone" placeholder="مثال: 01234567890">
                        </div>

                        <div class="form-group">
                            <label class="form-label">التخصص</label>
                            <input type="text" class="form-input" id="printerSpecialty" placeholder="مثال: طباعة ديجيتال، أوفست">
                        </div>

                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">👤 إضافة الطباع</button>
                            <button type="button" class="btn btn-danger" onclick="clearPrinterForm()">🗑️ مسح النموذج</button>
                        </div>
                    </form>
                </div>

                <!-- قائمة الطباعين -->
                <div class="form-section">
                    <h2 style="margin-bottom: 24px; color: #1e293b; text-align: center;">👥 قائمة الطباعين</h2>
                    <div id="printersList">
                        <!-- سيتم ملؤها بـ JavaScript -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // متغيرات النظام
        let jobs = JSON.parse(localStorage.getItem('modernPrintingJobs')) || [];
        let printers = JSON.parse(localStorage.getItem('modernPrintingPrinters')) || [];
        let currentTab = 'jobs';
        let currentFilter = 'all';
        let jobCounter = parseInt(localStorage.getItem('modernPrintingJobCounter')) || 0;
        let currentJobImages = [];

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            displayJobs();
            updateStats();
            displayPrinters();
            loadSamplePrinters();
            displayNextJobNumber();

            // تفعيل الفلتر الافتراضي
            filterByStatus('all');

            // ربط الأحداث
            document.getElementById('jobForm').addEventListener('submit', addJob);
            document.getElementById('searchInput').addEventListener('input', filterJobs);
            document.getElementById('printerForm').addEventListener('submit', addPrinter);

            showMessage('🖨️ نظام إدارة الطباعة جاهز للاستخدام', 'success');
        });

        // تبديل التبويبات
        function switchTab(tabName) {
            // تحديث التبويبات
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');

            // إخفاء جميع الأقسام
            document.querySelectorAll('[id$="-section"]').forEach(section => {
                section.classList.add('hidden');
            });

            // إظهار القسم المحدد
            document.getElementById(tabName + '-section').classList.remove('hidden');
            currentTab = tabName;

            // عرض رقم العمل التالي عند فتح تبويب إضافة العمل
            if (tabName === 'add-job') {
                displayNextJobNumber();
            }
        }

        // توليد رقم العمل التلقائي
        function generateJobNumber() {
            jobCounter++;
            localStorage.setItem('modernPrintingJobCounter', jobCounter);

            return jobCounter.toString();
        }

        // عرض رقم العمل التالي في النموذج
        function displayNextJobNumber() {
            const nextNumber = (jobCounter + 1).toString();
            const nextJobNumberDiv = document.getElementById('nextJobNumber');
            if (nextJobNumberDiv) {
                nextJobNumberDiv.textContent = nextNumber;
            }
        }

        // إضافة عمل جديد
        function addJob(event) {
            event.preventDefault();

            const job = {
                id: Date.now(),
                jobNumber: generateJobNumber(),
                name: document.getElementById('jobName').value.trim(),
                invoiceNumber: '',
                customerName: '',
                printerName: document.getElementById('printerNameSelect').value.trim() || 'غير محدد',
                totalQuantity: document.getElementById('totalQuantity').value.trim() || 'غير محدد',
                printedQuantity: 0,
                colorCount: '',
                details: document.getElementById('jobDetails').value.trim(),
                isUrgent: document.getElementById('isUrgent').checked,
                images: [...currentJobImages],
                status: 'pending',
                createdAt: new Date().toISOString()
            };

            // تحديث الحالة تلقائياً حسب البيانات المدخلة
            updateJobStatus(job);

            if (!job.name) {
                showMessage('❌ يرجى إدخال اسم العمل', 'error');
                return;
            }

            jobs.push(job);
            saveData();
            displayJobs();
            updateStats();
            clearForm();
            displayNextJobNumber();

            showMessage('✅ تم إضافة العمل بنجاح!', 'success');
            switchTab('jobs');
        }

        // عرض الأعمال
        function displayJobs(filteredJobs = null) {
            const container = document.getElementById('jobsList');
            let jobsToShow = filteredJobs;

            // إذا لم يتم تمرير فلتر، طبق الفلتر الحالي
            if (!jobsToShow) {
                jobsToShow = jobs;
                if (currentFilter !== 'all') {
                    jobsToShow = jobsToShow.filter(job => job.status === currentFilter);
                }
            }

            // ترتيب الأعمال: المستعجلة أولاً
            jobsToShow = jobsToShow.sort((a, b) => {
                if (a.isUrgent && !b.isUrgent) return -1;
                if (!a.isUrgent && b.isUrgent) return 1;
                return new Date(b.createdAt) - new Date(a.createdAt);
            });

            if (jobsToShow.length === 0) {
                container.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <div class="empty-state-icon">📭</div>
                        <h3>لا توجد أعمال</h3>
                        <p>ابدأ بإضافة عمل طباعة جديد</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = jobsToShow.map(job => `
                <div class="job-card ${job.status} ${job.isUrgent ? 'urgent' : ''}">
                    <div class="job-header">
                        <div class="job-title">${job.name}</div>
                        <div class="job-status ${getStatusClass(job)}">
                            ${getStatusText(job)} ${job.isUrgent ? '⚡' : ''}
                        </div>
                    </div>

                    <div class="job-details">
                        ${job.invoiceNumber ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">رقم الفاتورة:</span>
                            <span class="job-detail-value" style="color: #3b82f6; font-weight: bold;">${job.invoiceNumber}</span>
                        </div>
                        ` : ''}
                        ${job.customerName ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">العميل:</span>
                            <span class="job-detail-value" style="color: #059669; font-weight: bold;">${job.customerName}</span>
                        </div>
                        ` : ''}
                        <div class="job-detail-row">
                            <span class="job-detail-label">الكمية الإجمالية:</span>
                            <span class="job-detail-value">${job.totalQuantity}</span>
                        </div>
                        ${job.details ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">تفاصيل العمل:</span>
                            <span class="job-detail-value">${job.details}</span>
                        </div>
                        ` : ''}
                        <div class="job-detail-row">
                            <span class="job-detail-label">التاريخ:</span>
                            <span class="job-detail-value">${new Date(job.createdAt).toLocaleDateString('ar-EG')}</span>
                        </div>
                        ${job.images && job.images.length > 0 ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">الصور:</span>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${job.images.slice(0, 3).map(image => `
                                    <img src="${image.data}" style="
                                        width: 50px;
                                        height: 50px;
                                        object-fit: cover;
                                        border-radius: 6px;
                                        cursor: pointer;
                                        border: 2px solid #e5e7eb;
                                    " onclick="viewImage('${image.data}')" title="${image.name}">
                                `).join('')}
                                ${job.images.length > 3 ? `
                                    <div style="
                                        width: 50px;
                                        height: 50px;
                                        background: #f3f4f6;
                                        border-radius: 6px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 12px;
                                        font-weight: bold;
                                        color: #6b7280;
                                        border: 2px solid #e5e7eb;
                                    ">+${job.images.length - 3}</div>
                                ` : ''}
                            </div>
                        </div>
                        ` : ''}
                    </div>

                    <!-- حقول التحديث المباشر -->
                    <div style="
                        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                        border: 2px solid #cbd5e1;
                        border-radius: 12px;
                        padding: 16px;
                        margin: 16px 0;
                        ${job.status === 'completed' ? 'opacity: 0.6; pointer-events: none;' : ''}
                    ">
                        <div style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-bottom: 12px;
                        ">
                            <h4 style="
                                color: #1e293b;
                                margin: 0;
                                font-size: 14px;
                                font-weight: 600;
                            ">${job.status === 'completed' ? '🔒 العمل مرحل ومجمد' : '📝 تحديث سريع'}:</h4>
                            ${job.jobNumber ? `
                            <span style="
                                background: linear-gradient(135deg, #1e3a8a, #1e40af);
                                color: white;
                                padding: 8px 16px;
                                border-radius: 20px;
                                font-size: 36px;
                                font-weight: bold;
                                font-family: 'Courier New', monospace;
                                letter-spacing: 2px;
                                box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
                                border: 2px solid #1e40af;
                                min-width: 50px;
                                text-align: center;
                            ">${job.jobNumber}</span>
                            ` : ''}
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                            <div>
                                <label style="
                                    display: block;
                                    margin-bottom: 4px;
                                    font-size: 12px;
                                    font-weight: 600;
                                    color: #64748b;
                                ">الكمية المطبوعة:</label>
                                <input type="text"
                                    id="quantity_${job.id}"
                                    value="${job.printedQuantity && job.printedQuantity !== '0' ? job.printedQuantity : ''}"
                                    placeholder="الكمية المطبوعة"
                                    style="
                                        width: 100%;
                                        padding: 8px 12px;
                                        border: 2px solid #e5e7eb;
                                        border-radius: 6px;
                                        font-size: 14px;
                                        transition: all 0.3s ease;
                                    "
                                    onchange="quickUpdateJob(${job.id}, 'quantity', this.value)"
                                    oninput="quickUpdateJob(${job.id}, 'quantity', this.value)">
                            </div>

                            <div>
                                <label style="
                                    display: block;
                                    margin-bottom: 4px;
                                    font-size: 12px;
                                    font-weight: 600;
                                    color: #64748b;
                                ">اسم الطباع:</label>
                                <select
                                    id="printer_${job.id}"
                                    onchange="quickUpdateJob(${job.id}, 'printer', this.value)"
                                    style="
                                        width: 100%;
                                        padding: 8px 12px;
                                        border: 2px solid #e5e7eb;
                                        border-radius: 6px;
                                        font-size: 14px;
                                        transition: all 0.3s ease;
                                        background: white;
                                    ">
                                    <option value="">اختر الطباع...</option>
                                    ${getPrintersOptions(job.printerName)}
                                </select>
                            </div>
                        </div>

                        <!-- حقول إضافية تظهر بعد تسجيل الكمية والطباع -->
                        <div id="additional_fields_${job.id}" style="
                            display: ${(job.printedQuantity && job.printedQuantity !== '0' && job.printerName && job.printerName !== 'غير محدد') ? 'block' : 'none'};
                        ">
                            <!-- حقل الفاتورة - يظهر بعد تسجيل الكمية والطباع -->
                            <div id="invoice_section_${job.id}" style="display: ${(job.printedQuantity && job.printerName && job.printedQuantity.trim() !== '' && job.printerName.trim() !== '' && job.printerName !== 'غير محدد') ? 'block' : 'none'}; margin-bottom: 12px;">
                                <div>
                                    <label style="
                                        display: block;
                                        margin-bottom: 4px;
                                        font-size: 12px;
                                        font-weight: 600;
                                        color: #64748b;
                                    ">رقم الفاتورة:</label>
                                    <input type="text"
                                        id="invoice_${job.id}"
                                        value="${job.invoiceNumber || ''}"
                                        placeholder="رقم الفاتورة"
                                        style="
                                            width: 100%;
                                            padding: 8px 12px;
                                            border: 2px solid #e5e7eb;
                                            border-radius: 6px;
                                            font-size: 14px;
                                            transition: all 0.3s ease;
                                        "
                                        onchange="quickUpdateJob(${job.id}, 'invoice', this.value)"
                                        oninput="checkAndShowCustomerField(${job.id})">
                                </div>
                            </div>

                            <!-- حقل العميل - يظهر بعد تسجيل رقم الفاتورة -->
                            <div id="customer_section_${job.id}" style="display: ${(job.invoiceNumber && job.invoiceNumber.trim() !== '') ? 'block' : 'none'}; margin-bottom: 12px;">
                                <div>
                                    <label style="
                                        display: block;
                                        margin-bottom: 4px;
                                        font-size: 12px;
                                        font-weight: 600;
                                        color: #64748b;
                                    ">اسم العميل:</label>
                                    <div style="position: relative;">
                                        <input type="text"
                                            id="customer_${job.id}"
                                            value="${job.customerName || ''}"
                                            placeholder="اسم العميل"
                                            style="
                                                width: 100%;
                                                padding: 8px 12px;
                                                border: 2px solid #e5e7eb;
                                                border-radius: 6px;
                                                font-size: 14px;
                                                transition: all 0.3s ease;
                                            "
                                            onchange="quickUpdateJob(${job.id}, 'customer', this.value)"
                                            oninput="showCustomerSuggestions(${job.id}, this.value)"
                                            onfocus="showCustomerSuggestions(${job.id}, this.value)"
                                            onblur="setTimeout(() => hideCustomerSuggestions(${job.id}), 200)">
                                        <div id="customer_suggestions_${job.id}" class="customer-suggestions" style="display: none;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="text-align: center;">
                            <button onclick="saveQuickUpdate(${job.id})" style="
                                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                                color: white;
                                border: none;
                                padding: 8px 16px;
                                border-radius: 6px;
                                font-weight: 600;
                                font-size: 12px;
                                cursor: pointer;
                                transition: all 0.3s ease;
                            ">💾 حفظ التحديث</button>
                        </div>
                    </div>

                    <div class="job-actions">
                        ${job.status !== 'completed' ? `
                        <button class="btn btn-success" onclick="completeJob(${job.id})">
                            📤 ترحيل
                        </button>
                        ` : `
                        <div style="
                            background: linear-gradient(135deg, #10b981, #059669);
                            color: white;
                            padding: 12px 20px;
                            border-radius: 8px;
                            text-align: center;
                            font-weight: 600;
                            font-size: 14px;
                        ">
                            📤 العمل مرحل ومؤرشف
                        </div>
                        `}
                        ${job.status !== 'completed' ? `
                        <button class="btn btn-danger" onclick="deleteJob(${job.id})">
                            🗑️ حذف
                        </button>
                        ` : `
                        <button class="btn btn-danger" onclick="confirmDeleteCompleted(${job.id})" style="opacity: 0.7;">
                            🗑️ حذف نهائي
                        </button>
                        `}
                    </div>
                </div>
            `).join('');
        }

        // تحديث عمل
        function updateJob(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            // إنشاء نافذة تحديث مخصصة
            showUpdateDialog(job);
        }

        // عرض نافذة تحديث العمل
        function showUpdateDialog(job) {
            const dialogHTML = `
                <div id="updateDialog" style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                ">
                    <div style="
                        background: white;
                        border-radius: 16px;
                        padding: 30px;
                        max-width: 500px;
                        width: 90%;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    ">
                        <h3 style="
                            color: #1e293b;
                            margin-bottom: 20px;
                            text-align: center;
                            font-size: 20px;
                        ">📝 تحديث تقدم العمل</h3>

                        <div style="
                            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                            padding: 15px;
                            border-radius: 12px;
                            margin-bottom: 20px;
                            border: 2px solid #cbd5e1;
                        ">
                            <strong style="color: #3b82f6;">العمل:</strong> ${job.name}
                        </div>

                        <div style="margin-bottom: 20px;">
                            <label style="
                                display: block;
                                margin-bottom: 8px;
                                font-weight: 600;
                                color: #374151;
                            ">الكمية المطبوعة:</label>
                            <input type="text" id="updateQuantity" value="${job.printedQuantity && job.printedQuantity !== '0' ? job.printedQuantity : ''}" style="
                                width: 100%;
                                padding: 12px 16px;
                                border: 2px solid #e5e7eb;
                                border-radius: 8px;
                                font-size: 16px;
                                transition: all 0.3s ease;
                            " placeholder="أدخل الكمية المطبوعة">
                        </div>

                        <div style="margin-bottom: 25px;">
                            <label style="
                                display: block;
                                margin-bottom: 8px;
                                font-weight: 600;
                                color: #374151;
                            ">اسم الطباع:</label>
                            <select id="updatePrinter" style="
                                width: 100%;
                                padding: 12px 16px;
                                border: 2px solid #e5e7eb;
                                border-radius: 8px;
                                font-size: 16px;
                                transition: all 0.3s ease;
                                background: white;
                            ">
                                <option value="">اختر الطباع...</option>
                                ${getPrintersOptions(job.printerName)}
                            </select>
                        </div>

                        <div style="
                            display: flex;
                            gap: 12px;
                            justify-content: center;
                        ">
                            <button onclick="saveJobUpdate(${job.id})" style="
                                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 8px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.3s ease;
                            ">✅ حفظ التحديث</button>

                            <button onclick="closeUpdateDialog()" style="
                                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 8px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.3s ease;
                            ">❌ إلغاء</button>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', dialogHTML);

            // تركيز على حقل الكمية
            document.getElementById('updateQuantity').focus();
            document.getElementById('updateQuantity').select();
        }

        // حفظ تحديث العمل
        function saveJobUpdate(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            const newQuantity = document.getElementById('updateQuantity').value.trim();
            const newPrinter = document.getElementById('updatePrinter').value.trim();

            if (!newQuantity) {
                alert('يرجى إدخال الكمية المطبوعة');
                return;
            }

            if (!newPrinter) {
                alert('يرجى إدخال اسم الطباع');
                return;
            }

            // تحديث بيانات العمل
            job.printedQuantity = newQuantity;
            job.printerName = newPrinter;

            if (job.printedQuantity && job.printedQuantity !== '0') {
                job.status = 'in-progress';
            }

            saveData();
            displayJobs();
            updateStats();
            closeUpdateDialog();
            showMessage('✅ تم تحديث العمل بنجاح', 'success');
        }

        // إغلاق نافذة التحديث
        function closeUpdateDialog() {
            const dialog = document.getElementById('updateDialog');
            if (dialog) {
                dialog.remove();
            }
        }

        // إضافة طباع جديد
        function addPrinter(event) {
            event.preventDefault();

            const printer = {
                id: Date.now(),
                name: document.getElementById('printerName').value.trim(),
                phone: document.getElementById('printerPhone').value.trim(),
                specialty: document.getElementById('printerSpecialty').value.trim(),
                createdAt: new Date().toISOString()
            };

            if (!printer.name) {
                showMessage('❌ يرجى إدخال اسم الطباع', 'error');
                return;
            }

            // التحقق من عدم تكرار الاسم
            if (printers.some(p => p.name === printer.name)) {
                showMessage('❌ هذا الطباع موجود بالفعل', 'error');
                return;
            }

            printers.push(printer);
            savePrintersData();
            displayPrinters();
            updatePrintersDropdown();
            clearPrinterForm();

            showMessage('✅ تم إضافة الطباع بنجاح!', 'success');
        }

        // عرض الطباعين
        function displayPrinters() {
            const container = document.getElementById('printersList');

            if (printers.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">👨‍💼</div>
                        <h3>لا يوجد طباعين</h3>
                        <p>ابدأ بإضافة طباع جديد</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = printers.map(printer => `
                <div class="job-card" style="margin-bottom: 15px;">
                    <div class="job-header">
                        <div class="job-title">👤 ${printer.name}</div>
                        <div class="job-status status-completed">نشط</div>
                    </div>

                    <div class="job-details">
                        ${printer.phone ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">الهاتف:</span>
                            <span class="job-detail-value">${printer.phone}</span>
                        </div>
                        ` : ''}
                        ${printer.specialty ? `
                        <div class="job-detail-row">
                            <span class="job-detail-label">التخصص:</span>
                            <span class="job-detail-value">${printer.specialty}</span>
                        </div>
                        ` : ''}
                        <div class="job-detail-row">
                            <span class="job-detail-label">تاريخ الإضافة:</span>
                            <span class="job-detail-value">${new Date(printer.createdAt).toLocaleDateString('ar-EG')}</span>
                        </div>
                    </div>

                    <div class="job-actions">
                        <button class="btn btn-primary" onclick="editPrinter(${printer.id})">
                            📝 تعديل
                        </button>
                        <button class="btn btn-danger" onclick="deletePrinter(${printer.id})">
                            🗑️ حذف
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // حذف طباع
        function deletePrinter(printerId) {
            const printer = printers.find(p => p.id === printerId);
            if (!printer) return;

            if (!confirm(`هل أنت متأكد من حذف الطباع: "${printer.name}"؟`)) return;

            printers = printers.filter(p => p.id !== printerId);

            savePrintersData();
            displayPrinters();
            updatePrintersDropdown();
            showMessage('✅ تم حذف الطباع بنجاح', 'success');
        }

        // تعديل طباع
        function editPrinter(printerId) {
            const printer = printers.find(p => p.id === printerId);
            if (!printer) return;

            const newName = prompt('اسم الطباع:', printer.name);
            if (newName === null) return;

            if (!newName.trim()) {
                alert('يرجى إدخال اسم صحيح');
                return;
            }

            // التحقق من عدم تكرار الاسم
            if (printers.some(p => p.name === newName.trim() && p.id !== printerId)) {
                alert('هذا الاسم موجود بالفعل');
                return;
            }

            printer.name = newName.trim();

            savePrintersData();
            displayPrinters();
            updatePrintersDropdown();
            showMessage('✅ تم تعديل الطباع بنجاح', 'success');
        }

        // تحديث قائمة الطباعين المنسدلة
        function updatePrintersDropdown() {
            const select = document.getElementById('printerNameSelect');
            if (select) {
                select.innerHTML = '<option value="">اختر الطباع...</option>' +
                    printers.map(printer => `<option value="${printer.name}">${printer.name}</option>`).join('');
            }
        }

        // الحصول على خيارات الطباعين للتحديث
        function getPrintersOptions(selectedPrinter = '') {
            return printers.map(printer =>
                `<option value="${printer.name}" ${printer.name === selectedPrinter ? 'selected' : ''}>${printer.name}</option>`
            ).join('');
        }

        // حفظ بيانات الطباعين
        function savePrintersData() {
            localStorage.setItem('modernPrintingPrinters', JSON.stringify(printers));
        }

        // مسح نموذج الطباع
        function clearPrinterForm() {
            document.getElementById('printerForm').reset();
        }

        // تحديث سريع للعمل مع الذكاء
        function quickUpdateJob(jobId, field, value) {
            // تخزين التحديث مؤقتاً
            if (!window.tempUpdates) {
                window.tempUpdates = {};
            }
            if (!window.tempUpdates[jobId]) {
                window.tempUpdates[jobId] = {};
            }
            window.tempUpdates[jobId][field] = value;

            // التحقق من إظهار حقل الفاتورة
            checkAndShowInvoiceField(jobId);
        }

        // 🧠 فحص وإظهار حقل الفاتورة عند اكتمال الكمية والطباع
        function checkAndShowInvoiceField(jobId) {
            const quantityInput = document.getElementById(`quantity_${jobId}`);
            const printerSelect = document.getElementById(`printer_${jobId}`);
            const invoiceSection = document.getElementById(`invoice_section_${jobId}`);

            if (quantityInput && printerSelect && invoiceSection) {
                const hasQuantity = quantityInput.value && quantityInput.value.trim() !== '' && quantityInput.value.trim() !== '0';
                const hasPrinter = printerSelect.value && printerSelect.value.trim() !== '' && printerSelect.value !== 'غير محدد';

                if (hasQuantity && hasPrinter && invoiceSection.style.display === 'none') {
                    // إظهار حقل الفاتورة مع تأثير جميل
                    invoiceSection.style.display = 'block';
                    invoiceSection.style.opacity = '0';
                    invoiceSection.style.transform = 'translateY(-10px)';
                    invoiceSection.style.transition = 'all 0.4s ease';

                    setTimeout(() => {
                        invoiceSection.style.opacity = '1';
                        invoiceSection.style.transform = 'translateY(0)';
                    }, 50);
                }
            }
        }

        // 🧠 فحص وإظهار حقل العميل عند كتابة رقم الفاتورة
        function checkAndShowCustomerField(jobId) {
            const invoiceInput = document.getElementById(`invoice_${jobId}`);
            const customerSection = document.getElementById(`customer_section_${jobId}`);

            if (invoiceInput && customerSection) {
                const hasInvoice = invoiceInput.value && invoiceInput.value.trim() !== '';

                if (hasInvoice && customerSection.style.display === 'none') {
                    // إظهار حقل العميل مع تأثير جميل
                    customerSection.style.display = 'block';
                    customerSection.style.opacity = '0';
                    customerSection.style.transform = 'translateY(-10px)';
                    customerSection.style.transition = 'all 0.4s ease';

                    setTimeout(() => {
                        customerSection.style.opacity = '1';
                        customerSection.style.transform = 'translateY(0)';
                    }, 50);
                }
            }
        }

        // إظهار/إخفاء الحقول الإضافية
        function toggleAdditionalFields(jobId) {
            const quantityInput = document.getElementById(`quantity_${jobId}`);
            const printerSelect = document.getElementById(`printer_${jobId}`);
            const additionalFields = document.getElementById(`additional_fields_${jobId}`);

            if (quantityInput && printerSelect && additionalFields) {
                const hasQuantity = quantityInput.value.trim() && quantityInput.value.trim() !== '0';
                const hasPrinter = printerSelect.value.trim() && printerSelect.value.trim() !== 'غير محدد';

                if (hasQuantity && hasPrinter) {
                    additionalFields.style.display = 'block';
                } else {
                    additionalFields.style.display = 'none';
                }
            }
        }

        // حفظ التحديث السريع
        function saveQuickUpdate(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            const quantityInput = document.getElementById(`quantity_${jobId}`);
            const printerSelect = document.getElementById(`printer_${jobId}`);
            const invoiceInput = document.getElementById(`invoice_${jobId}`);
            const customerInput = document.getElementById(`customer_${jobId}`);

            const newQuantity = quantityInput.value.trim();
            const newPrinter = printerSelect.value.trim();
            const newInvoice = invoiceInput ? invoiceInput.value.trim() : '';
            const newCustomer = customerInput ? customerInput.value.trim() : '';

            if (!newQuantity) {
                showMessage('❌ يرجى إدخال الكمية المطبوعة', 'error');
                quantityInput.focus();
                return;
            }

            if (!newPrinter) {
                showMessage('❌ يرجى اختيار الطباع', 'error');
                printerSelect.focus();
                return;
            }

            // تحديث بيانات العمل
            job.printedQuantity = newQuantity;
            job.printerName = newPrinter;
            job.invoiceNumber = newInvoice;
            job.customerName = newCustomer;

            // تحديث الحالة تلقائياً حسب البيانات المتوفرة
            updateJobStatus(job);

            saveData();
            displayJobs();
            updateStats();
            showMessage('✅ تم تحديث العمل بنجاح', 'success');
        }

        // تحديث حالة العمل تلقائياً
        function updateJobStatus(job) {
            const hasPrinter = job.printerName && job.printerName !== 'غير محدد';
            const hasQuantity = job.printedQuantity && job.printedQuantity !== '0';
            const hasInvoiceAndCustomer = job.invoiceNumber && job.invoiceNumber.trim() !== '' && job.customerName && job.customerName.trim() !== '';

            if (hasQuantity && hasPrinter && hasInvoiceAndCustomer) {
                // إذا كانت جميع البيانات متوفرة → مكتملة
                job.status = 'completed';
                job.completedAt = new Date().toISOString();
            } else if (hasQuantity && hasPrinter) {
                // إذا كانت الكمية والطباع متوفرة → تم الطباعة
                job.status = 'printed';
            } else if (hasPrinter) {
                // إذا تم تحديد الطباع فقط → قيد الطباعة
                job.status = 'in-progress';
            } else {
                // في الانتظار
                job.status = 'pending';
            }
        }

        // تحميل طباعين تجريبيين
        function loadSamplePrinters() {
            if (printers.length === 0) {
                printers = [
                    {
                        id: 1,
                        name: 'أحمد محمد',
                        phone: '01234567890',
                        specialty: 'طباعة ديجيتال',
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: 'محمد علي',
                        phone: '01098765432',
                        specialty: 'طباعة أوفست',
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 3,
                        name: 'سعد أحمد',
                        phone: '01555666777',
                        specialty: 'طباعة كبيرة الحجم',
                        createdAt: new Date().toISOString()
                    }
                ];
                savePrintersData();
                updatePrintersDropdown();
            } else {
                updatePrintersDropdown();
            }
        }

        // ترحيل عمل
        function completeJob(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            if (!confirm(`هل أنت متأكد من ترحيل العمل: "${job.name}"؟`)) return;

            job.status = 'completed';
            job.completedAt = new Date().toISOString();

            saveData();
            displayJobs();
            updateStats();
            showMessage('📤 تم ترحيل العمل بنجاح!', 'success');
        }

        // حذف عمل
        function deleteJob(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            if (!confirm(`هل أنت متأكد من حذف العمل: "${job.name}"؟`)) return;

            jobs = jobs.filter(j => j.id !== jobId);

            saveData();
            displayJobs();
            updateStats();
            showMessage('✅ تم حذف العمل بنجاح', 'success');
        }

        // تأكيد حذف عمل مكتمل
        function confirmDeleteCompleted(jobId) {
            const job = jobs.find(j => j.id === jobId);
            if (!job) return;

            const confirmMessage = `⚠️ تحذير: هذا العمل مرحل ومؤرشف!\n\nالعمل: "${job.name}"\nالطباع: ${job.printerName}\nتاريخ الترحيل: ${new Date(job.completedAt).toLocaleDateString('ar-EG')}\n\nهل أنت متأكد من الحذف النهائي؟\nهذا الإجراء لا يمكن التراجع عنه!`;

            if (!confirm(confirmMessage)) return;

            // تأكيد إضافي
            if (!confirm('تأكيد نهائي: سيتم حذف العمل المرحل نهائياً!')) return;

            jobs = jobs.filter(j => j.id !== jobId);

            saveData();
            displayJobs();
            updateStats();
            showMessage('⚠️ تم حذف العمل المرحل نهائياً', 'success');
        }

        // تصفية الأعمال
        function filterJobs() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();

            let filteredJobs = jobs;

            // تطبيق فلتر البحث أولاً
            if (searchTerm) {
                filteredJobs = filteredJobs.filter(job =>
                    job.name.toLowerCase().includes(searchTerm) ||
                    job.printerName.toLowerCase().includes(searchTerm) ||
                    job.details.toLowerCase().includes(searchTerm) ||
                    (job.jobNumber && job.jobNumber.toLowerCase().includes(searchTerm)) ||
                    (job.invoiceNumber && job.invoiceNumber.toLowerCase().includes(searchTerm)) ||
                    (job.customerName && job.customerName.toLowerCase().includes(searchTerm))
                );

                // عند البحث، عرض جميع النتائج وتحديث الإحصائيات
                updateStatsWithSearch(filteredJobs);
                displayJobs(filteredJobs);

                // عرض رسالة البحث
                if (filteredJobs.length > 0) {
                    showMessage(`🔍 تم العثور على ${filteredJobs.length} نتيجة للبحث: "${searchTerm}"`, 'success');
                } else {
                    showMessage(`❌ لم يتم العثور على نتائج للبحث: "${searchTerm}"`, 'error');
                }
                return;
            }

            // تطبيق فلتر الحالة فقط عند عدم وجود بحث
            if (currentFilter !== 'all') {
                filteredJobs = filteredJobs.filter(job => job.status === currentFilter);
            }

            // إعادة تعيين الإحصائيات العادية عند عدم وجود بحث
            updateStats();
            displayJobs(filteredJobs);
        }

        // تحديث الإحصائيات مع نتائج البحث
        function updateStatsWithSearch(searchResults) {
            document.getElementById('totalJobs').textContent = searchResults.length;
            document.getElementById('pendingJobs').textContent = searchResults.filter(j => j.status === 'pending').length;
            document.getElementById('inProgressJobs').textContent = searchResults.filter(j => j.status === 'in-progress').length;
            document.getElementById('printedJobs').textContent = searchResults.filter(j => j.status === 'printed').length;
            document.getElementById('completedJobs').textContent = searchResults.filter(j => j.status === 'completed').length;

            // إزالة الفلتر النشط عند البحث
            document.querySelectorAll('.stat-card').forEach(card => {
                card.classList.remove('active');
            });

            // تفعيل مربع "إجمالي الأعمال" عند البحث
            const allCard = document.getElementById('stat-all');
            if (allCard) {
                allCard.classList.add('active');
            }
        }

        // فلترة حسب الحالة
        function filterByStatus(status) {
            currentFilter = status;

            // تحديث مظهر المربعات
            document.querySelectorAll('.stat-card').forEach(card => {
                card.classList.remove('active');
            });

            const activeCard = document.getElementById(`stat-${status}`);
            if (activeCard) {
                activeCard.classList.add('active');
            }

            // تطبيق الفلتر
            filterJobs();

            // عرض رسالة توضيحية
            const statusNames = {
                'all': 'جميع الأعمال',
                'pending': 'الأعمال في الانتظار',
                'in-progress': 'الأعمال قيد الطباعة',
                'printed': 'الأعمال المطبوعة',
                'completed': 'الأعمال المرحلة'
            };

            showMessage(`📊 عرض: ${statusNames[status]}`, 'success');
        }

        // تحديث الإحصائيات
        function updateStats() {
            document.getElementById('totalJobs').textContent = jobs.length;
            document.getElementById('pendingJobs').textContent = jobs.filter(j => j.status === 'pending').length;
            document.getElementById('inProgressJobs').textContent = jobs.filter(j => j.status === 'in-progress').length;
            document.getElementById('printedJobs').textContent = jobs.filter(j => j.status === 'printed').length;
            document.getElementById('completedJobs').textContent = jobs.filter(j => j.status === 'completed').length;

            // تحديث الفلتر النشط
            if (currentFilter !== 'all') {
                const activeCard = document.getElementById(`stat-${currentFilter}`);
                if (activeCard) {
                    activeCard.classList.add('active');
                }
            }
        }

        // الحصول على فئة الحالة
        function getStatusClass(job) {
            if (job.status === 'completed') return 'status-completed';
            if (job.status === 'printed') return 'status-completed';
            if (job.status === 'in-progress') return 'status-progress';
            if (job.status === 'pending') return 'status-pending';
            if (job.isUrgent) return 'status-urgent';
            return 'status-pending';
        }

        // الحصول على نص الحالة
        function getStatusText(job) {
            const statusMap = {
                'pending': 'في الانتظار',
                'in-progress': 'قيد الطباعة',
                'printed': 'تم الطباعة',
                'completed': 'مكتمل'
            };

            let statusText = statusMap[job.status] || job.status;

            // إضافة علامة الاستعجال إذا كان العمل مستعجل
            if (job.isUrgent && job.status !== 'completed') {
                statusText += ' ⚡';
            }

            return statusText;
        }

        // حفظ البيانات في localStorage فقط
        function saveData() {
            // حفظ في localStorage
            localStorage.setItem('modernPrintingJobs', JSON.stringify(jobs));
            localStorage.setItem('modernPrintingPrinters', JSON.stringify(printers));
            localStorage.setItem('modernPrintingJobCounter', jobCounter);

            console.log('💾 تم الحفظ في المتصفح');
        }

        // حفظ تلقائي في ملف
        function autoSaveToFile() {
            try {
                const data = {
                    jobs: jobs,
                    printers: printers,
                    jobCounter: jobCounter,
                    lastSaved: new Date().toISOString(),
                    version: '1.0'
                };

                const dataStr = JSON.stringify(data, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});

                // إنشاء رابط تحميل مخفي
                const link = document.createElement('a');
                link.href = URL.createObjectURL(dataBlob);
                link.download = 'printing-data.json';

                // إضافة الرابط للصفحة وتفعيله ثم حذفه
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // تنظيف الذاكرة
                URL.revokeObjectURL(link.href);

                console.log('💾 تم الحفظ التلقائي في ملف');
                showMessage('💾 تم الحفظ التلقائي', 'success');

            } catch (error) {
                console.error('خطأ في الحفظ التلقائي:', error);
                showMessage('❌ خطأ في الحفظ التلقائي', 'error');
            }
        }

        // تحميل البيانات من ملف
        function loadFromFile(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);

                    if (data.jobs) jobs = data.jobs;
                    if (data.printers) printers = data.printers;
                    if (data.jobCounter) jobCounter = data.jobCounter;

                    // حفظ في localStorage أيضاً
                    localStorage.setItem('modernPrintingJobs', JSON.stringify(jobs));
                    localStorage.setItem('modernPrintingPrinters', JSON.stringify(printers));
                    localStorage.setItem('modernPrintingJobCounter', jobCounter);

                    renderJobs();
                    renderPrinters();
                    updatePrintersDropdown();
                    updateStats();

                    showMessage('✅ تم تحميل البيانات بنجاح!', 'success');
                } catch (error) {
                    showMessage('❌ خطأ في قراءة الملف!', 'error');
                }
            };
            reader.readAsText(file);
        }

        // مسح النموذج
        function clearForm() {
            document.getElementById('jobForm').reset();
            currentJobImages = [];
            document.getElementById('imagePreview').style.display = 'none';
            document.getElementById('imagePreview').innerHTML = '';
        }

        // فتح الكاميرا
        function openCamera() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.capture = 'camera';
            input.onchange = handleImageUpload;
            input.click();
        }

        // معالجة رفع الصور
        function handleImageUpload(event) {
            const files = event.target.files;
            if (files.length === 0) return;

            for (let file of files) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const imageData = {
                            name: file.name,
                            data: e.target.result,
                            size: file.size,
                            type: file.type
                        };
                        currentJobImages.push(imageData);
                        displayImagePreview();
                    };
                    reader.readAsDataURL(file);
                }
            }
        }

        // عرض معاينة الصور
        function displayImagePreview() {
            const previewDiv = document.getElementById('imagePreview');

            if (currentJobImages.length === 0) {
                previewDiv.style.display = 'none';
                return;
            }

            previewDiv.style.display = 'grid';
            previewDiv.innerHTML = currentJobImages.map((image, index) => `
                <div style="
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                ">
                    <img src="${image.data}" style="
                        width: 100%;
                        height: 100px;
                        object-fit: cover;
                        cursor: pointer;
                    " onclick="viewImage('${image.data}')" title="${image.name}">
                    <button onclick="removeImage(${index})" style="
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        background: #ef4444;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                        font-size: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</button>
                </div>
            `).join('');
        }

        // حذف صورة
        function removeImage(index) {
            currentJobImages.splice(index, 1);
            displayImagePreview();
        }

        // عرض الصورة بحجم كامل
        function viewImage(imageSrc) {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;

            const img = document.createElement('img');
            img.src = imageSrc;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            `;

            modal.appendChild(img);
            modal.onclick = () => document.body.removeChild(modal);
            document.body.appendChild(modal);
        }

        // عرض رسالة
        function showMessage(text, type) {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML = `<div class="message ${type}">${text}</div>`;

            setTimeout(() => {
                messagesDiv.innerHTML = '';
            }, 5000);
        }

        // إضافة بيانات تجريبية
        function addSampleData() {
            if (jobs.length === 0) {
                jobs = [
                    {
                        id: 1,
                        jobNumber: '1',
                        name: 'طباعة أكياس',
                        invoiceNumber: 'INV-2024-001',
                        customerName: 'شركة الأمل للتجارة',
                        printerName: 'أحمد محمد',
                        totalQuantity: '500',
                        printedQuantity: '0',
                        colorCount: '',
                        details: 'طباعة أكياس بلاستيكية - 4 ألوان - مقاس كبير',
                        isUrgent: true,
                        status: 'pending',
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        jobNumber: '2',
                        name: 'طباعة بروشورات',
                        invoiceNumber: 'INV-2024-002',
                        customerName: 'مؤسسة النور',
                        printerName: 'محمد علي',
                        totalQuantity: '1000',
                        printedQuantity: '0',
                        colorCount: '',
                        details: 'بروشورات إعلانية - لونين - ورق مطفي - مقاس A4',
                        isUrgent: true,
                        status: 'pending',
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 3,
                        jobNumber: '3',
                        name: 'طباعة كروت شخصية',
                        invoiceNumber: 'INV-2024-003',
                        customerName: 'مكتب المحاماة',
                        printerName: 'سعد أحمد',
                        totalQuantity: '500',
                        printedQuantity: '0',
                        colorCount: '',
                        details: 'كروت شخصية للمحامين - لون واحد - ورق مقوى',
                        isUrgent: false,
                        status: 'pending',
                        createdAt: new Date().toISOString()
                    }
                ];

                // تحديث العداد ليبدأ من الرقم التالي
                jobCounter = 3;
                saveData();
                displayJobs();
                updateStats();
            }
        }

        // الحصول على قائمة العملاء المسجلين
        function getExistingCustomers() {
            const customers = new Set();
            jobs.forEach(job => {
                if (job.customerName && job.customerName.trim() !== '') {
                    customers.add(job.customerName.trim());
                }
            });
            return Array.from(customers).sort();
        }

        // عرض اقتراحات العملاء
        function showCustomerSuggestions(jobId, inputValue) {
            const suggestionsDiv = document.getElementById(`customer_suggestions_${jobId}`);
            if (!suggestionsDiv) return;

            const existingCustomers = getExistingCustomers();
            const filteredCustomers = existingCustomers.filter(customer =>
                customer.toLowerCase().includes(inputValue.toLowerCase())
            );

            if (filteredCustomers.length === 0 || (filteredCustomers.length === 1 && filteredCustomers[0] === inputValue)) {
                suggestionsDiv.style.display = 'none';
                return;
            }

            const suggestionsHTML = filteredCustomers.map(customer => `
                <div class="customer-suggestion-item existing" onclick="selectCustomer(${jobId}, '${customer}')">
                    <span>👤 ${customer}</span>
                    <span class="customer-badge">مسجل مسبقاً</span>
                </div>
            `).join('');

            suggestionsDiv.innerHTML = suggestionsHTML;
            suggestionsDiv.style.display = 'block';
        }

        // إخفاء اقتراحات العملاء
        function hideCustomerSuggestions(jobId) {
            const suggestionsDiv = document.getElementById(`customer_suggestions_${jobId}`);
            if (suggestionsDiv) {
                suggestionsDiv.style.display = 'none';
            }
        }

        // اختيار عميل من الاقتراحات
        function selectCustomer(jobId, customerName) {
            const input = document.getElementById(`customer_${jobId}`);
            if (input) {
                input.value = customerName;
                quickUpdateJob(jobId, 'customer', customerName);

                // إضافة تأثير بصري للتأكيد
                input.style.background = 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)';
                input.style.borderColor = '#10b981';

                setTimeout(() => {
                    input.style.background = '#f9fafb';
                    input.style.borderColor = '#e5e7eb';
                }, 1000);
            }
            hideCustomerSuggestions(jobId);
        }

        // تحميل البيانات التجريبية عند بدء التشغيل
        setTimeout(() => {
            addSampleData();
        }, 1000);

        console.log('🖨️ نظام إدارة الطباعة الحديث جاهز');
    </script>
</body>
</html>