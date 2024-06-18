/* eslint-disable react/prop-types */
function Modal({ isOpen, onClose, children, titleTop, className }){
    return(
        <>
        <div className={className} style={{ display: isOpen ? 'grid' : 'none'}}>
            <div className="modal-body">
                <div className="modal-top">
                    <h3>{titleTop}</h3>
                    <button type="button" onClick={onClose}><i className="bi bi-x-square"></i></button>
                </div>
                {children}
            </div>
        </div>
        </>
    )
}

export default Modal