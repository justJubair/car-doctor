import PropTypes from "prop-types";
const MyCartRow = ({ order, handleDelete, handleConfirm }) => {
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-circle btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 ">
              <img src={order.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{order.service_title}</div>
            <p>{order.message}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="font-bold">${order.price}</p>
      </td>
      <td>{order.date}</td>
      <th>
        <button onClick={()=> handleConfirm(order._id)} className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};
MyCartRow.propTypes = {
  order: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default MyCartRow;
