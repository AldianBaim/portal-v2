
const CardSkeletonBook = () => {
    return (
        <div className="card shadow-sm border-0" aria-hidden="true">
            <div className="card-img-top placeholder" style={{height: '300px'}}></div>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                </p>
            </div>
        </div>
    )
}  

export default CardSkeletonBook