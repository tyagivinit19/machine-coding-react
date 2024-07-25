import PropTypes from 'prop-types';


const LightText = ({ text }) => {
    return (
        <div className='flex justify-center'><p className='text-xl text-[#BFBFBF] text-center'>{text}</p></div>
    )
}

LightText.propTypes = {
    text: PropTypes.string.isRequired,
};


export default LightText