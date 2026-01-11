"use client"

import { useState } from "react"
import { useData } from "../../context/DataContext"
import DataTable from "../common/DataTable"
import FormModal from "../common/FormModal"
import "../../styles/Management.css"

export default function AssetManagement() {
  const { data, addAsset, updateAsset } = useData()
  const [showModal, setShowModal] = useState(false)
  const [editingAsset, setEditingAsset] = useState(null)
  const [filterChurch, setFilterChurch] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")

  const churches = ["all", ...new Set(data.assets.map((a) => a.church))]

  const filteredAssets = data.assets.filter(
    (a) =>
      (filterChurch === "all" || a.church === filterChurch) &&
      (filterCategory === "all" || a.category === filterCategory),
  )

  const handleAddAsset = (formData) => {
    if (editingAsset) {
      updateAsset(editingAsset.id, formData)
      setEditingAsset(null)
    } else {
      addAsset(formData)
    }
    setShowModal(false)
  }

  const handleEdit = (asset) => {
    setEditingAsset(asset)
    setShowModal(true)
  }

  const totalValue = filteredAssets.reduce((sum, a) => sum + a.value, 0)

  const columns = [
    { key: "name", label: "Asset Name" },
    { key: "category", label: "Category" },
    { key: "church", label: "Church/Location" },
    { key: "value", label: "Value", format: (val) => `Birr ${val.toLocaleString()}` },
    { key: "purchaseDate", label: "Purchase Date" },
    { key: "status", label: "Status" },
  ]

  const actions = [
    {
      label: "Edit",
      onClick: handleEdit,
    },
    {
      label: "View",
      onClick: (asset) => console.log(asset),
    },
  ]

  return (
    <div className="management-view">
      <div className="management-header">
        <h1>Asset Management</h1>
        <button
          className="btn-primary"
          onClick={() => {
            setEditingAsset(null)
            setShowModal(true)
          }}
        >
          + Add Asset
        </button>
      </div>

      <div className="management-toolbar">
        <select value={filterChurch} onChange={(e) => setFilterChurch(e.target.value)} className="filter-select">
          {churches.map((church) => (
            <option key={church} value={church}>
              {church === "all" ? "All Locations" : church}
            </option>
          ))}
        </select>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="filter-select">
          <option value="all">All Categories</option>
          <option value="Building">Building</option>
          <option value="Equipment">Equipment</option>
          <option value="Furniture">Furniture</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Other">Other</option>
        </select>
        <div className="filter-summary">
          Total Asset Value: <strong>Birr {totalValue.toLocaleString()}</strong>
        </div>
      </div>

      <DataTable columns={columns} data={filteredAssets} actions={actions} />

      {showModal && (
        <FormModal
          title={editingAsset ? "Edit Asset" : "Add New Asset"}
          onClose={() => {
            setShowModal(false)
            setEditingAsset(null)
          }}
          onSubmit={handleAddAsset}
          fields={[
            { name: "name", label: "Asset Name", type: "text", required: true, value: editingAsset?.name || "" },
            {
              name: "category",
              label: "Category",
              type: "select",
              options: ["Building", "Equipment", "Furniture", "Vehicle", "Other"],
              required: true,
              value: editingAsset?.category || "",
            },
            { name: "value", label: "Value ($)", type: "number", required: true, value: editingAsset?.value || "" },
            {
              name: "church",
              label: "Church/Location",
              type: "text",
              required: true,
              value: editingAsset?.church || "",
            },
            {
              name: "location",
              label: "Detailed Location",
              type: "text",
              required: true,
              value: editingAsset?.location || "",
            },
            {
              name: "description",
              label: "Description",
              type: "text",
              required: false,
              value: editingAsset?.description || "",
            },
            {
              name: "purchaseDate",
              label: "Purchase Date",
              type: "date",
              required: true,
              value: editingAsset?.purchaseDate || "",
            },
            {
              name: "status",
              label: "Status",
              type: "select",
              options: ["active", "inactive", "maintenance"],
              required: true,
              value: editingAsset?.status || "active",
            },
          ]}
        />
      )}
    </div>
  )
}
