"use client"
import { useData } from "../../context/DataContext"
import "../../styles/MemberDetails.css"

export default function MemberDetails({ memberId, onClose }) {
  const { data } = useData()
  const member = data.members.find((m) => m.id === Number.parseInt(memberId))

  if (!member) {
    return <div className="member-details-container">Member not found</div>
  }

  const memberPayments = data.payments.filter((p) => p.memberId === member.id)
  const totalContributions = memberPayments.reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="member-details-overlay" onClick={onClose}>
      <div className="member-details-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="member-details-header">
          <img src={member.photo || "/placeholder.svg"} alt={member.name} className="member-photo" />
          <div className="member-info">
            <h1>{member.name}</h1>
            <p className="member-career">{member.career}</p>
            <p className="member-location">📍 {member.location}</p>
          </div>
        </div>

        <div className="member-details-grid">
          <div className="detail-section">
            <h3>Contact Information</h3>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span className="value">{member.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Phone:</span>
              <span className="value">{member.phone}</span>
            </div>
            <div className="detail-item">
              <span className="label">Inauguration Date:</span>
              <span className="value">{new Date(member.inaugurated).toLocaleDateString()}</span>
            </div>
            <div className="detail-item">
              <span className="label">Status:</span>
              <span className={`value status ${member.status}`}>{member.status}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Contribution Summary</h3>
            <div className="detail-item">
              <span className="label">Total Contributions:</span>
              <span className="value amount">${totalContributions.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <span className="label">Payment Count:</span>
              <span className="value">{memberPayments.length}</span>
            </div>
            <div className="contribution-list">
              {memberPayments.map((p) => (
                <div key={p.id} className="contribution-item">
                  <span>{p.description}</span>
                  <span className="amount">${p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
