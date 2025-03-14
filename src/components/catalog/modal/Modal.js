const Modal = ({ children, title, id, setCloseModal }) => {
    return (
        <div className="modal h-100 fade" id={id} tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="ModalLabel" aria-hidden="true" style={{ width: '100%', height: '90vh'}}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content h-100 m-0">
                    <div className="modal-header p-0 m-0 border-0 position-relative">
                        <button onClick={() => setCloseModal(null)} type="button" className="btn-close position-absolute bg-light end-0" style={{zIndex: '100'}} data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body p-0 m-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
