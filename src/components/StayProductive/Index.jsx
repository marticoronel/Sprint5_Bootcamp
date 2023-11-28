import "./stayProductive.css"

export default function StayProductive() {
    return (<>
        <div className="section-container">
            <img className="stayProductive__image" src="images/illustration-stay-productive.png" alt="" />
            <div className="stayProductive__text">
                <h1 className="section__title"> Stay productive,<br /> wherever you are </h1>
                <p className="section__text"> Never let location be an issue when accessing your files. Fylo has you <br /> covered for all of your file storage needs.</p>
                <p className="section__text"> Securely share files and folders with friends, family and colleagues for live <br />collaboration. No email attachments required.</p>
                <a className="stayProductive__anchor" href="">See how Fylo works
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="hsl(176, 68%, 64%)" class="bi bi-arrow-right-circle-fill svg__flecha" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </a>
            </div>
        </div>
    </>)
}