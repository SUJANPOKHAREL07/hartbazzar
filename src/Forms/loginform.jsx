import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { FaRegUser } from "react-icons/fa";

const loginSchema = z.object({
  name: z.string("Invalid email format"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={toFormikValidationSchema(loginSchema)}
      onSubmit={(values) => {
        console.log("Login Success", values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="flex justify-center text-[#809D3C]">
            {" "}
            <FaRegUser className="  text-[6rem]" />
          </div>

          <div className="mb-4">
            <label className="block text-[#5D8736]">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#5D8736]">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#5D8736]">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full  text-[#F4FFC3] bg-[#809D3C] py-2 rounded-md hover:bg-[#F4FFC3] hover:text-[#809D3C]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
