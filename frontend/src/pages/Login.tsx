import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";


type LoginFormData = {
  email: string;
  password: string;
};

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

	const { login } = useAuth();

	const onSubmit = async (data: LoginFormData) => {
		try {
			await login(
			data.email,
			data.password
			);

			console.log("Logged in!");

		} catch (error) {
			console.error(error);
		}
	};


  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}


        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />

        {errors.password && (
          <p>{errors.password.message}</p>
        )}


        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}


export default Login;