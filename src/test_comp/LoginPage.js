import axios from "axios";
import { useForm } from "react-hook-form";
import AuthService from "../data/services/AuthService";
import { jwtDecode } from "jwt-decode";


export default function LoginPage() {

    const { register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const OnSubmit = async (e) => {

        // var response = axios.post("http://localhost:7034/api/Access/SignIn",{email:"user1@gmail.com",
        //     password:"test"}, {headers:{
        //         Accept:'application/json',
        //         "Content-Type":'application/json,charset=UTF-8'
        //     }})
        //     .then(response =>console.log(response));

         var tokenJson = await AuthService.signIn(e.email,e.password);
         var token = jwtDecode(tokenJson);

        console.log(token);

    };

    // const signIn= ()=>{
    //          var response = axios.post("http://localhost:7034/api/Access/SignIn",{email:"user1@gmail.com",
    //     password:"test"}, {headers:{
    //         Accept:'application/json',
    //         "Content-Type":'application/json,charset=UTF-8'
    //     }})
    //     .then(response =>console.log(response));

    //     //console.log(response.data);
    // }

    return (
        <div className="d-flex justify-content-center mt-5">
            <form className="w-50" onSubmit={handleSubmit(OnSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input className="form-control" type="text"  {...register("email", { required: "This text is required" })} />
                    <div  >We'll never share your email with anyone else.</div>
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" {...register("password", { required: "This text is required" })} type={"text"}  />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
}