import { useForm } from "react-hook-form";

type RegisterFormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="First Name"
          {...register("first_name", {
            required: "First name is required",
          })}
        />

        {errors.first_name && (
          <p>{errors.first_name.message}</p>
        )}


        <input
          placeholder="Last Name"
          {...register("last_name", {
            required: "Last name is required",
          })}
        />

        {errors.last_name && (
          <p>{errors.last_name.message}</p>
        )}


        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}


        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 12,
              message: "Password must be at least 12 characters",
            },
          })}
        />

        {errors.password && (
          <p>{errors.password.message}</p>
        )}


        <input
          placeholder="Confirm Password"
          type="password"
          {...register("confirm_password", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") ||
              "Passwords do not match",
          })}
        />

        {errors.confirm_password && (
          <p>{errors.confirm_password.message}</p>
        )}


        <button type="submit">
          Create Account
        </button>

      </form>
    </div>
  );
}

export default Register;