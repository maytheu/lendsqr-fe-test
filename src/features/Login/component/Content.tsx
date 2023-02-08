import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "../../../sharedComponents";
import { LOGIN } from "../../../sharedComponents/helpers/variables";

interface FormData {
  email: string;
  password: string;
}
const Content = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<FormData>({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputs.email.length > 0 && inputs.password.length > 0)
      navigate("/user");
  };
  return (
    <div className="px-10 flex-row h-screen md:px-14 lg:px-20 2xl:px-48">
      <div className="flex-row justify-center items-center h-full content-center py-32 2xl:py-56">
        <Typography
          variant="h2"
          fontVariant="headline"
          color="black"
          className="text-3xl"
        >
          Welcome!
        </Typography>
        <Typography
          variant="small"
          fontVariant="body2"
          color="black"
          className="pt-1"
        >
          Enter details to login
        </Typography>

        <form className="pt-6" onSubmit={onLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-container border-opacity-20 px-3 py-2 mb-7 text-input-text placeholder-input-text focus:z-10 focus:border-container focus:outline-none focus:ring-container focus:opacity-100 text-xs"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-container border-opacity-20 px-3 py-2 mb-2 text-input-text placeholder-input-text focus:z-10 focus:border-container focus:outline-none focus:ring-container focus:opacity-100 text-xs"
          />

          <Link to={LOGIN}>
            <Typography
              variant="small"
              color="defaultBody"
              fontVariant="body2"
              uppercase={true}
            >
              forgot password?
            </Typography>
          </Link>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 mt-4 text-base uppercase font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
