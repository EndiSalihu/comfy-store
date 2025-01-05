import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "./../components/index";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />
        <FormInput type='password' label='password' name='password' defaultValue='12345678' />

        <div className="mt-4">
        <SubmitBtn text='Login'/>
        <button type="button" className="btn btn-secondary btn-block mt-2">Guest User</button>
        <p className="text-center mt-4">Not a member yet?<Link to='/register' className="ml-2 link link-hover link-primary">Register</Link></p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
