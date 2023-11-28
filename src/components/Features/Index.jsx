import "./features.css"
import features from '../../data/features.json';
export default function Features() {
    return (
        <>
            <div className="features-container" id="features">
                <div className="contenedor">
                    {features.map(data => (
                        <div className="features__item">
                            <div className="img--features--cont">
                                <img className="feature-img" src={data.image} alt={data.title} />
                            </div>
                            <div className="features--text">
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}




