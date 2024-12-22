import PropTypes from 'prop-types';

export function Header ({ title, className, click }) {
    return <h1 onClick={click} className={`${className}`}>{title}</h1>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
};