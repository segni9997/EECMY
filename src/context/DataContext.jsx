"use client"

import { createContext, useContext, useState } from "react"

const DataContext = createContext()

const INITIAL_DATA = {
  members: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-0101",
      sector: "congregation",
      joinDate: "2023-01-15",
      status: "active",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      career: "Software Engineer",
      location: "New York, NY",
      latitude: 40.7128,
      longitude: -74.006,
      inaugurated: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-0102",
      sector: "congregation",
      joinDate: "2023-02-20",
      status: "active",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      career: "Teacher",
      location: "Boston, MA",
      latitude: 42.3601,
      longitude: -71.0589,
      inaugurated: "2023-02-20",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-0103",
      sector: "congregation",
      joinDate: "2023-03-10",
      status: "active",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      career: "Doctor",
      location: "Chicago, IL",
      latitude: 41.8781,
      longitude: -87.6298,
      inaugurated: "2023-03-10",
    },
  ],
  payments: [
    { id: 1, memberId: 1, amount: 100, type: "tithe", date: "2024-01-10", description: "Monthly tithe" },
    { id: 2, memberId: 2, amount: 50, type: "offering", date: "2024-01-15", description: "Building fund offering" },
    { id: 3, memberId: 1, amount: 75, type: "donation", date: "2024-01-20", description: "Missionary fund" },
  ],
  employees: [
    {
      id: 1,
      name: "Michael Brown",
      email: "michael@organization.com",
      phone: "555-0201",
      position: "Pastor",
      sector: "congregation",
      startDate: "2020-01-01",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Davis",
      email: "sarah@organization.com",
      phone: "555-0202",
      position: "Coordinator",
      sector: "development",
      startDate: "2021-06-15",
      status: "active",
    },
  ],
  students: [
    {
      id: 1,
      name: "Alice Wilson",
      email: "alice@school.com",
      phone: "555-0301",
      class: "Grade 10",
      sector: "school",
      enrollDate: "2023-09-01",
      status: "active",
    },
    {
      id: 2,
      name: "Charlie Lee",
      email: "charlie@school.com",
      phone: "555-0302",
      class: "Grade 9",
      sector: "school",
      enrollDate: "2023-09-01",
      status: "active",
    },
  ],
  schoolFees: [
    { id: 1, studentId: 1, amount: 5000, date: "2024-01-15", month: "January", status: "paid" },
    { id: 2, studentId: 2, amount: 5000, date: "2024-01-20", month: "January", status: "paid" },
  ],
  transactions: [
    {
      id: 1,
      type: "income",
      category: "asrat",
      amount: 1000,
      date: "2024-01-10",
      description: "Asrat collection",
      sector: "congregation",
      source: "members",
    },
    {
      id: 2,
      type: "income",
      category: "meba",
      amount: 500,
      date: "2024-01-11",
      description: "Meba contribution",
      sector: "congregation",
      source: "members",
    },
    {
      id: 3,
      type: "income",
      category: "gifts",
      amount: 200,
      date: "2024-01-12",
      description: "Member gifts",
      sector: "congregation",
      source: "members",
    },
    {
      id: 4,
      type: "expense",
      category: "utilities",
      amount: 200,
      date: "2024-01-12",
      description: "Electricity bill",
      sector: "congregation",
      expenseType: "church",
    },
    {
      id: 5,
      type: "income",
      category: "commercial",
      amount: 2000,
      date: "2024-01-13",
      description: "Rent income from property",
      sector: "congregation",
      expenseType: "commercial",
    },
    {
      id: 6,
      type: "expense",
      category: "commercial",
      amount: 300,
      date: "2024-01-14",
      description: "Building maintenance",
      sector: "congregation",
      expenseType: "commercial",
    },
    {
      id: 7,
      type: "income",
      category: "school_fees",
      amount: 15000,
      date: "2024-01-15",
      description: "School fees collected",
      sector: "school",
      expenseType: "school",
    },
    {
      id: 8,
      type: "expense",
      category: "school_materials",
      amount: 1000,
      date: "2024-01-16",
      description: "School supplies",
      sector: "school",
      expenseType: "school",
    },
  ],
  assets: [
    {
      id: 1,
      name: "Church Building",
      category: "Building",
      value: 500000,
      purchaseDate: "2015-01-01",
      sector: "congregation",
      status: "active",
      church: "Main Church",
      location: "New York, NY",
      description: "Main worship building",
    },
    {
      id: 2,
      name: "Church Projector",
      category: "Equipment",
      value: 5000,
      purchaseDate: "2020-06-01",
      sector: "congregation",
      status: "active",
      church: "Main Church",
      location: "New York, NY",
      description: "Sanctuary projection system",
    },
    {
      id: 3,
      name: "School Computers",
      category: "Equipment",
      value: 50000,
      purchaseDate: "2022-06-01",
      sector: "school",
      status: "active",
      church: "School Branch",
      location: "Chicago, IL",
      description: "Computer lab equipment",
    },
    {
      id: 4,
      name: "School Desks",
      category: "Furniture",
      value: 10000,
      purchaseDate: "2021-01-01",
      sector: "school",
      status: "active",
      church: "School Branch",
      location: "Chicago, IL",
      description: "Student desks and chairs",
    },
  ],
  announcements: [
    { id: 1, title: "Weekly Service", content: "Sunday service at 10 AM", date: "2024-01-20", sector: "congregation" },
    { id: 2, title: "School Holiday", content: "School closed on January 25", date: "2024-01-18", sector: "school" },
  ],
}

