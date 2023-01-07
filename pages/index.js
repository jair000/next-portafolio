import Head from "next/head";
import { BsFillMoonStarsFill, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import devJ from "../public/dev-jairo-wave.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jairo Perez Portafolio</title>
        <meta name="description" content="Este es mi portafolio :D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGES}/favicon.ico`} />
      </Head>
      <main className="bg-white px-10 md:px-40 dark:bg-gray-900">
        {/* 1ra section */}
        <section className="min-h-screen">
          {/* Navigation */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">JP</h1>
            <ul className="flex items-center dark:text-gray-200">
              <li className="hidden ml-8 md:block">
                <a href="#info">Information</a>
              </li>
              <li className="hidden ml-8 md:block">
                <a href="#webs">Websites</a>
              </li>
              <li className="hidden mx-8 md:block">
                <a href="#">Contact</a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-200" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Title */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jairo Perez
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Developer and Disigner of Software.
            </h3>
            <p className="text-gray-800 text-md py-5 leading-8 md:text-xl max-w-2xl mx-auto dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ex iure, est id quisquam amet minima? Perferendis iste
              quaerat omnis.
            </p>
          </div>
          {/* Icons */}
          <div className="flex justify-center gap-16 text-5xl py-3 text-slate-500 dark:text-gray-400">
            <a href="https://github.com/jair000" target={"_blank"} rel={"noopener noreferrer"}>
            <AiFillGithub /></a>
            <BsLinkedin />
          </div>
          {/* Image */}
          <div className="relative rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-96 md:h-96">
            <Image src={devJ} layout="fill" objectFit="cover" alt="Avatar"/>
          </div>
        </section>
        {/* 2da section */}
        <section id="info">
          <div>
            <h3 className="text-3xl py-1 pt-6 dark:text-gray-200">Information | tools</h3>
            <p className="text-md py-2 leading-8 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod
              aliquid temporibus, quidem, earum suscipit similique{" "}
              <span className="text-teal-500">agencies</span> dicta obcaecati
              accusamus necessitatibus{" "}
              <span className="text-teal-500">offerts</span> blanditiis quas
              illum veritatis nam error ab. Iste, ipsa sit.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              modi?
            </p>
          </div>

          <div className="lg:flex md:gap-10 py-10">
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 dark:bg-gray-200">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto" alt="Design"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suites for you needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Photoshop</li>
                <li className="text-gray-800 py-1">Illustrator</li>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Indesign</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 dark:bg-gray-200">
              <Image src={code} width={100} height={100} className="mx-auto" alt="Code"/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suites for you needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Photoshop</li>
                <li className="text-gray-800 py-1">Illustrator</li>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Indesign</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 dark:bg-gray-200">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto" alt="Consulting"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suites for you needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Photoshop</li>
                <li className="text-gray-800 py-1">Illustrator</li>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Indesign</li>
              </ul>
            </div>
          </div>
        </section>
        {/* 3er section */}
        <section id="webs">
          <div className="pb-5">
            <h3 className="text-3xl py-1 dark:text-gray-200">Websites</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-teal-500">agencies</span> Provident
              quibusdam veritatis
              <span className="text-teal-500">startups</span> totam corrupti
              deserunt quis.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              iure.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap pb-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" alt="web6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
