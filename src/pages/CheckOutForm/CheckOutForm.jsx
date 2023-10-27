import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import checkoutImg from "../../assets/images/checkout/checkout.png"
const CheckOutForm = () => {
  const service = useLoaderData();

  //   get user info from authProvider
  const { user } = useAuth();

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const orderInfo = {
      name: user?.displayName,
      email: user?.email,
      date,
      phone,
      message,
      service_title: service?.title,
      img: service?.img,
      price: service?.price,
    };
    fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(orderInfo)
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.insertedId){
            toast.success("Order Confirmed")
        }
    })
  };
  return (
    <div>
      <Navbar/>
      <div className="relative mt-8 mb-20 w-full md:w-[1100px] mx-auto">
        <img src={checkoutImg} className="object-cover" alt="" />
      <div className="absolute rounded-lg w-full h-full bg-black/70 top-0 left-0"></div>
      <div className="flex justify-center">
      <div className="absolute rotate-6 bottom-0 p-3 bg-[#FF3811]  text-white">
          <h2 className="text-xl font-bold ">{service?.title}</h2>
      </div>
      </div>
      </div>
      <div className="hero p-10 bg-base-200 rounded-lg">
        <div className="hero-content w-11/12 mx-auto">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleOrder} className="card-body">
              <div className="flex items-center gap-6 justify-between">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    readOnly
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Last Name"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 justify-between">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    readOnly
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="+8801600000000"
                    className="input input-bordered"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  className="input input-bordered w-full mt-6 pt-2 h-32"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block bg-[#FF3811] text-white">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
