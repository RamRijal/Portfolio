import React from "react";
import Skill from "./skill.jsx";
const App = () => {
  return (
    <div className="scroll-smooth ">
      {/* NAVBAR/////////////////////////////////////////// */}
      <div className="scroll-smooth w-[100%] fixed flex h-1/10 justify-between items-center bg-gray-800 p-8 px-16 shadow-2xl t-0 l-0 r-0 mb-25 z-50">
        <div className="text-white text-3xl font-black">
          Rozen
          <span className="text-[#B700FB]"> Dhami </span>
        </div>
        <div className="">
          <ul className="flex justify-around gap-16">
            <li className="text-white font-semibold text-xl hover:text-[#B700FB]">
              <a href="#"> Home</a>
            </li>
            <li className="text-white font-semibold text-xl hover:text-[#B700FB]">
              <a href="#Skills">Skills</a>
            </li>
            <li className="text-white font-semibold text-xl hover:text-[#B700FB]">
              <a href="#Projects">Projects</a>
            </li>
            <li className="text-white font-semibold text-xl hover:text-[#B700FB]">
              <a href="#Contact">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="bg-[#B700FB] rounded text-white px-6 py-2 hover:bg-[#b800fbad] ">
            My Resume
          </button>
        </div>
      </div>
      {/* HEROSECTION///////////////////////////////////// */}
      <div className="relative flex h-[100vh] pt-36 px-16  justify-evenly bg-gray-700">
        <div className="text-white flex-1 mr-5">
          <div className="">
            <p className="text-5xl font-medium mt-9">I am </p>
            <h1 className="text-7xl font-bold pl-4 mb-8 ">
              Rozen <span className="text-[#B700FB]"> Dhami </span>
            </h1>

            <p className="text-2xl font-normal mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              dicta ipsum enim nemo deserunt quaerat repudiandae cumque fuga
              velit nam illum eos libero impedit quam neque, nesciunt, vero
              numquam. Voluptas.
            </p>
            <div className="mt-5">
              <button className="bg-[rgb(244,0,255)] rounded px-8 py-2 mt-8 text-white text-xl hover:bg-gray-700 shadow-custom mr-8 ">
                Explore
              </button>
              <button className="bg-none border-[#B700FB] border-2 rounded px-8 py-2 mt-8 text-white text-xl shadow-custom hover:bg-[rgb(244,0,255)]">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="text-white flex-1 ml-5">
          <img src="/portfolio.png" alt="" className="" />
        </div>
      </div>
      {/* SKILLS//////////////////////////////////////////// */}
      <div className=" bg-gray-800  h-[110vh] w-full " id="Skills">
        <div className=" text-2xl font-medium text-white text-center pt-4 ">
          <h2 className="font-black mt-6 text-3xl">
            My <span className="text-[#B700FB] ">Skills</span>
          </h2>
        </div>
        <Skill />
      </div>
      {/* PROJECTS//////////////////////////////////////// */}
      <div className="bg-gray-700 h-[270vh]" id="Projects">
        <div className=" text-2xl font-medium text-white mb-10 text-center pt-4 ">
          <h2 className="font-black mt-6 mb-16 text-3xl">
            My <span className="text-[#B700FB] ">Projects</span>
          </h2>
        </div>
        <div className="relative container flex justify-between mb-12">
          {/* Text//////////////////// */}
          <div className="project text-white text-2xl ml-24 size-8font-normal">
            <h1 className="mb-4">Real Time Chat Application</h1>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 mr-2 font-regular text-gray-500 text-sm cursor-default">
              React
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm cursor-default">
              Javascript
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm cursor-default">
              MERN
            </button>

            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm cursor-default">
              Tailwind
            </button>
            <p className="text-sm mt-4 text-gray-400 w-[25vw]">
              Hello friend! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Nemo dolores quas laudantium autem atque deserunt illum
              nesciunt architecto impedit nostrum! Tempora commodi ea quod
              soluta officia iusto quisquam neque cumque!
            </p>
            <button className="flex items-center bg-[rgb(244,0,255)] rounded px-6 py-3 mt-7 font-semibold text-white text-sm ">
              View Details
              <img
                src="/icons8-right-arrow-16.png"
                alt=""
                className="ml-2"
              />
            </button>
          </div>
          {/*  Image /////////////////// */}
          <div className="relative text-white  text-2xl font-thin z-10">
            <img
              src="/pro1.avif"
              alt=""
              className=" pl-10 mt-10 size-8 h-[80%] w-[50vw]"
            />
          </div>
          <div className="absolute top-[1%] left-[40%] h-[60vh] w-[48vw] -z-5 border-8 border-white"></div>
        </div>
        <div className="relative container flex justify-between mb-16 ">
          {/*  Image /////////////////// */}
          <div className="relative text-white  text-2xl font-thin z-10">
            <img
              src="/project.jpg"
              alt=""
              className=" pl-10 mt-10 size-8 h-[80%] w-[50vw]"
            />
          </div>
          <div className="absolute top-[1%] left-[10%] h-[60vh] w-[48vw] -z-5 border-8 border-white"></div>
          {/* Text//////////////////// */}
          <div className="project text-white text-2xl ml-24 size-8font-normal">
            <h1 className="mb-4">Real Time Chat Application</h1>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 mr-2 font-regular text-gray-500 text-sm">
              React
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              Javascript
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              MERN
            </button>

            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              Tailwind
            </button>
            <p className="text-sm mt-4 text-gray-400 w-[25vw]">
              Hello friend! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Nemo dolores quas laudantium autem atque deserunt illum
              nesciunt architecto impedit nostrum! Tempora commodi ea quod
              soluta officia iusto quisquam neque cumque!
            </p>
            <button className="flex items-center bg-[rgb(244,0,255)] rounded px-6 py-3 mt-7 font-semibold text-white text-sm  ">
              View Details
              <img
                src="public/icons8-right-arrow-16.png"
                alt=""
                className="ml-2"
              />
            </button>
          </div>
        </div>
        <div className="relative container flex justify-between mb-8">
          {/* Text//////////////////// */}
          <div className="project text-white text-2xl ml-24 size-8font-normal">
            <h1 className="mb-4">Real Time Chat Application</h1>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 mr-2 font-regular text-gray-500 text-sm">
              React
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              Javascript
            </button>
            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              MERN
            </button>

            <button className="flex-start items-center border-2 border-gray-500 rounded p-1 px-3 m-2 font-regular text-gray-500 text-sm">
              Tailwind
            </button>
            <p className="text-sm mt-4 text-gray-400 w-[25vw]">
              Hello friend! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Nemo dolores quas laudantium autem atque deserunt illum
              nesciunt architecto impedit nostrum! Tempora commodi ea quod
              soluta officia iusto quisquam neque cumque!
            </p>
            <button className="flex items-center bg-[rgb(244,0,255)] rounded px-6 py-3 mt-7 font-semibold text-white text-sm ">
              View Details
              <img
                src="public/icons8-right-arrow-16.png"
                alt=""
                className="ml-2"
              />
            </button>
          </div>
          {/*  Image /////////////////// */}
          <div className="relative text-white  text-2xl font-thin z-10">
            <img
              src="/project-management.png"
              alt=""
              className=" pl-10 mt-10 size-8 h-[80%] w-[50vw]"
            />
          </div>
          <div className="absolute top-[1%] left-[40%] h-[60vh] w-[48vw] -z-5 border-8 border-white"></div>
        </div>
        <button className="flex items-center px-6 py-3 font-semibold text-white text-medium ml-[45%] bg-[#B700FB] mb-4 rounded font-lg hover:bg-[#b800fbad]">
          <a href="https://github.com/RobinDhami?tab=repositories">See more</a>
          <img src="/icons8-right-arrow-16.png" alt="" className="ml-3" />
        </button>
      </div>

      {/* CONTACT///////////////////////////////////////// */}
      <div className="h-[100vh] bg-gray-800 " id="Contact">
        <section class="py-12 bg-gray-800 sm:py-16 lg:py-20 xl:py-24 ">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
              <div class="flex flex-col self-stretch justify-between">
                <div class="flex-1">
                  <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Contact Us
                  </h2>
                  <p class="mt-4 text-base font-normal leading-7 text-gray-400 lg:text-lg lg:mt-6 lg:leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio dignissimos animi voluptas mollitia optio, magnam vero,
                    aliquid tempore, officia incidunt
                  </p>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:mt-auto">
                  <div>
                    <h3 class="text-xs font-medium tracking-widest text-[#B700FB] uppercase">
                      Available Hours
                    </h3>
                    <p class="mt-5 text-base font-medium text-gray-300">
                      Monday-Friday
                      <br />
                      11:00 am to 5:00 pm
                    </p>
                  </div>

                  <div>
                    <h3 class="text-xs font-medium tracking-widest text-[#B700FB] uppercase">
                      My Address
                    </h3>
                    <p class="mt-5 text-base font-medium text-gray-300">
                      Maitrinagar, Kirtipur <br />
                      Kathmandu-44600, Nepal
                    </p>
                  </div>

                  <div>
                    <h3 class="text-xs font-medium tracking-widest text-[#B700FB] uppercase">
                      College Hours
                    </h3>
                    <p class="mt-5 text-base font-medium text-gray-300">
                      Monday-Friday
                      <br />
                      6:00 am to 9:30 pm
                    </p>
                  </div>

                  <div>
                    <h3 class="text-xs font-medium tracking-widest text-[#B700FB] uppercase">
                      Get In Touch
                    </h3>
                    <p class="mt-5 text-base font-medium text-gray-300">
                      +977 9767452069
                      <br />
                      +977 9813483902
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900 shadow-xl rounded-2xl">
                <div class="p-6 sm:p-10">
                  <form action="#" method="POST" class="space-y-6">
                    <div>
                      <label
                        for="fullName"
                        class="text-base font-medium text-gray-100">
                        {" "}
                        Your name{" "}
                      </label>
                      <div class="mt-2">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Enter your full name"
                          class="block w-full px-4 py-4 text-base text-white bg-gray-800 border border-gray-500 rounded-xl focus:outline-none focus:border-[#B700FB] focus:ring-1 focus:ring-[#B700FB]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="email"
                        class="text-base font-medium text-gray-100">
                        {" "}
                        Email address{" "}
                      </label>
                      <div class="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          class="block w-full px-4 py-4 text-base text-white bg-gray-800 border border-gray-500 rounded-xl focus:outline-none focus:border-[#B700FB] focus:ring-1 focus:ring-[#B700FB]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="message"
                        class="text-base font-medium text-gray-100">
                        {" "}
                        Write your message{" "}
                      </label>
                      <div class="mt-2">
                        <textarea
                          name="email"
                          id="email"
                          placeholder="Write us your question here..."
                          rows="4"
                          class="block w-full px-4 py-4 text-base text-white bg-gray-800 border border-gray-500 resize-y rounded-xl focus:outline-none focus:border-[#B700FB] focus:ring-1 focus:ring-[#B700FB]"></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-[#B700FB] border border-transparent rounded-xl hover:bg-[#B700FB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B700FB]">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER//////////////////////////////////////////////////*/}
      <footer class="py-12 sm:py-16 bg-gray-700">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            <div class="md:order-1">
              <div className="text-white text-3xl font-black">
                Rozen
                <span className="text-[#B700FB]"> Dhami </span>
              </div>
            </div>

            <div class="md:order-3">
              <ul class="flex items-center justify-end space-x-6">
                <li>
                  <a
                    href="https://www.instagram.com/lifesuckss_69/"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/robin-dhami-991476250/"
                    title=""
                    target="_blank"
                    rel="noopener"
                    class="inline-flex transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                    <span class="sr-only"> LinkedIn </span>
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXGjnQkTklxcVLCTtgwJZRmRSRRfGpnxdlCRXwtZvbCdmMPTJqXKHDHtXXhMkswdtsrxL"
                    title=""
                    target="_blank"
                    rel="noopener"
                    class="inline-flex transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                    <span class="sr-only"> Google </span>
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-2 md:col-span-1 md:order-2">
              <ul class="flex items-center justify-center sm:justify-between md:justify-center space-x-9 lg:space-x-16">
                <li>
                  <a
                    href="#"
                    title=""
                    class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#Skills"
                    title=""
                    class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#Projects"
                    title=""
                    class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#Contact"
                    title=""
                    class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
