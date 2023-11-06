import "./AccountContainer.css"

export default function AccountContainer() {
  const accountName = "Argent Bank Checking (x3448)"
  const accountBalance = "$48,098.43"
  const infoMessage = "Available balance"

  return (
    <div className="AccountContainer">
      <div className="data">
        <p className="accountName">{accountName}</p>
        <p className="accountBalance">{accountBalance}</p>
        <p className="infoMessage">{infoMessage}</p>
      </div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  )
}
