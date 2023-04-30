import Head from "next/head";
import { useSelector } from "react-redux";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import dipesh from "../public/dipesh.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function index() {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <>
      <Head>
        <title>Ayush Kathariya</title>
      </Head>
      <div className={`${darkMode ? "dark" : ""}`}>
        <main className="bg-white px-2 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-[#6B7280]">
          <section className="min-h-full">
            <div className="flex items-center justify-between p-10 mb-12">
              <h1 className="text-base md:text-xl lg:text-2xl">
                Ayush Kathariya
              </h1>
              <a
                className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="#"
              >
                Resume
              </a>
            </div>
            <div className="p-10 text-center">
              <h2 className="py-2 text-5xl font-medium text-teal-500 md:text-6xl">
                Ayush Kathariya
              </h2>
              <h3 className="py-2 text-2xl md:text-3xl">
                Developer and designer.
              </h3>
              <p className="text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-[#6B7280]">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
            </div>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96">
              <Image src={dipesh} layout="fill" objectFit="cover" alt="img" />
            </div>
          </section>

          <section>
            <div className="text-center">
              <h3 className="py-1 text-3xl">Services I offer</h3>
              <p className="text-base py-2 leading-8 text-gray-800 dark:text-[#6B7280]">
                Since the begingin of my journey as a freelancer developer, I've
                done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for
                <span className="text-teal-500"> startups</span> and
                collaborated with talanted people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-base py-2 leading-8 text-gray-800 dark:text-[#6B7280]">
                I offer from a wide range of services, including programming and
                teaching
              </p>
            </div>
            <div className="gap-10 lg:flex">
              <div className="p-10 my-10 text-center shadow-lg rounded-xl">
                <Image
                  className="mx-auto"
                  src={design}
                  width={100}
                  height={100}
                  alt="img"
                />
                <h3 className="pt-8 pb-2 text-lg font-medium">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1 text-gray-500">Photoshop</p>
                <p className="py-1 text-gray-500">Illustrator</p>
                <p className="py-1 text-gray-500">Figma</p>
              </div>
              <div className="p-10 my-10 text-center shadow-lg rounded-xl">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                  alt="img"
                />
                <h3 className="pt-8 pb-2 text-lg font-medium">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1 text-gray-500">Photoshop</p>
                <p className="py-1 text-gray-500">Illustrator</p>
                <p className="py-1 text-gray-500">Figma</p>
              </div>
              <div className="p-10 my-10 text-center shadow-lg rounded-xl">
                <Image
                  className="mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                  alt="img"
                />
                <h3 className="pt-8 pb-2 text-lg font-medium">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1 text-gray-500">Photoshop</p>
                <p className="py-1 text-gray-500">Illustrator</p>
                <p className="py-1 text-gray-500">Figma</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="py-1 text-3xl">Portfolio</h3>
              <p className="text-base py-2 leading-8 text-gray-800 dark:text-[#6B7280]">
                Since the begingin of my journey as a freelancer developer, I've
                done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for
                <span className="text-teal-500"> startups</span> and
                collaborated with talanted people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-base py-2 leading-8 text-gray-800 dark:text-[#6B7280]">
                I offer from a wide range of services, including programming and
                teaching
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row">
              <div className="flex basis-1/3">
                <Image
                  src={web1}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
              <div className="flex basis-1/3">
                <Image
                  src={web2}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
              <div className="flex basis-1/3">
                <Image
                  src={web3}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
              <div className="flex basis-1/3">
                <Image
                  src={web4}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
              <div className="flex basis-1/3">
                <Image
                  src={web5}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
              <div className="flex basis-1/3">
                <Image
                  src={web6}
                  className="object-cover rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="img"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
