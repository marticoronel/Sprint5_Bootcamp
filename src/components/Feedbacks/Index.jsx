import "./feedbacks.css"
import testimonials from '../../data/testimonials.json';


export default function Feedbacks() {
    return (
        <div className="feedbacks-container">
            <img className="bg-quotes" src="images/bg-quotes.png" alt="" />
            <div className="comentario">
                {testimonials.map(data => (
                    <div className="testimonialCard">
                        <p>{data.quote}</p>
                        <div className="founder-info">
                            <img className="profile-image" src={data.image} />
                            <div className="founder-name">
                                <span className="name">{data.name}</span>
                                <span className="status">{data.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}