import styles from './index.module.scss'

const CardProgram = ({backgroundColor, image, title, description}) => {

    return (
        <section className={`card-body border-0 card-program p-4 ${backgroundColor}`}>
            <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
                <img src={`/assets/image/hari-buku-nasional/${image}`} alt="Card 1" />
                <div>
                    <h2 className="mb-3">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default CardProgram