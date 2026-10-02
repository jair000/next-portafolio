import Head from "next/head";
import { BsFillMoonStarsFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import devJ from "../public/dev-jairo-wave.jpg";
import certus from "../public/Certus.png";
import seoane from "../public/Seoane.png";
import henry from "../public/Soyhenry.png";
import web1 from "../public/webCopa.png";
import web2 from "../public/webHalloween.png";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGmail, setShowGmail] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
                <a 
                  href="#info" 
                  onClick={(e) => handleScroll(e, "info")}
                  className="cursor-pointer"
                >
                  Información
                </a>
              </li>
              <li className="hidden mx-8 md:block">
                <a 
                  href="#webs" 
                  onClick={(e) => handleScroll(e, "webs")}
                  className="cursor-pointer"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-200" />
              </li>
              <li>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="animate-bounce bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer">
                      Contacto
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
                  <Dialog.Content className="fixed top-[50%] left-[50%] max-w-[550px] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl focus:outline-none z-50 dark:bg-gray-800 dark:text-white">
                    <Dialog.Title className="text-xl font-bold mb-4">¡Contáctame!</Dialog.Title>
                    <Dialog.Description className="mb-5 text-gray-600 dark:text-gray-400">
                                                              ¡Hola! Puedes encontrarme a traves de:
                                                              <div className="flex gap-4 mt-4">
                                                                <button
                                                                  onClick={() => setShowGmail(!showGmail)}
                                                                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                                                >
                                                                  <AiFillMail className="text-xl" />
                                                                  <span>{showGmail ? 'jairoo.andrea1204@gmail.com' : 'Gmail'}</span>
                                                                </button>
                                                                <button
                                                                  onClick={() => setShowWhatsApp(!showWhatsApp)}
                                                                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                                                >
                                                                  <BsWhatsapp className="text-xl" />
                                                                  <span>{showWhatsApp ? '+51 904 354 430' : 'WhatsApp'}</span>
                                                                </button>
                                                              </div>
                                                            </Dialog.Description>
                    <div className="flex justify-end mt-4">
                      <Dialog.Close asChild>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all">
                          Cerrar
                        </button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Root>
              </li>
            </ul>
          </nav>
          {/* Title */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jairo Perez
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Desarrollador Frontend Junior
            </h3>
            <p className="text-gray-800 text-md pt-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Soy un estudiante del 5to ciclo en la carrera de <span className="text-teal-500">Diseño y Desarrollo de Software</span>  en el instituto <span className="text-teal-500">Certus</span> , tengo 22 años y soy una persona autodidacta que trata de mejorar día tras día.
            </p>
            <p className="text-gray-800 text-md pb-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-gray-400">Este es mi pequeño portafolio y resumen de lo que llevo haciendo :D</p>
          </div>
          {/* Icons */}
          <div className="flex justify-center gap-16 text-5xl py-3 text-slate-500 dark:text-gray-400">
            <a href="https://github.com/jair000" target={"_blank"} rel={"noopener noreferrer"}>
              <AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/jairope/" target={"_blank"} rel={"noopener noreferrer"}>
              <BsLinkedin /></a>
          </div>
          {/* Image */}
          <div className="relative rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-96 md:h-96">
            <Image src={devJ} layout="fill" objectFit="cover" alt="Avatar"/>
          </div>
        </section>
        {/* 2da section */}
        <section id="info">
          <div>
            <h3 className="text-3xl py-1 pt-6 dark:text-gray-200">Información Academica</h3>
            <p className="text-md py-2 leading-8 dark:text-gray-400">
              Una introducción de la educación academico relevante que tuve, soy una persona a la que le gusta <span className="text-teal-500">aprender</span>, por lo mismo que intento practicar mi logica y estoy abierto a aprender <span className="text-teal-500">nuevos lenguajes</span> y <span className="text-teal-500">frameworks</span>. 
            </p>
          </div>

          <div className="lg:flex md:gap-10 py-10">
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 bg-gray-200">
              <Image
                src={certus}
                width={100}
                height={100}
                className="mx-auto" alt="Design"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Certus
              </h3>
              <p className="py-2">
                Conocimiento en desarrollo, modelaje y arquitectura de proyectos, redes y comunicaciones, logica para programación, bases de datos y negocios.
              </p>
              <h4 className="py-4 text-teal-600">Tecnologias aprendidas:</h4>
              <ul>
                <li className="text-gray-800 py-1">HTML</li>
                <li className="text-gray-800 py-1">CSS</li>
                <li className="text-gray-800 py-1">JAVASCRIPT</li>
                <li className="text-gray-800 py-1">NODEJS</li>
                <li className="text-gray-800 py-1">JAVA</li>
                <li className="text-gray-800 py-1">PYTHON</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 bg-gray-200">
              <Image src={seoane} width={100} height={100} className="mx-auto" alt="Code"/>
              <h3  className="text-lg font-medium pt-8 pb-2">
                Manuel Seoane Corrales
              </h3>
              <p className="py-2">
                Desarrollo de diseños y edición de imagenes, creación de piezas para logos, tarjetas, afiches, banners, etc.
              </p>
              <h4 className="py-4 text-teal-600">Tecnologias aprendidas:</h4>
              <ul>
                <li className="text-gray-800 py-1">PHOTOSHOP</li>
                <li className="text-gray-800 py-1">ILLUSTRATOR</li>
                <li className="text-gray-800 py-1">FIGMA</li>
                <li className="text-gray-800 py-1">CORELDRAW</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl py-10 mb-10 bg-gray-200">
              <Image
                src={henry}
                width={100}
                height={100}
                className="mx-auto" alt="Consulting"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Soy Henry
              </h3>
              <p className="py-2">
                Desarollo Full Stack MERN, problemas intensivos de logica y proyecto integrador con APIs.
              </p>
              <h4 className="py-4 text-teal-600">Tecnologias aprendidas:</h4>
              <ul>
                <li className="text-gray-800 py-1">MONGODB</li>
                <li className="text-gray-800 py-1">EXPRESS</li>
                <li className="text-gray-800 py-1">REACT</li>
                <li className="text-gray-800 py-1">NODEJS</li>
              </ul>
            </div>
          </div>
        </section>
        {/* 3er section */}
        <section id="webs">
          <div className="pb-5">
            <h3 className="text-3xl py-1 dark:text-gray-200">Proyectos Desarrollados</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Aqui pueden ver algunos de los proyectos que he desarrollado o tuve participación como desarrollador. 
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap pb-10">
            <div className="basis-2/2 flex-1">
              <a href="https://grupocopacabana.com.pe/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  layout="responsive" alt="web1"
                />
              </a>
            </div>
            <div className="basis-2/2 flex-1">
              <a href="https://jair000.github.io/halloween_proyecto/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  layout="responsive" alt="web2"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
