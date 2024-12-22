import PropTypes from "prop-types"

export function Modal({ children, onClose }) {
    return <div onClick={(e) => onClose(e)} className="h-screen w-screen bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 flex justify-center items-center fixed top-0 left-0 z-50">
        {children}
    </div>
}
Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}