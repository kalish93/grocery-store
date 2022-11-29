
import './FrontImage.css'
const FrontImage =(props)=>{
    return(
        <div>
            <img className="front-img" src={props.src} alt="" />
            <div className="text">
            <h1 className="headline">{props.headline}</h1>
            <p className="moto">{props.moto}</p>
            </div>
        </div>
    )
}

export default FrontImage