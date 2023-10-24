import { updateProfile } from "firebase/auth";
import loginImg from "../../assets/images/login/login.svg";
import useAuth from "../../hooks/useAuth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser} = useAuth()
    const handleRegister =e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        createUser(email, password)
        .then((result) =>{
            console.log(result.user)
            toast.success("User created successfully")
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
            .then(()=>{

            })
            .catch(error=>{
                console.log(error)
            })
        })
        .catch(error=>{
            toast.error(error.message)
        })
       
    }
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <div className="">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
            <form onSubmit={handleRegister} className="card-body">
                <h1 className="my-8 text-center font-bold text-4xl" >Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="https://img.png"
                  className="input input-bordered"
                  name="photo"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#FF3811] text-white">Register</button>
              </div>
            <div className="flex items-center">
                <p>Already have an account?</p>
                <button className="btn btn-link text-[#FF3811]">Login</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
