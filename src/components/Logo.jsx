export default function Logo({ size = "medium" }) {
  const sizeMap = {
    small: "32px",
    medium: "48px",
    large: "64px",
  }

  return (
    <img
      src="/EECMYlogo.png"
      alt="Financial Management System Logo"
      style={{ width: sizeMap[size], height: sizeMap[size] }}
    />
  )
}
