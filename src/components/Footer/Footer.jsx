import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white max-md:w-[450px]">
      {/* <hr className="border-black" /> */}
      <div className="mx-auto w-full max-w-screen-xl px-5 py-2">
        <div className="-mb-3 flex justify-around font-grotesk">
          {/* <Link
            to="/"
            className="flex flex-wrap items-center justify-evenly gap-3 font-grotesk text-xl font-black max-md:hidden"
          >
            <img src={AluminiRelations} className="h-16" alt="Logo" />
          </Link> */}
          <div className="flex flex-row items-center max-md:block lg:space-x-16">
            <div className="flex flex-col justify-center">
              <h2 className="flex items-center justify-center text-lg font-extrabold uppercase text-gray-900 max-md:hidden">
                Navigation
              </h2>
              <ul className="flex flex-col items-center font-black text-black max-md:hidden">
                <li className="">
                  <Link
                    to="/"
                    className="font-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="font-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/donate"
                    className="font-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumini"
                    className="font-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    Alumini
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="font-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-96">
              <h2 className="mb-2 text-lg font-extrabold uppercase max-md:mb-0">
                Contact Us
              </h2>
              <ul className="flex flex-col justify-center font-black text-black">
                <li className="flex items-center hover:text-whover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                  >
                    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                  </svg>
                  <Link to="#" className="mb-2 text-black hover:text-whover">
                    <p>Block No-7, 1st Floor, Sardar Patel Bhavan,</p>
                    <p>New Sachivalay, Gandhinagar, Gujarat</p>
                  </Link>
                </li>
                <li className="flex items-center hover:text-whover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                  </svg>
                  <Link to="#" className="mb-1 text-black hover:text-whover">
                    +91 12345 67890, +91 12345 67890
                  </Link>
                </li>
                <li className="flex items-center hover:text-whover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  <Link
                    to="#"
                    className="mb-2 text-balck decoration-2 duration-200 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                  >
                    alumniaffairs@admin.gov.in
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 flex items-center justify-center text-lg font-semibold uppercase text-gray-900 max-md:mb-0 max-md:mt-3">
                Follow us
              </h2>
              <ul className="flex flex-col justify-center font-black max-md:order-1 max-md:flex-row max-md:space-x-2 lg:gap-1">
                <Link
                  to="#"
                  className="flex items-center gap-1 text-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                  <p className="text-black hover:text-whover hover:decoration-dashed hover:underline-offset-4">
                    facebook
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                  <p className="text-black decoration-2 hover:text-whover hover:decoration-dashed hover:underline-offset-4">
                    LinkedIn
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                  <p className="text-black hover:text-whover hover:decoration-dashed hover:underline-offset-4">
                    Twitter
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-black decoration-2 hover:text-whover hover:underline hover:decoration-dashed hover:underline-offset-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                  <p className="text-black hover:text-whover hover:decoration-dashed hover:underline-offset-4">
                    Instagram
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-2 mt-5 border-wdark" />
        <div className="flex flex-wrap items-center justify-between font-poppins font-black text-black max-md:flex-col">
          <span className="text-md text-center">
            © 2024&nbsp;
            <Link
              href="#"
              className="decoration-dashed decoration-2 underline-offset-4 hover:text-whover hover:underline"
            >
              lorem ipsum
            </Link>
            . All Rights Reserved.
          </span>
          <span className="text-md text-center">
            Developed By : Team&nbsp;
            <Link
              href="#"
              className="decoration-dashed decoration-2 underline-offset-4 hover:text-whover hover:underline"
            >
              Sixth Sense
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}