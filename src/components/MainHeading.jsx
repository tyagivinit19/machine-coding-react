import PropTypes from 'prop-types';

const MainHeading = ({ text, color }) => {
    return (
        <div className="flex justify-center">
            <h1 className='text-[80px] font-bold mt-[20px] drop-shadow-lg' style={{color}}>{text}</h1>
        </div>

    )
}

MainHeading.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default MainHeading