export function DataProvider({ children }) {
  const [data, setData] = useState(INITIAL_DATA)
  const [notifications, setNotifications] = useState([])

  const addNotification = (message, type = "success") => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 3000)
  }

  const addMember = (member) => {
    const newMember = { ...member, id: Math.max(...data.members.map((m) => m.id), 0) + 1 }
    setData((prev) => ({ ...prev, members: [...prev.members, newMember] }))
    addNotification("Member added successfully")
    return newMember
  }

  const updateMember = (id, updates) => {
    setData((prev) => ({
      ...prev,
      members: prev.members.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    }))
    addNotification("Member updated successfully")
  }

  const addPayment = (payment) => {
    const newPayment = { ...payment, id: Math.max(...data.payments.map((p) => p.id), 0) + 1 }
    setData((prev) => ({ ...prev, payments: [...prev.payments, newPayment] }))
    addNotification("Payment recorded successfully")
    return newPayment
  }

  const addStudent = (student) => {
    const newStudent = { ...student, id: Math.max(...data.students.map((s) => s.id), 0) + 1 }
    setData((prev) => ({ ...prev, students: [...prev.students, newStudent] }))
    addNotification("Student added successfully")
    return newStudent
  }

  const addSchoolFee = (fee) => {
    const newFee = { ...fee, id: Math.max(...data.schoolFees.map((f) => f.id), 0) + 1 }
    setData((prev) => ({ ...prev, schoolFees: [...prev.schoolFees, newFee] }))
    addNotification("School fee recorded successfully")
    return newFee
  }

  const addAsset = (asset) => {
    const newAsset = { ...asset, id: Math.max(...data.assets.map((a) => a.id), 0) + 1 }
    setData((prev) => ({ ...prev, assets: [...prev.assets, newAsset] }))
    addNotification("Asset added successfully")
    return newAsset
  }

  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: Math.max(...data.transactions.map((t) => t.id), 0) + 1 }
    setData((prev) => ({ ...prev, transactions: [...prev.transactions, newTransaction] }))
    addNotification("Transaction recorded successfully")
    return newTransaction
  }

  const updateAsset = (id, updates) => {
    setData((prev) => ({
      ...prev,
      assets: prev.assets.map((a) => (a.id === id ? { ...a, ...updates } : a)),
    }))
    addNotification("Asset updated successfully")
  }

  return (
    <DataContext.Provider
      value={{
        data,
        notifications,
        addMember,
        updateMember,
        addPayment,
        addStudent,
        addSchoolFee,
        addNotification,
        addAsset,
        updateAsset,
        addTransaction,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within DataProvider")
  }
  return context
}
