import PropTypes from 'prop-types';


const Heading = ({ text }) => {
    return (
        <div className="flex justify-center m-4">
            <h1 className='text-4xl font-bold text-center'>{text}</h1>
        </div>
    )
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading