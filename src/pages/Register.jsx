import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "./../components/index";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="font-bold text-3xl text-center">Register</h4>

        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="Sign Up" />
        </div>
        <p className="text-center">Already a member? <Link to='/login' className="ml-2 link link-hober link-primary">Login</Link></p>
      </Form>
    </section>
  );
};

export default Register;
