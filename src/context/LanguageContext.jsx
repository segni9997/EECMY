"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

const translations = {
  en: {
    // TopBar
    welcome: "Welcome",
    logout: "Logout",
    username: "Username",
    password: "Password",
    sector: "Sector",
    congregation: "Congregation",
    development: "Development",
    school: "School",
    dashboard: "Dashboard",
    language: "Language",
    theme: "Theme",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",

    // Sidebar Navigation
    overview: "Overview",
    members: "Members",
    memberManagement: "Member Management",
    memberLocations: "Member Locations",
    payments: "Payments",
    paymentRecords: "Payment Records",
    assets: "Assets",
    assetManagement: "Asset Management",
    reports: "Reports",
    settings: "Settings",

    // Dashboard
    totalMembers: "Total Members",
    totalIncome: "Total Income",
    totalExpenses: "Total Expenses",
    netBalance: "Net Balance",
    incomeVsExpenses: "Income vs Expenses",
    memberStatistics: "Member Statistics",
    recentActivity: "Recent Activity",

    // Member Management
    addMember: "Add Member",
    editMember: "Edit Member",
    deleteMember: "Delete Member",
    memberName: "Member Name",
    career: "Career",
    location: "Location",
    photo: "Photo",
    inauguratedDate: "Inaugurated Date",
    contributions: "Contributions",
    memberIDCards: "Member ID Cards",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    careerProfession: "Career/Profession",
    joinDate: "Join Date",
    viewDetails: "View Details",
    addNewMember: "Add New Member",
    allStatus: "All Status",
    searchByNameEmailCareer: "Search by name, email, or career...",

    // Payment Records
    income: "Income",
    expenses: "Expenses",
    asratMeba: "Asrat & Meba",
    gifts: "Gifts",
    commercial: "Commercial",
    rents: "Rents",
    category: "Category",
    amount: "Amount",
    date: "Date",
    churchPaymentRecords: "Church Payment Records",
    recordPayment: "Record Payment",
    paymentType: "Transaction Type",
    classification: "Classification",
    description: "Description",
    allCategories: "All Categories",
    asrat: "Asrat",
    meba: "Meba",
    utilities: "Utilities",
    recordNewTransaction: "Record New Transaction",

    // Congregation Dashboard
    congregationDashboard: "Congregation Dashboard",
    detailedReport: "Detailed Report",
    memberMap: "Member Map",
    activeMembers: "Active Members",
    inactiveMembers: "Inactive Members",
    totalAssets: "Total Assets",
    incomeBreakdown: "Income Breakdown",
    expenseBreakdown: "Expense Breakdown",
    financialSummary: "Financial Summary",
    recentActivities: "Recent Activities",
    detailedFinancialBreakdown: "Detailed Financial Breakdown",
    assetsRegister: "Assets Register",
    asratMemberDues: "Asrat (Member Dues)",
    mebaContribution: "Meba (Contribution)",
    giftsAndDonations: "Gifts & Donations",
    commercialRents: "Commercial (Rents)",
    churchOperations: "Church Operations",
    commercialExpenses: "Commercial Expenses",
    asratIncome: "Asrat Income",
    mebaIncome: "Meba Income",
    commercialRentsIncome: "Commercial Rents",
    churchExpenses: "Church Expenses",
    activeRate: "Active Rate",
    avgIncomePerMember: "Avg Income per Member",
    percentage: "Percentage",
    assetName: "Asset Name",
    assetCategory: "Category",
    churchLocation: "Church/Location",
    purchaseDate: "Purchase Date",
    status: "Status",

    // Student Management
    studentManagement: "Student Management",
    addStudent: "Add Student",
    class: "Class",
    enrollDate: "Enroll Date",
    addNewStudent: "Add New Student",
    grade9: "Grade 9",
    grade10: "Grade 10",
    grade11: "Grade 11",
    grade12: "Grade 12",
    searchByName: "Search by name...",

    // School Fee Management
    schoolFeeManagement: "School Fee Management",
    recordFee: "Record Fee",
    studentID: "Student ID",
    month: "Month",
    collected: "Collected",
    unpaid: "Unpaid",
    allFees: "All Fees",
    paid: "Paid",
    recordSchoolFee: "Record School Fee",

    // Asset Management
    assetManagement: "Asset Management",
    addAsset: "Add Asset",
    allLocations: "All Locations",
    building: "Building",
    equipment: "Equipment",
    furniture: "Furniture",
    vehicle: "Vehicle",
    other: "Other",
    totalAssetValue: "Total Asset Value",
    editAsset: "Edit Asset",
    addNewAsset: "Add New Asset",
    assetValue: "Value (Birr)",
    detailedLocation: "Detailed Location",
    maintenance: "Maintenance",

    // Employee Management
    employeeManagement: "Employee Management",
    addEmployee: "Add Employee",
    position: "Position",
    startDate: "Start Date",
    addNewEmployee: "Add New Employee",

    // School Dashboard
    schoolDashboard: "School Dashboard",
    overviewOfSchool: "Overview of school operations and finances",
    totalStudents: "Total Students",
    feesCollected: "Fees Collected",
    operationalExpenses: "Operational Expenses",
    balance: "Balance",

    // Grade Reports
    gradeReports: "Grade Reports",
    printReports: "Print Reports",
    selectAll: "Select All",
    printPreview: "Print Preview",
    gradeReport: "GRADE REPORT",
    abcSchool: "ABC School",
    studentName: "Student Name:",
    academicYear: "Academic Year:",
    subject: "Subject",
    score: "Score",
    grade: "Grade",
    average: "Average",

    // Student Certificates
    studentCertificates: "Student Certificates",
    completionCertificate: "Completion Certificate",
    achievementCertificate: "Achievement Certificate",
    attendanceCertificate: "Attendance Certificate",
    printCertificates: "Print Certificates",
    certificateOfCompletion: "Certificate of Completion",
    certificateOfAchievement: "Certificate of Achievement",
    certificateOfAttendance: "Certificate of Attendance",
    certifyThat: "This is to certify that",
    hasSuccessfullyCompleted: "has successfully completed the academic year",
    in: "in",
    withCommendablePerformance: "with commendable performance and dedication",
    awardedOn: "Awarded on",
    principal: "Principal",
    classTeacher: "Class Teacher",

    // General Ledger
    generalLedger: "General Ledger",
    type: "Type",
    sector: "Sector",
    allTransactions: "All Transactions",
    incomeOnly: "Income Only",
    expensesOnly: "Expenses Only",

    // Financial Reports
    financialReports: "Financial Reports",
    printReport: "Print Report",
    balanceSheet: "Balance Sheet",
    incomeStatement: "Income Statement",
    trialBalance: "Trial Balance",
    account: "Account",
    debit: "Debit",
    credit: "Credit",
    assets: "Assets",

    // Common UI Elements
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    close: "Close",
    add: "Add",
    update: "Update",
    remove: "Remove",
    export: "Export",
    import: "Import",
    download: "Download",
    upload: "Upload",
    submit: "Submit",
    login: "Login",
    forgotPassword: "Forgot Password",
    logoAlt: "Financial Management System Logo",
    systemTitle: "Financial & Administrative System",
    systemSubtitle: "Organization Management Platform",
    enterUsername: "Enter username",
    enterPassword: "Enter password",
    loading: "Loading...",
    demoCredentials: "Demo Credentials",
    admin: "Admin",
    finance: "Finance",
    hr: "HR",
    school: "School",
    dataEntry: "Data Entry",
  },
  am: {
    // TopBar
    welcome: "እንኳን ደህና መጡ",
    logout: "ወደ ውጭ ይውጡ",
    username: "ተጠቃሚ ስም",
    password: "ይለፍ ቃል",
    sector: "ዘርፍ",
    congregation: "ሙሉዓ",
    development: "ልማት",
    school: "ትምህርት ቤት",
    dashboard: "ዋና ገጽ",
    language: "ቋንቋ",
    theme: "ቴማ",
    darkMode: "ጥቁር ሞድ",
    lightMode: "ብርሃን ሞድ",

    // Sidebar Navigation
    overview: "ጠቅላላ እይታ",
    members: "አባላት",
    memberManagement: "የአባላት አያያዝ",
    memberLocations: "የአባላት ቦታዎች",
    payments: "ክፍያዎች",
    paymentRecords: "የክፍያ መዝገብ",
    assets: "ንብረቶች",
    assetManagement: "የንብረት አያያዝ",
    reports: "ሪፖርቶች",
    settings: "ቅንብሮች",

    // Dashboard
    totalMembers: "ጠቅላላ አባላት",
    totalIncome: "ጠቅላላ ገቢ",
    totalExpenses: "ጠቅላላ ወጪዎች",
    netBalance: "ንጽህ ሚዛን",
    incomeVsExpenses: "ገቢ ከ ወጪ",
    memberStatistics: "የአባላት ስታቲስቲክስ",
    recentActivity: "ምድረ ገብ ተግባር",

    // Member Management
    addMember: "አባል ጨምር",
    editMember: "አባል ደርግ",
    deleteMember: "አባል ሰርዝ",
    memberName: "የአባሉ ስም",
    career: "ሙያ",
    location: "ቦታ",
    photo: "ፎቶ",
    inauguratedDate: "ከታወቀ ቀን",
    contributions: "አበርክቶች",
    memberIDCards: "አባል ID ካርዶች",
    fullName: "ሙሉ ስም",
    email: "ኢ-ሜል",
    phone: "ስልክ",
    careerProfession: "ሙያ/ሙያ",
    joinDate: "ተሳትፎ ቀን",
    viewDetails: "ዝርዝር ይመልከቱ",
    addNewMember: "አዲስ አባል ጨምር",
    allStatus: "ሁሉም ሁኔታ",
    searchByNameEmailCareer: "በስም፣ ኢሜል ወይም ሙያ ይፈልጉ...",

    // Payment Records
    income: "ገቢ",
    expenses: "ወጪዎች",
    asratMeba: "አስራት እና መባ",
    gifts: "ስጦታዎች",
    commercial: "ንግድ",
    rents: "ቤቶች",
    category: "ምድብ",
    amount: "መጠን",
    date: "ቀን",
    churchPaymentRecords: "የቤተ ክርስቲያን ክፍያ መዝገብ",
    recordPayment: "ክፍያ ይመዝግቡ",
    paymentType: "ክፍያ ዓይነት",
    classification: "ምደባ",
    description: "መግለጫ",
    allCategories: "ሁሉም ምድቦች",
    asrat: "አስራት",
    meba: "መባ",
    utilities: "ጠቃሚ ነገሮች",
    recordNewTransaction: "አዲስ ግብይት ይመዝግቡ",

    // Congregation Dashboard
    congregationDashboard: "የእምነት ኤል ዋና ገጽ",
    detailedReport: "ዝርዝር ሪፖርት",
    memberMap: "አባል ካርታ",
    activeMembers: "ንቁ አባላት",
    inactiveMembers: "ንቁ ያልሆኑ አባላት",
    totalAssets: "ጠቅላላ ንብረቶች",
    incomeBreakdown: "ገቢ ክፍል",
    expenseBreakdown: "ወጪ ክፍል",
    financialSummary: "የገንዘብ ጠቅላላ እይታ",
    recentActivities: "ምድረ ገብ ተግባራት",
    detailedFinancialBreakdown: "ዝርዝር የገንዘብ ክፍል",
    assetsRegister: "ንብረት መዝገብ",
    asratMemberDues: "አስራት (አባል ወጪዎች)",
    mebaContribution: "መባ (አበርክቶ)",
    giftsAndDonations: "ስጦታዎች እና ለሙላዓ",
    commercialRents: "ንግድ (ቤቶች)",
    churchOperations: "የቤተ ክርስቲያን ሥራዎች",
    commercialExpenses: "ንግድ ወጪዎች",
    asratIncome: "አስራት ገቢ",
    mebaIncome: "መባ ገቢ",
    commercialRentsIncome: "ንግድ ቤት ገቢ",
    churchExpenses: "ቤተ ክርስቲያን ወጪዎች",
    netBalance: "ንጽህ ሚዛን",
    activeRate: "ንቁ ተመን",
    avgIncomePerMember: "አማካይ ገቢ በአባል",
    percentage: "በመቶ ምክንያት",
    assetName: "ንብረት ስም",
    assetCategory: "ምድብ",
    churchLocation: "ቤተ ክርስቲያን/ቦታ",
    purchaseDate: "ክስተት ቀን",

    // Student Management
    studentManagement: "የተማሪ አያያዝ",
    addStudent: "ተማሪ ጨምር",
    class: "ክፍል",
    enrollDate: "ምዝገባ ቀን",
    addNewStudent: "አዲስ ተማሪ ጨምር",
    grade9: "ክፍል 9",
    grade10: "ክፍል 10",
    grade11: "ክፍል 11",
    grade12: "ክፍል 12",
    searchByName: "በስም ይፈልጉ...",

    // School Fee Management
    schoolFeeManagement: "የትምህርት ቤት ክፍያ አያያዝ",
    recordFee: "ክፍያ ይመዝግቡ",
    studentID: "ተማሪ ID",
    month: "ወር",
    collected: "ተሰብስቦ",
    unpaid: "ግብር ያልተከፈለ",
    allFees: "ሁሉም ክፍያዎች",
    paid: "ከፍሏል",
    recordSchoolFee: "የትምህርት ቤት ክፍያ ይመዝግቡ",

    // Asset Management
    assetManagement: "ንብረት አያያዝ",
    addAsset: "ንብረት ጨምር",
    allLocations: "ሁሉም ቦታዎች",
    building: "ህንፃ",
    equipment: "ቁሳቁስ",
    furniture: "ስንጥር",
    vehicle: "ተሽከርካሪ",
    other: "ሌላ",
    totalAssetValue: "ጠቅላላ ንብረት ዋጋ",
    editAsset: "ንብረት ያርትዑ",
    addNewAsset: "አዲስ ንብረት ጨምር",
    assetValue: "ዋጋ (Birr)",
    detailedLocation: "ዝርዝር ቦታ",
    maintenance: "ጥገና",

    // Employee Management
    employeeManagement: "የሰራተኛ አያያዝ",
    addEmployee: "ሰራተኛ ጨምር",
    position: "ስራ",
    startDate: "ጀምር ቀን",
    addNewEmployee: "አዲስ ሰራተኛ ጨምር",

    // School Dashboard
    schoolDashboard: "የትምህርት ቤት ዋና ገጽ",
    overviewOfSchool: "የትምህርት ቤት ስራ እና ገቢ ጠቅላላ እይታ",
    totalStudents: "ጠቅላላ ተማሪዎች",
    feesCollected: "ክፍያ ተሰብስቦ",
    operationalExpenses: "ስራ ወጪዎች",
    balance: "ሚዛን",

    // Grade Reports
    gradeReports: "ክፍል ሪፖርቶች",
    printReports: "ሪፖርቶች ያተም",
    selectAll: "ሁሉ ይምረጡ",
    printPreview: "የህትመት ቅድመ-እይታ",
    gradeReport: "ክፍል ሪፖርት",
    abcSchool: "ABC ትምህርት ቤት",
    studentName: "የተማሪ ስም:",
    academicYear: "ትምህርት አመት:",
    subject: "ጭብጥ",
    score: "ነጥብ",
    grade: "ክፍል",
    average: "አማካይ",

    // Student Certificates
    studentCertificates: "የተማሪ ሰርተፊካተ",
    completionCertificate: "ማጠናቀቅ ሰርተፊካተ",
    achievementCertificate: "ስኬት ሰርተፊካተ",
    attendanceCertificate: "ሕضور ሰርተፊካተ",
    printCertificates: "ሰርተፊካተ ያተም",
    certificateOfCompletion: "ማጠናቀቅ ሰርተፊካተ",
    certificateOfAchievement: "ስኬት ሰርተፊካተ",
    certificateOfAttendance: "ሕضور ሰርተፊካተ",
    certifyThat: "ይህ እንደገና ለማረጋገጥ",
    hasSuccessfullyCompleted: "ትምህርት አመት ሳሎ ተሳካ",
    in: "በ",
    withCommendablePerformance: "ከላቀ አፈፃፀም እና ታማኝነት",
    awardedOn: "ተሰጠ በ",
    principal: "ኃላፊ",
    classTeacher: "ክፍል አስተማሪ",

    // General Ledger
    generalLedger: "አጠቃላይ መዝገብ",
    type: "ዓይነት",
    sector: "ዘርፍ",
    allTransactions: "ሁሉም ግብይቶች",
    incomeOnly: "ገቢ ብቻ",
    expensesOnly: "ወጪዎች ብቻ",

    // Financial Reports
    financialReports: "የገንዘብ ሪፖርቶች",
    printReport: "ሪፖርት ያተም",
    balanceSheet: "ሚዛን ሉህ",
    incomeStatement: "ገቢ መግለጫ",
    trialBalance: "ሞክመ ሚዛን",
    account: "ሂሳብ",
    debit: "ዴቢት",
    credit: "ክሬዲት",
    assets: "ንብረቶች",

    // Common UI Elements
    save: "ቁምጣጣ",
    cancel: "ተወው",
    delete: "ይህንን ይሰርዙ",
    edit: "ያርትዑ",
    view: "ይመልከቱ",
    close: "ዝጋ",
    add: "ጨምር",
    update: "ያዘምኑ",
    remove: "ያስወግዱ",
    export: "ወደ ውጭ ላኩ",
    import: "ወደ ውስጥ ምጣድ",
    download: "ያውርዱ",
    upload: "ይጫኑ",
    submit: "ሥራ",
    login: "ግባ",
    forgotPassword: "ይለፍ ቃል ረሱ?",
    logoAlt: "የገንዘብ አያያዝ ስርዓት ሎጎ",
    english: "እንግሊዝኛ",
    amharic: "አማርኛ",
    oromo: "ኦሮሞ",
    announcements: "ማስታወቂያዎች",
    studentManagement: "የተማሪ አያያዝ",
    studentIDCards: "የተማሪ ID ካርዶች",
    gradeReports: "ክፍል ሪፖርቶች",
    certificates: "ሰርተፊካተ",
    schoolFees: "የትምህርት ቤት ክፍያዎች",
    staffManagement: "የሰራተኛ አያያዝ",
    memberIDCards: "የአባላት ID ካርዶች",
    employeeManagement: "የሰራተኛ አያያዝ",
    generalLedger: "አጠቃላይ መዝገብ",
  },
  or: {
    // TopBar
    welcome: "Akam nuraa gale",
    logout: "Ba'uu",
    username: "Maqaa Itti Aanaa",
    password: "Jechaa Icciitii",
    sector: "Kutaa",
    congregation: "Waldaa",
    development: "Guddina",
    school: "Barsiisaa",
    dashboard: "Fuuldura",
    language: "Afan",
    theme: "Kaabaa",
    darkMode: "Haalli Gara",
    lightMode: "Haalli Ifaa",

    // Sidebar Navigation
    overview: "Ilaalcha Guud",
    members: "Miseenota",
    memberManagement: "Hojii Hoolaa Miseenota",
    memberLocations: "Bakka Miseenota",
    payments: "Kafalamaa",
    paymentRecords: "Galmeessaa Kafalamaa",
    assets: "Qabeenya",
    assetManagement: "Hojii Qabeenya",
    reports: "Gabaasa",
    settings: "Qindaa'ina",

    // Dashboard
    totalMembers: "Waliigala Miseenota",
    totalIncome: "Waliigala Galii",
    totalExpenses: "Waliigala Baasii",
    netBalance: "Walqixxaa Qamaa",
    incomeVsExpenses: "Galii Keessaa Baasii",
    memberStatistics: "Herrega Miseenota",
    recentActivity: "Hojiiwwan Dhihoo ta'an",

    // Member Management
    addMember: "Miseensa Dabaluu",
    editMember: "Miseensa Sesuun",
    deleteMember: "Miseensa Uffisuu",
    memberName: "Maqaa Miseenaa",
    career: "Hojiiwwan",
    location: "Bakka",
    photo: "Suuraa",
    inauguratedDate: "Guyyaa Banuu",
    contributions: "Fedhii",
    memberIDCards: "Kaardii ID Miseenota",
    fullName: "Maqaa Guutuu",
    email: "Imeeyli",
    phone: "Bilbila",
    careerProfession: "Hojiiwwan/Hojiiwwan",
    joinDate: "Guyyaa Seenuun",
    viewDetails: "Balaa'ina Ilaaluu",
    addNewMember: "Miseensa Baraa Dabaluu",
    allStatus: "Haala Hundinuu",
    searchByNameEmailCareer: "Maqaa, Imeeyli ykn Hojiiwwan Barbaachu...",

    // Payment Records
    income: "Galii",
    expenses: "Baasii",
    asratMeba: "Asrat & Meba",
    gifts: "Haa'aa",
    commercial: "Kaasaa",
    rents: "Kiraayya",
    category: "Gosa",
    amount: "Hamma",
    date: "Guyyaa",
    churchPaymentRecords: "Galmeessaa Kafalamaa Mana Waaqaa",
    recordPayment: "Kafalamaa Galmeessuu",
    paymentType: "Gosa Kafalamaa",
    classification: "Ramaddii",
    description: "Ibsa",
    allCategories: "Ramaddii Hundinuu",
    asrat: "Asrat",
    meba: "Meba",
    utilities: "Meeshaalee",
    recordNewTransaction: "Daldalaa Baraa Galmeessuu",

    // Congregation Dashboard
    congregationDashboard: "Fuuldura Waldaa",
    detailedReport: "Gabaasa Shallagaa",
    memberMap: "Kaartaa Miseenota",
    activeMembers: "Miseenota Hojjayan",
    inactiveMembers: "Miseenota Hojii Jalqaba",
    totalAssets: "Waliigala Qabeenya",
    incomeBreakdown: "Qaamoota Galii",
    expenseBreakdown: "Qaamoota Baasii",
    financialSummary: "Gabaasa Maalliyaa",
    recentActivities: "Hojiiwwan Dhihoo ta'an",
    detailedFinancialBreakdown: "Qaamoota Maalliyaa Shallagaa",
    assetsRegister: "Galmeessaa Qabeenya",
    asratMemberDues: "Asrat (Kafalamaa Miseenota)",
    mebaContribution: "Meba (Fedhii)",
    giftsAndDonations: "Haa'aa fi Haa'aa",
    commercialRents: "Kaasaa (Kiraayya)",
    churchOperations: "Hojiiwwan Mana Waaqaa",
    commercialExpenses: "Baasii Kaasaa",
    asratIncome: "Galii Asrat",
    mebaIncome: "Galii Meba",
    commercialRentsIncome: "Galii Kiraayya Kaasaa",
    churchExpenses: "Baasii Mana Waaqaa",
    netBalance: "Walqixxaa Barbaachuu",
    activeRate: "Haa'uu Hojjayan",
    avgIncomePerMember: "Galii Giddugaleessa Miseenota",
    percentage: "Dhibbantaa",
    assetName: "Maqaa Qabeenya",
    assetCategory: "Ramaddii",
    churchLocation: "Mana Waaqaa/Bakka",
    purchaseDate: "Guyyaa Bitaa",
    status: "Haala",

    // Student Management
    studentManagement: "Hojii Barattoota",
    addStudent: "Barattoo Dabaluu",
    class: "Kutaa",
    enrollDate: "Guyyaa Rajiisuu",
    addNewStudent: "Barattoo Baraa Dabaluu",
    grade9: "Kutaa 9",
    grade10: "Kutaa 10",
    grade11: "Kutaa 11",
    grade12: "Kutaa 12",
    searchByName: "Maqaa Barbaachu...",

    // School Fee Management
    schoolFeeManagement: "Hojii Kafalamaa Barsiisaa",
    recordFee: "Kafalamaa Galmeessuu",
    studentID: "ID Barattoo",
    month: "Jiida",
    collected: "Walitti Qabame",
    unpaid: "Kafalamaa Hin Taane",
    allFees: "Kafalamaa Hundinuu",
    paid: "Kafalame",
    recordSchoolFee: "Kafalamaa Barsiisaa Galmeessuu",

    // Asset Management
    assetManagement: "Hojii Qabeenya",
    addAsset: "Qabeenya Dabaluu",
    allLocations: "Bakka Hundinuu",
    building: "Manaa",
    equipment: "Meeshaalee",
    furniture: "Midhaan",
    vehicle: "Konkolaata",
    other: "Kan Biraa",
    totalAssetValue: "Waliigala Gatii Qabeenya",
    editAsset: "Qabeenya Sesuun",
    addNewAsset: "Qabeenya Baraa Dabaluu",
    assetValue: "Gatii (Birr)",
    detailedLocation: "Bakka Shallagaa",
    maintenance: "Miidhaasan",

    // Employee Management
    employeeManagement: "Hojii Hojjeettota",
    addEmployee: "Hojjeettaa Dabaluu",
    position: "Urjii",
    startDate: "Guyyaa Jalqabuu",
    addNewEmployee: "Hojjeettaa Baraa Dabaluu",

    // School Dashboard
    schoolDashboard: "Fuuldura Barsiisaa",
    overviewOfSchool: "Ilaalcha Guud Hojiiwwan fi Maalliyaa Barsiisaa",
    totalStudents: "Waliigala Barattoota",
    feesCollected: "Kafalamaa Walitti Qabame",
    operationalExpenses: "Baasii Hojiiwwan",
    balance: "Walqixxaa",

    // Grade Reports
    gradeReports: "Gabaasa Kutaa",
    printReports: "Gabaasa Mangilaa",
    selectAll: "Hundinuu Filadhu",
    printPreview: "Simiinaa Mangilaa",
    gradeReport: "Gabaasa Kutaa",
    abcSchool: "Barsiisaa ABC",
    studentName: "Maqaa Barattoo:",
    academicYear: "Waggaa Barsiisaa:",
    subject: "Gamtaa",
    score: "Qabxii",
    grade: "Kutaa",
    average: "Giddugaleessa",

    // Student Certificates
    studentCertificates: "Serifakaatota Barattoota",
    completionCertificate: "Serifakaata Xumuruu",
    achievementCertificate: "Serifakaata Milkaa'ina",
    attendanceCertificate: "Serifakaata Hiriiru",
    printCertificates: "Serifakaata Mangilaa",
    certificateOfCompletion: "Serifakaata Xumuruu",
    certificateOfAchievement: "Serifakaata Milkaa'ina",
    certificateOfAttendance: "Serifakaata Hiriiru",
    certifyThat: "Kun itti fufuuf",
    hasSuccessfullyCompleted: "waggaa barsiisaa guutuun milkaa'e",
    in: "keessaa",
    withCommendablePerformance: "haala fuuldura gaarii fi falminaa",
    awardedOn: "kennameef",
    principal: "Hogganaa",
    classTeacher: "Barsiisa Kutaa",

    // General Ledger
    generalLedger: "Galmeessaa Guud",
    type: "Gosa",
    sector: "Kutaa",
    allTransactions: "Daldalaa Hundinuu",
    incomeOnly: "Galii Qofa",
    expensesOnly: "Baasii Qofa",

    // Financial Reports
    financialReports: "Gabaasa Maalliyaa",
    printReport: "Gabaasa Mangilaa",
    balanceSheet: "Gabaasa Walqixxaa",
    incomeStatement: "Gabaasa Galii",
    trialBalance: "Walqixxaa Faallaa",
    account: "Akkaawuntii",
    debit: "Debii",
    credit: "Kreediiti",
    // assets: "Qabeenya",

    // Common UI Elements
    save: "Kuufuu",
    cancel: "Haqi'uu",
    delete: "Uffisuu",
    edit: "Sesuun",
    view: "Ilaaluu",
    close: "Chufi",
    add: "Dabaluu",
    update: "Kaasuu",
    remove: "Uffisuu",
    export: "Baasuu",
    import: "Seenuun",
    download: "Buusuu",
    upload: "Ol Seenuun",
    submit: "Erguudha",
    login: "Gali",
    forgotPassword: "Jechaa Icciitii Irraanfate?",
    logoAlt: "Logo System Management Finance",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "am"
    }
    return "am"
  })

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }, [theme])

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        theme,
        t,
        toggleTheme,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
