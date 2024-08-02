import PropTypes from 'prop-types';

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">
                        <img className="h-[60px] w-[120px] rounded-md ml-3" src={"/assets/images/batchesImages/"+item.imagePath} alt="" />
                    </td>
                    <td className="py-2 px-4 border-b">{item.title}</td>
                    <td className="py-2 px-4 border-b">{item.startDate}</td>
                    <td className="py-2 px-4 border-b">{item.endDate}</td>
                    <td className="py-2 px-4 border-b">{item.price}</td>
                    <td className="py-2 px-4 border-b">{item.validity}</td>
                    <td className="py-2 px-4 border-b">{item.status}</td>
                </tr>
            ))}
        </tbody>
    )

}

TableBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            validity: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            imagePath: PropTypes.string.isRequired
        })
    ).isRequired
};

export default TableBody
