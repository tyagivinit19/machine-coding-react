import PropTypes from 'prop-types';

const Link = ({text}) => {
  return (
    <a href="" className="text-xl pl-1">{text}</a>
  )
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Link