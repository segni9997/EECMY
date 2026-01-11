export default function SectorBoundary({ sector, children }) {
  const sectorConfig = {
    congregation: {
      color: "var(--sector-construction)",
      label: "Congregation",
      gradient: "linear-gradient(135deg, #ea580c 0%, #dc4c1a 100%)",
    },
    development: {
      color: "var(--sector-development)",
      label: "Development",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    },
    school: {
      color: "var(--sector-school)",
      label: "School",
      gradient: "linear-gradient(135deg, #0d7765 0%, #055854 100%)",
    },
  }

  const config = sectorConfig[sector]

  if (!config) {
    console.error(`Invalid sector: ${sector}`)
    return <div>{children}</div>
  }

  return (
    <div
      style={{
        borderLeft: `6px solid ${config.color}`,
        borderRadius: "8px",
        background: "var(--bg-primary)",
        padding: "1.5rem",
        marginBottom: "1.5rem",
        boxShadow: "var(--shadow-md)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1.5rem",
          left: "1.5rem",
          background: config.gradient,
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontSize: "0.875rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {config.label}
      </div>
      <div style={{ marginTop: "1rem" }}>{children}</div>
    </div>
  )
}
