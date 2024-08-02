import PropTypes from 'prop-types';

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((item, index) => {

                const isLastElement = index === data.length - 1;

                return (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className={`py-2 pl-2 ${isLastElement ? 'border-b border-l rounded-bl-md' : 'border-l'} border-[#7D7D7D]`}>
                            <img className="h-[60px] w-[120px] rounded-md ml-3" src={"/assets/images/batchesImages/" + item.imagePath} alt="" />
                        </td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b' : ''} border-[#7D7D7D]`}>{item.title}</td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b border-l' : 'border-l'} border-[#7D7D7D]`}>{item.startDate}</td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b border-l' : 'border-l'} border-[#7D7D7D]`}>{item.endDate}</td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b border-l' : 'border-l'} border-[#7D7D7D]`}>{item.price}</td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b border-l' : 'border-l'} border-[#7D7D7D]`}>{item.validity}</td>
                        <td className={`py-2 px-4 ${isLastElement ? 'border-b border-x rounded-br-md' : 'border-x'} border-[#7D7D7D]`}>
                            <span className={`flex border rounded-[0.25rem] py-[1px] px-2 w-[100px] justify-center text-sm ${(item.status == 'Published'
                                ? ' bg-[#DEFFDE] border-[#4ED04B]'
                                : ' bg-[#F3F3F3] border-[#A4A4A4]')}`}>
                                {item.status}
                            </span>
                        </td>
                    </tr>
                )
            })}
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
