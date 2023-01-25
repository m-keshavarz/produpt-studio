import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import isClient from "../../config/isClient";

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  const onSubmit = values => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.shelfup.ir/api/v1/auth/login",
      data: {
        username: values.username.replace("0", "+98"),
        password: values.password
      }
    })
      .then(res => {
        localStorage.setItem("access_token", res.data.data.access_token);
        localStorage.setItem("refresh_token", res.data.data.refresh_token);
        router.push("/");
      })
      .catch(err => {
        setError("password", {
          type: "server",
          message: err.response.data.code
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isClient && localStorage.getItem("access_token")) {
    router.push("/");
    return null;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 h-1/2 bg-gray-200 rounded-lg flex flex-col justify-around p-4 relative"
      >
        <p className="text-center">ورود به سایت</p>
        <input
          type="text"
          {...register("username", { required: "نام کاربری را وارد کنید" })}
          placeholder="نام کاربری"
          className="h-8 pr-4 flex items-center"
          autoComplete="off"
        />
        {errors.username && (
          <span className="text-red-600">{errors.username.message}</span>
        )}
        <input
          type="password"
          {...register("password", { required: "رمز عبور را وارد کنید" })}
          placeholder="رمز عبور"
          className="h-8 pr-4 flex items-center"
          autoComplete="off"
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <button disabled={loading} className="border border-yellow-500">
          {loading ? "درحال پردازش..." : "ورود"}
        </button>
      </form>
    </div>
  );
};

export default Login;
