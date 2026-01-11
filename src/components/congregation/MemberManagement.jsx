"use client"

import { useState } from "react"
import { useData } from "../../context/DataContext"
import DataTable from "../common/DataTable"
import FormModal from "../common/FormModal"
import MemberDetails from "./MemberDetails" // Import MemberDetails component
import "../../styles/Management.css"

export default function MemberManagement() {
  const { data, addMember, updateMember } = useData()
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingMember, setEditingMember] = useState(null)
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredMembers = data.members.filter(
    (m) =>
      (m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.career.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterStatus === "all" || m.status === filterStatus),
  )

  const handleAddMember = (formData) => {
    if (editingMember) {
      updateMember(editingMember.id, formData)
      setEditingMember(null)
    } else {
      addMember(formData)
    }
    setShowModal(false)
  }

  const handleEdit = (member) => {
    setEditingMember(member)
    setShowModal(true)
  }

  const columns = [
    { key: "name", label: "Name" },
    { key: "career", label: "Career" },
    { key: "location", label: "Location" },
    { key: "email", label: "Email" },
    { key: "joinDate", label: "Join Date" },
    { key: "status", label: "Status" },
  ]

  const actions = [
    {
      label: "View Details",
      onClick: (member) => setSelectedMemberId(member.id),
    },
    {
      label: "Edit",
      onClick: handleEdit,
    },
  ]

  return (
    <div className="management-view">
      <div className="management-header">
        <h1>Member Management</h1>
        <button
          className="btn-primary"
          onClick={() => {
            setEditingMember(null)
            setShowModal(true)
          }}
        >
          + Add Member
        </button>
      </div>

      <div className="management-toolbar">
        <input
          type="text"
          placeholder="Search by name, email, or career..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <DataTable columns={columns} data={filteredMembers} actions={actions} />

      {showModal && (
        <FormModal
          title={editingMember ? "Edit Member" : "Add New Member"}
          onClose={() => {
            setShowModal(false)
            setEditingMember(null)
          }}
          onSubmit={handleAddMember}
          fields={[
            { name: "name", label: "Full Name", type: "text", required: true, value: editingMember?.name || "" },
            { name: "email", label: "Email", type: "email", required: true, value: editingMember?.email || "" },
            { name: "phone", label: "Phone", type: "tel", required: true, value: editingMember?.phone || "" },
            {
              name: "career",
              label: "Career/Profession",
              type: "text",
              required: true,
              value: editingMember?.career || "",
            },
            { name: "location", label: "Location", type: "text", required: true, value: editingMember?.location || "" },
            {
              name: "sector",
              label: "Sector",
              type: "select",
              options: ["congregation", "development", "school"],
              required: true,
              value: editingMember?.sector || "congregation",
            },
            {
              name: "status",
              label: "Status",
              type: "select",
              options: ["active", "inactive"],
              required: true,
              value: editingMember?.status || "active",
            },
          ]}
        />
      )}
      {selectedMemberId && <MemberDetails memberId={selectedMemberId} onClose={() => setSelectedMemberId(null)} />}
    </div>
  )
}
