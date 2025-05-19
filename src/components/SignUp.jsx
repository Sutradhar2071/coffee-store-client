import React, { use } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleButton = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    console.log(email, password, rest);

    

    // create

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
        email,
        ...rest,
        creationTime: result?.user?.metadata?.creationTime,
        lastSignInTime: result?.user?.metadata?.lastSignInTime,
    }
        // save profile db

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user add success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up Now</h1>
      </div>
      <form noValidate="" onSubmit={handleButton} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Phono
            </label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <input
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              value="Sign Up"
            />
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
