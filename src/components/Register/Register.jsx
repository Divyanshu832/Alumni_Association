import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import configure from "../../appwrite/configure";
import { hashPassword } from "../../appwrite/hash";
import { Client, Databases, Query } from "appwrite";

const client = new Client();
client.setEndpoint(configure.ApiEndpoint).setProject(configure.ProjectId);

const databases = new Databases(client);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState(null);
  const [show, setShow] = useState(true);

  const handleRegister = async () => {
    const hashedPassword = await hashPassword(password);
    try {
      const response = await databases.listDocuments(
        configure.DatabaseId,
        configure.profileCollectionId,
        [Query.equal("email", email)],
      );

      if (response.total > 0) {
        const documentId = response.documents[0].$id;

        await databases.updateDocument(
          configure.DatabaseId,
          configure.profileCollectionId,
          documentId,
          {
            password: hashedPassword,
          },
        );

        console.info("Password updated successfully");
      } else {
        console.error("No document found with the provided email.");
      }
    } catch (error) {
      console.error("Appwrite Service :: handleRegister", error);
    }
  };

  const checkEmailExists = async () => {
    try {
      let response = await databases.listDocuments(
        configure.DatabaseId,
        configure.profileCollectionId,
        [Query.equal("email", email)],
      );

      if (response.total > 0) {
        console.info("Email exists in the database");
        setEmailExists(true);
        setShow(false);
      } else {
        console.error("No such Email exists in the database");
        setEmailExists(false);
      }
    } catch (error) {
      console.error("Appwrite Service :: checkEmailExists", error);
      setEmailExists(null);
    }
  };

  return (
    <>
      <div className="min-w-screen flex flex-1 flex-col items-center justify-center px-[26px] py-12 font-grotesk font-black lg:px-8">
        <div className="max-md:mx-auto max-md:w-[400px] md:w-[450px] lg:mx-auto">
          <img
            alt="Your Company"
            src={Logo}
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-10 text-center text-5xl font-black leading-9 tracking-tight text-gray-900">
            Register
          </h2>

          <div className="mt-16 lg:mx-auto lg:w-full lg:max-w-lg">
            <div>
              <label
                htmlFor="email"
                className="block pl-2 text-xl font-black leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6"
                />
              </div>

              {show ? (
                <button
                  type="submit"
                  onClick={checkEmailExists}
                  className="mt-16 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify Email
                </button>
              ) : null}
            </div>

            <div>
              {emailExists === true && (
                <div>
                  <div className="mt-10 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block pl-2 text-xl font-black leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-lg text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="mt-14 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              )}
              {emailExists === false && <p>Email not found in users.</p>}
            </div>

            <p className="mt-10 text-center text-lg text-gray-500">
              Have Already Registered?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;