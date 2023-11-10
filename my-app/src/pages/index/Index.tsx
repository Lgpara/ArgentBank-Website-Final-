import iconChat from "../../../appdata/images/icon-chat.png"
import iconMoney from "../../../appdata/images/icon-money.png"
import iconSecurity from "../../../appdata/images/icon-security.png"
import FeatureItem from "../../components/containers/feature-item"

function Index() {
  const featureItemsData = [
    {
      imgSrc: iconChat,
      title: "You are our #1 priority",
      txt: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      imgSrc: iconMoney,
      title: "More savings means higher rates",
      txt: "The more you save with us, the higher your interest rate will be!",
    },
    {
      imgSrc: iconSecurity,
      title: "Security you can trust",
      txt: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ]

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureItemsData.map((Feature)=>(
          <FeatureItem featureData={Feature} />
        ))}
      </section>
    </main>
  )
}
export default Index
