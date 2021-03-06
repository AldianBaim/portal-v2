import styles from "./CardBook.module.scss"

const CardBook = ({ image, title, typeBook, level }) => {

    // Shuffle array content image for background cover book
    const ellipseArray = ['ellipse-1.png', 'ellipse-2.png', 'ellipse-3.png']
    const ellipseBackground = ellipseArray.sort(() => (Math.random() > 0.3) ? 1 : -1)

    return (
        <div className={`card border-0 mt-3 ${styles.card}`}>
            <div className="card-header text-center text-lg-start bg-white p-0 border-0" style={{ backgroundImage: `url(/assets/image/home/${ellipseBackground[1]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                <img src={image || '/assets/image/catalog/book-placeholder.jpg'} alt={title} className={styles['img-size']} />
            </div>
            <div className="card-body px-5 px-lg-0 py-2">

                {typeBook === 'pdf' && (<span className="badge rounded-pill bg-danger mt-2">PDF</span>)}
                {typeBook === 'audio' && (<span className="badge rounded-pill bg-success mt-2">Audio</span>)}
                {typeBook === 'interactive' && (<span className="badge rounded-pill bg-primary mt-2">Interaktif</span>)}
                <span className="badge rounded-pill bg-secondary mt-2 ms-1">{level}</span>

                <div className="my-2">{title}</div>
            </div>
        </div>
    )
}

export default CardBook