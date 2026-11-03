import Head from "next/head";
import { BsFillMoonStarsFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import devJ from "../public/jairo-perez.jpg";
import certus from "../public/Certus.png";
import seoane from "../public/Seoane.png";
import henry from "../public/Soyhenry.png";
import web1 from "../public/webCopa.png";
import web2 from "../public/webHalloween.png";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const experiencia = [
  {
    cargo: "Practicante de Desarrollo de Software",
    empresa: "Grupo Sima",
    fecha: "Oct. 2026 – Actualidad",
    logros: [
      "Completé en aproximadamente dos semanas funcionalidades pendientes del ERP de Cima Inmobiliaria: ventas, cuotas, clientes, inmuebles, propietarios y cuentas bancarias.",
      "Corregí un error en el sistema de Cima Parking que impedía el envío de comprobantes electrónicos a SUNAT.",
      "Amplié la facturación electrónica para emitir boletas además de facturas, con generación de PDF, XML y CDR.",
    ],
    stack: ["C#", "ASP.NET Core MVC", "Entity Framework", "React (Vite)", "SUNAT", "IIS"],
  },
  {
    cargo: "Practicante de Desarrollo de Software",
    empresa: "CuscoCode / CodePerú",
    fecha: "Jul. 2026 – Set. 2026",
    logros: [
      "Participé en el desarrollo de la web corporativa de Grupo Copacabana, publicada en producción, con contenido gestionado desde Strapi y chatbot integrado.",
      "Optimicé el sitio según Lighthouse: rendimiento de 66 a 94, accesibilidad de 87 a 96 y SEO de 91 a 100.",
      "Diseñé y desarrollé componentes y módulos para una plataforma web de retail con React, Next.js y Supabase.",
    ],
    stack: ["Astro", "JavaScript", "Strapi", "Tailwind CSS", "SASS", "React", "Next.js", "Supabase", "GitLab"],
  },
];

const tecnologias = [
  { titulo: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Astro", "Tailwind CSS", "Bootstrap", "SASS"] },
  { titulo: "Backend", items: ["C#", "ASP.NET Core MVC", "Entity Framework", "Node.js", "Express", "APIs REST", "Strapi"] },
  { titulo: "Datos", items: ["SQL", "PostgreSQL / Supabase", "MySQL", "MongoDB"] },
  { titulo: "Herramientas", items: ["Git", "GitHub", "Figma", "Lighthouse"] },
];

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
        <title>Jairo Perez | Desarrollador Web Junior</title>
        <meta name="description" content="Portafolio de Jairo Perez, desarrollador web junior en Lima: React, Next.js, TypeScript, JavaScript y C#." />
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
                  href="#experiencia"
                  onClick={(e) => handleScroll(e, "experiencia")}
                  className="cursor-pointer"
                >
                  Experiencia
                </a>
              </li>
              <li className="hidden ml-8 md:block">
                <a
                  href="#info"
                  onClick={(e) => handleScroll(e, "info")}
                  className="cursor-pointer"
                >
                  Educación
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
              Desarrollador Web Junior
            </h3>
            <p className="text-teal-600 text-md md:text-lg">
              React · Next.js · TypeScript · JavaScript · C#
            </p>
            <p className="text-gray-800 text-md py-5 leading-8 md:text-xl max-w-2xl mx-auto dark:text-gray-400">
              Desarrollo aplicaciones web con <span className="text-teal-500">React</span> y <span className="text-teal-500">Next.js</span>. Como practicante he trabajado en proyectos reales: sitios publicados en producción, integración de APIs y CMS, y sistemas empresariales en <span className="text-teal-500">C# / ASP.NET Core</span> con facturación electrónica SUNAT. Estudio Desarrollo de Software en <span className="text-teal-500">Certus</span>.
            </p>
            <a
              href="/next-portafolio/CV_Jairo_Perez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md hover:opacity-90"
            >
              Descargar CV
            </a>
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
            <Image src={devJ} layout="fill" objectFit="cover" alt="Foto de Jairo Perez"/>
          </div>
        </section>
        {/* Experiencia */}
        <section id="experiencia" className="pt-10">
          <h3 className="text-3xl py-1 dark:text-gray-200">Experiencia</h3>
          <div className="flex flex-col gap-8 py-8">
            {experiencia.map((exp) => (
              <div key={exp.empresa} className="shadow-lg p-8 rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="md:flex md:justify-between md:items-baseline">
                  <h4 className="text-xl font-medium dark:text-gray-200">
                    {exp.cargo} · <span className="text-teal-600">{exp.empresa}</span>
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">{exp.fecha}</p>
                </div>
                <ul className="list-disc pl-5 py-4 leading-7 text-gray-800 dark:text-gray-300">
                  {exp.logros.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((t) => (
                    <span key={t} className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full dark:bg-teal-900 dark:text-teal-100">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Tecnologías */}
        <section id="tecnologias" className="pt-6">
          <h3 className="text-3xl py-1 dark:text-gray-200">Tecnologías</h3>
          <div className="grid gap-6 py-8 md:grid-cols-2">
            {tecnologias.map((grupo) => (
              <div key={grupo.titulo} className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
                <h4 className="text-lg font-medium text-teal-600 pb-3">{grupo.titulo}</h4>
                <p className="text-gray-800 leading-7 dark:text-gray-300">{grupo.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
        {/* 2da section */}
        <section id="info">
          <div>
            <h3 className="text-3xl py-1 pt-6 dark:text-gray-200">Educación</h3>
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
            <h3 className="text-3xl py-1 dark:text-gray-200">Proyectos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Algunos proyectos que he desarrollado o en los que participé como desarrollador.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap pb-10">
            <div className="basis-2/2 flex-1">
              <a href="https://grupocopacabana.com.pe/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  layout="responsive" alt="Web corporativa de Grupo Copacabana"
                />
              </a>
              <h4 className="text-xl font-medium pt-4 dark:text-gray-200">Web corporativa · Grupo Copacabana</h4>
              <p className="py-2 leading-7 text-gray-800 dark:text-gray-400">
                Sitio publicado en producción, desarrollado como practicante en CuscoCode / CodePerú. Optimizado según Lighthouse: rendimiento 66 → 94, accesibilidad 87 → 96 y SEO 91 → 100.
              </p>
              <p className="text-sm text-teal-600">Astro · Strapi · JavaScript · Tailwind CSS · SASS</p>
            </div>
            <div className="basis-2/2 flex-1">
              <a href="https://jair000.github.io/halloween_proyecto/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  layout="responsive" alt="Demo de tienda de Halloween"
                />
              </a>
              <h4 className="text-xl font-medium pt-4 dark:text-gray-200">Tienda de Halloween (demo)</h4>
              <p className="py-2 leading-7 text-gray-800 dark:text-gray-400">
                Maqueta visual de una tienda temática, hecha con HTML, CSS y JavaScript puro.
              </p>
              <p className="text-sm text-teal-600">HTML · CSS · JavaScript</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
