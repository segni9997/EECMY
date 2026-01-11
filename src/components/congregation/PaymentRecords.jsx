"use client"

import { useState } from "react"
import { useData } from "../../context/DataContext"
import DataTable from "../common/DataTable"
import FormModal from "../common/FormModal"
import "../../styles/Management.css"

export default function PaymentRecords() {
  const { data, addTransaction } = useData()
  const [showModal, setShowModal] = useState(false)
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterExpenseType, setFilterExpenseType] = useState("all")

  const congregationTransactions = data.transactions.filter((t) => t.sector === "congregation")
  const filteredPayments =
    filterCategory === "all" && filterExpenseType === "all"
      ? congregationTransactions
      : congregationTransactions.filter(
          (t) =>
            (filterCategory === "all" || t.category === filterCategory) &&
            (filterExpenseType === "all" || t.expenseType === filterExpenseType),
        )

  const handleAddPayment = (formData) => {
    addTransaction({ ...formData, type: "income", sector: "congregation", expenseType: "church" })
    setShowModal(false)
  }

  const totalIncome = filteredPayments.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)
  const totalExpense = filteredPayments.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

  const columns = [
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount", format: (val) => `Birr ${val}` },
    { key: "type", label: "Type" },
    { key: "expenseType", label: "Classification" },
    { key: "date", label: "Date" },
    { key: "description", label: "Description" },
  ]

  return (
    <div className="management-view">
      <div className="management-header">
        <h1>Church Payment Records</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + Record Payment
        </button>
      </div>

      <div className="management-toolbar">
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="filter-select">
          <option value="all">All Categories</option>
          <option value="asrat">Asrat</option>
          <option value="meba">Meba</option>
          <option value="gifts">Gifts</option>
          <option value="utilities">Utilities</option>
          <option value="commercial">Commercial</option>
        </select>
        <select
          value={filterExpenseType}
          onChange={(e) => setFilterExpenseType(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Classifications</option>
          <option value="church">Church</option>
          <option value="commercial">Commercial</option>
        </select>
        <div className="filter-summary">
          <span>
            Income: <strong className="income">${totalIncome.toLocaleString()}</strong>
          </span>
          <span>
            Expenses: <strong className="expense">Birr {totalExpense.toLocaleString()}</strong>
          </span>
          <span>
            Balance: <strong className="balance">${(totalIncome - totalExpense).toLocaleString()}</strong>
          </span>
        </div>
      </div>

      <DataTable columns={columns} data={filteredPayments} />

      {showModal && (
        <FormModal
          title="Record New Transaction"
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPayment}
          fields={[
            {
              name: "category",
              label: "Category",
              type: "select",
              options: ["asrat", "meba", "gifts", "utilities", "commercial"],
              required: true,
            },
            { name: "amount", label: "Amount", type: "number", required: true },
            {
              name: "type",
              label: "Transaction Type",
              type: "select",
              options: ["income", "expense"],
              required: true,
            },
            { name: "description", label: "Description", type: "text", required: true },
            { name: "date", label: "Date", type: "date", required: true },
          ]}
        />
      )}
    </div>
  )
}
