import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import AccountContainer from "../../../components/containers/accountContainer/AccountContainer"
import "./edit.css"
import Axios from "axios"
import { changeUserName } from "../../../app/slices/UserSlice"
import { Link, useNavigate } from "react-router-dom"
import { storeToken } from "../../../app/slices/TokenSlice"



export default function Edit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function removeToken(){
    dispatch(storeToken(""))
    navigate("/")
  }
  const editPlaceholderAccounts = 
    {
      type: "Checking",
      accountNumber: "(x3448)",
      balance: "$48,098.43",
      description: "Available balance",
    }


  const token = useSelector((state) => state.token)
  const user = useSelector((state) => state.userData)

  const accounts = [1, 2, 3]

  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }

  const [inputUserName, setInputUserName] = useState("")

  const userName = user.userName
  const firstName = user.firstName
  const lastName = user.lastName

  async function submitUpdatedUserInfos(e) {
    e.preventDefault()
    const updatedUserInfos = {
      userName: inputUserName,
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
    try {
      const response = await Axios.put(
        "http://localhost:3001/api/v1/user/profile",
        updatedUserInfos,
        { headers },
      )
      if (response.status === 200) {
        dispatch(changeUserName(inputUserName))
      }
    } catch (error) {
      console.log("Failed PUT request")
    }
  }

  return (
    <>
      <header className="editHeader editElement">
        <nav>
          <div className="topBlock">
            <i className="fa-solid fa-vault"></i>
            <h1>
              <b>Argent</b> Bank
            </h1>
          </div>
          <div className="menu">
            <Link to="/profile" className="user">
              <p>{userName}</p>
              <i className="userIcon fa-solid fa-circle-user"></i>
            </Link>
            <Link to="/profile">
              <i className="fa-solid fa-gear"></i>
            </Link>
            <Link to="/" onClick={removeToken}>
              <i className="fa-solid fa-power-off"></i>
            </Link>
          </div>
        </nav>
      </header>
      <main className="editElement">
        <h2>Edit user info</h2>
        <form
          action=""
          onSubmit={(e) => {
            submitUpdatedUserInfos(e)
          }}
        >
          <div className="inputElabelContainer">
            <label htmlFor="userName">User name: </label>
            <input
              value={isFocused ? inputUserName : userName}
              onChange={(e) => setInputUserName(e.target.value)}
              onFocus={handleFocus}
              type="text"
              name="userName"
              id="userName"
            />
          </div>
          <div className="inputElabelContainer">
            <label htmlFor="firstName">First name: </label>
            <input
              value={firstName}
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="inputElabelContainer">
            <label htmlFor="lastName">Last name: </label>
            <input value={lastName} type="text" name="lastName" id="lastName" />
          </div>
          <div className="formButtonContainer">
            <button type="submit">Save</button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsFocused(false)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        <section className="accounts">
          {accounts.map((account) => (
            <AccountContainer key={account} accountData={editPlaceholderAccounts} />
          ))}
        </section>
      </main>
      <footer>
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}
