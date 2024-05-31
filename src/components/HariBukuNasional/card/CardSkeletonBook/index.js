
const CardSkeletonBook = () => {
    return (
        <div class="card shadow-sm border-0" aria-hidden="true">
            <div className="card-img-top placeholder" style={{height: '300px'}}></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                </p>
            </div>
        </div>
    )
}  

export default CardSkeletonBook