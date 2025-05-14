import altSrc from "./images/imgNotAvailable.png"

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:altSrc} style={{height:"200px", width:"328px"}} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"This is a custom description. This description is not accurate. This description is only here for aesthetic purposes since appropriate description is not available in the API used."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem
