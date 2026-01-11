"use client"

import { useState } from "react"
import { useData } from "../../context/DataContext"
import { useLanguage } from "../../context/LanguageContext"
import StatCard from "../common/StatCard"
import ActivityList from "../common/ActivityList"
import MemberMap from "../congregation/MemberMap"
import "../../styles/DashboardStyles.css"

export default function CongregationDashboard() {
  const { data } = useData()
  const { t } = useLanguage()
  const [viewMode, setViewMode] = useState("overview")

  const totalMembers = data.members.length
  const activeMembers = data.members.filter((m) => m.status === "active").length
  const inactiveMembers = data.members.filter((m) => m.status === "inactive").length

  // Calculate categorized income and expenses
  const congregationTransactions = data.transactions.filter((t) => t.sector === "congregation")
  const asratIncome = congregationTransactions
    .filter((t) => t.type === "income" && t.category === "asrat")
    .reduce((sum, t) => sum + t.amount, 0)
  const mebaIncome = congregationTransactions
    .filter((t) => t.type === "income" && t.category === "meba")
    .reduce((sum, t) => sum + t.amount, 0)
  const giftsIncome = congregationTransactions
    .filter((t) => t.type === "income" && t.category === "gifts")
    .reduce((sum, t) => sum + t.amount, 0)
  const commercialIncome = congregationTransactions
    .filter((t) => t.type === "income" && t.category === "commercial")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalIncome = asratIncome + mebaIncome + giftsIncome + commercialIncome
  const churchExpenses = congregationTransactions
    .filter((t) => t.type === "expense" && t.expenseType === "church")
    .reduce((sum, t) => sum + t.amount, 0)
  const commercialExpenses = congregationTransactions
    .filter((t) => t.type === "expense" && t.expenseType === "commercial")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = churchExpenses + commercialExpenses

  const churchAssets = data.assets.filter((a) => a.sector === "congregation")
  const totalAssetValue = churchAssets.reduce((sum, a) => sum + a.value, 0)

  const recentActivities = [
    ...data.payments.map((p) => ({
      id: p.id,
      type: "payment",
      title: "Payment Recorded",
      description: `$${p.amount} - ${p.description}`,
      date: new Date(p.date),
    })),
    ...data.announcements
      .filter((a) => a.sector === "congregation")
      .map((a) => ({
        id: a.id,
        type: "announcement",
        title: a.title,
        description: a.content,
        date: new Date(a.date),
      })),
  ]
    .sort((a, b) => b.date - a.date)
    .slice(0, 5)

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <h1>{t('congregationDashboard')}</h1>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "overview" ? "active" : ""}`}
            onClick={() => setViewMode("overview")}
          >
            {t('overview')}
          </button>
          <button
            className={`toggle-btn ${viewMode === "detailed" ? "active" : ""}`}
            onClick={() => setViewMode("detailed")}
          >
            Detailed Report
          </button>
          <button className={`toggle-btn ${viewMode === "map" ? "active" : ""}`} onClick={() => setViewMode("map")}>
            Member Map
          </button>
        </div>
      </div>

      {viewMode === "overview" && (
        <>
          <div className="stats-grid">
            <StatCard label={t('totalMembers')} value={totalMembers} icon="👥" color="#0f766e" />
            <StatCard label={t('activeMembers')} value={activeMembers} icon="✓" color="#10b981" />
            <StatCard label={t('inactiveMembers')} value={inactiveMembers} icon="⊘" color="#ef4444" />
            <StatCard label={t('totalAssets')} value={`$${totalAssetValue.toLocaleString()}`} icon="🏛️" color="#f59e0b" />
          </div>

          <div className="income-section">
            <h2>{t('incomeBreakdown')}</h2>
            <div className="income-grid">
              <div className="income-card">
                <div className="income-label">Asrat (Member Dues)</div>
                <div className="income-amount">${asratIncome.toLocaleString()}</div>
                <div className="income-percentage">{((asratIncome / totalIncome) * 100).toFixed(1)}% of total</div>
              </div>
              <div className="income-card">
                <div className="income-label">Meba (Contribution)</div>
                <div className="income-amount">${mebaIncome.toLocaleString()}</div>
                <div className="income-percentage">{((mebaIncome / totalIncome) * 100).toFixed(1)}% of total</div>
              </div>
              <div className="income-card">
                <div className="income-label">Gifts & Donations</div>
                <div className="income-amount">${giftsIncome.toLocaleString()}</div>
                <div className="income-percentage">{((giftsIncome / totalIncome) * 100).toFixed(1)}% of total</div>
              </div>
              <div className="income-card">
                <div className="income-label">Commercial (Rents)</div>
                <div className="income-amount">${commercialIncome.toLocaleString()}</div>
                <div className="income-percentage">{((commercialIncome / totalIncome) * 100).toFixed(1)}% of total</div>
              </div>
            </div>
          </div>

          <div className="expense-section">
            <h2>{t('expenseBreakdown')}</h2>
            <div className="expense-grid">
              <div className="expense-card">
                <div className="expense-label">{t('churchOperations')}</div>
                <div className="expense-amount">${churchExpenses.toLocaleString()}</div>
                <div className="expense-percentage">
                  {((churchExpenses / totalExpenses) * 100).toFixed(1)}% of total
                </div>
              </div>
              <div className="expense-card">
                <div className="expense-label">{t('commercialExpenses')}</div>
                <div className="expense-amount">${commercialExpenses.toLocaleString()}</div>
                <div className="expense-percentage">
                  {((commercialExpenses / totalExpenses) * 100).toFixed(1)}% of total
                </div>
              </div>
            </div>
          </div>

          <div className="summary-section">
            <h2>{t('financialSummary')}</h2>
            <div className="summary-grid">
              <div className="summary-card total-income">
                <div className="summary-label">{t('totalIncome')}</div>
                <div className="summary-value">${totalIncome.toLocaleString()}</div>
              </div>
              <div className="summary-card total-expense">
                <div className="summary-label">{t('totalExpenses')}</div>
                <div className="summary-value">${totalExpenses.toLocaleString()}</div>
              </div>
              <div className={`summary-card balance ${totalIncome - totalExpenses >= 0 ? "positive" : "negative"}`}>
                <div className="summary-label">{t('netBalance')}</div>
                <div className="summary-value">${(totalIncome - totalExpenses).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="activity-section">
            <h2>{t('recentActivities')}</h2>
            <ActivityList activities={recentActivities} />
          </div>
        </>
      )}

      {viewMode === "detailed" && (
        <div className="detailed-report">
          <div className="report-section">
            <h2>{t('memberStatistics')}</h2>
            <div className="member-stats-grid">
              <div className="stat-box">
                <div className="stat-number">{totalMembers}</div>
                <div className="stat-label">{t('totalMembers')}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{((activeMembers / totalMembers) * 100).toFixed(1)}%</div>
                <div className="stat-label">{t('activeRate')}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">${(totalIncome / totalMembers).toFixed(2)}</div>
                <div className="stat-label">{t('avgIncomePerMember')}</div>
              </div>
            </div>
          </div>

          <div className="report-section">
            <h2>{t('detailedFinancialBreakdown')}</h2>
            <table className="detailed-table">
              <thead>
                <tr>
                  <th>{t('category')}</th>
                  <th>{t('amount')}</th>
                  <th>{t('percentage')}</th>
                  <th>{t('status')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="income-row">
                  <td>{t('asratIncome')}</td>
                  <td>${asratIncome.toLocaleString()}</td>
                  <td>{((asratIncome / totalIncome) * 100).toFixed(1)}%</td>
                  <td className="status-badge income">+</td>
                </tr>
                <tr className="income-row">
                  <td>{t('mebaIncome')}</td>
                  <td>${mebaIncome.toLocaleString()}</td>
                  <td>{((mebaIncome / totalIncome) * 100).toFixed(1)}%</td>
                  <td className="status-badge income">+</td>
                </tr>
                <tr className="income-row">
                  <td>{t('giftsAndDonations')}</td>
                  <td>${giftsIncome.toLocaleString()}</td>
                  <td>{((giftsIncome / totalIncome) * 100).toFixed(1)}%</td>
                  <td className="status-badge income">+</td>
                </tr>
                <tr className="income-row">
                  <td>{t('commercialRentsIncome')}</td>
                  <td>${commercialIncome.toLocaleString()}</td>
                  <td>{((commercialIncome / totalIncome) * 100).toFixed(1)}%</td>
                  <td className="status-badge income">+</td>
                </tr>
                <tr className="expense-row">
                  <td>Church Expenses</td>
                  <td>${churchExpenses.toLocaleString()}</td>
                  <td>{((churchExpenses / totalExpenses) * 100).toFixed(1)}%</td>
                  <td className="status-badge expense">−</td>
                </tr>
                <tr className="expense-row">
                  <td>Commercial Expenses</td>
                  <td>${commercialExpenses.toLocaleString()}</td>
                  <td>{((commercialExpenses / totalExpenses) * 100).toFixed(1)}%</td>
                  <td className="status-badge expense">−</td>
                </tr>
                <tr className="balance-row">
                  <td className="label-bold">Net Balance</td>
                  <td className="value-bold">${(totalIncome - totalExpenses).toLocaleString()}</td>
                  <td>100%</td>
                  <td className="status-badge balance">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="report-section">
            <h2>{t('assetsRegister')}</h2>
            <table className="assets-table">
              <thead>
                <tr>
                  <th>{t('assetName')}</th>
                  <th>{t('assetCategory')}</th>
                  <th>{t('churchLocation')}</th>
                  <th>{t('assetValue')}</th>
                  <th>{t('purchaseDate')}</th>
                  <th>{t('status')}</th>
                </tr>
              </thead>
              <tbody>
                {churchAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td>{asset.name}</td>
                    <td>{asset.category}</td>
                    <td>{asset.location}</td>
                    <td>${asset.value.toLocaleString()}</td>
                    <td>{new Date(asset.purchaseDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-label ${asset.status}`}>{asset.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewMode === "map" && <MemberMap />}
    </div>
  )
}
