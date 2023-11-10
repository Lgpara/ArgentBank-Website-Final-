export default function FeatureItem(props) {
    const {imgSrc, title, txt} = props.featureData
  return (
    <div className="feature-item">
      <img src={imgSrc} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {txt}
      </p>
    </div>
  )
}
