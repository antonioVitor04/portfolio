import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-azul-cosmo">
            Olá, sou <span className="text-white block">Antônio Vítor Bozzo</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Estudante de <span className="text-white font-semibold">Ciência da Computação</span> no Instituto Mauá de Tecnologia. 
            Tenho experiência em <span className="text-white font-semibold">JavaScript (React/Next), Python, Java, SQL e MongoDB</span>, 
            e gosto de criar interfaces acessíveis, sistemas eficientes e relatórios técnicos que impulsionam qualidade e inovação.  
          </p>

          <p className="mt-3 text-lg text-gray-300">
            Sou uma pessoa <span className="text-white font-semibold">proativa, analítica e colaborativa</span>, com foco em qualidade, aprender e aplicar tecnologia para aprimorar processos e gerar impacto real.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="mailto:antonionapoli394@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-azul-cosmo/90 hover:scale-105 transition"
            >
              Contato <MdEmail />
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              Ver projetos
            </Link>
          </div>

          <div className="flex gap-5 mt-6 text-2xl">
            <a
              href="https://github.com/antonioVitor04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-azul-cosmo transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-azul-cosmo transition" />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <clipPath id="blobClip">
                  <path
                    fill="currentColor"
                    d="M45.6,-65.9C58.7,-58.5,67.4,-44.8,74.6,-29.6C81.9,-14.3,87.7,2.2,84.6,18.3C81.5,34.3,69.6,50,54.1,59.4C38.7,68.8,19.3,71.8,1.6,70.1C-16,68.4,-32,62,-42.9,50.8C-53.8,39.6,-59.6,23.7,-64.3,6.3C-69,-11.1,-72.7,-29.9,-65.2,-42.8C-57.7,-55.7,-39,-62.7,-21.3,-67.5C-3.7,-72.2,12.9,-74.4,29.4,-71.7C45.9,-68.9,62.8,-61.8,45.6,-65.9Z"
                    transform="translate(100 100) scale(0.9)"
                  />
                </clipPath>
              </defs>

              <image
                href="/images/perfil.png"
                x="40"
                y="25"
                width="135"
                height="135"
                clipPath="url(#blobClip)"
                className="transform hover:scale-105 transition duration-500"
                preserveAspectRatio="xMidYMid slice"
              />

              <rect
                x="0"
                y="0"
                width="200"
                height="200"
                clipPath="url(#blobClip)"
                fill="url(#gradientOverlay)"
              />

              <defs>
                <linearGradient
                  id="gradientOverlay"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}