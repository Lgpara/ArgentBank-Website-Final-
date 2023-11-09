import { useLocation } from "react-router";

export default function AccountContainer(props) {
  const location = useLocation()
  const thisLocation = location.pathname
  const { type, accountNumber, balance, description } = props.accountData;

  return (
    <section className={thisLocation === "/profile/edit"?  "account2 account": "account"}>
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank {type} {accountNumber}</h3>
          <p className="account-amount">{balance}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
          <i className="fa-solid fa-chevron-down fa-rotate-270"></i>
        </div>
    </section>
  )
}
