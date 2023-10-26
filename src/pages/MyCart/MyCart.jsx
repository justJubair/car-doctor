import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyCartRow from "../../components/MyCartRow/MyCartRow";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyCart = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = (_id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
              }
              const remaining = orders.filter(order=> order._id !== _id)
              setOrders(remaining)
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const handleConfirm=(_id)=>{
      fetch(`http://localhost:5000/orders/${_id}`, {
          method: "PATCH",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify({status: "confirm"})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success("Service Confirmed")
          const remaining = orders.filter(order=> order._id !== _id)
          const updatedOrder = orders.find(order=> order._id === _id)
          updatedOrder.status = "confirm"
          const newOrders = [updatedOrder, ...remaining]
          setOrders(newOrders)
        }
      })
  }

  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto my-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete Order</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <MyCartRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};
export default MyCart;
