import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AccountContainer from "../../components/containers/accountContainer/AccountContainer"

export default function Profile() {
  const user = useSelector((state) => state.userData)
  const profilePlaceholderAccounts = [
    {
      type: "Checking",
      accountNumber: "x8349",
      balance: "2,082.79",
      description: "Available Balance",
    },
    {
      type: "Savings",
      accountNumber: "x6712",
      balance: "10,928.42",
      description: "Available Balance",
    },
    {
      type: "Credit Card",
      accountNumber: "x8349",
      balance: "184.3",
      description: "Current Balance",
    },
  ]
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <Link to="/profile/edit">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {profilePlaceholderAccounts.map(account =>(
          <AccountContainer accountData={account}/>
        ))}
    </main>
  )
}
