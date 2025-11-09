import React from 'react'
import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa'
import { FiGitlab } from "react-icons/fi";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/LanguageContext';

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver()
  const { t } = useTranslation()

  const projetos = [
    {
      id: 1,
      nome: t('project1Name'),
      descricao: t('project1Desc'),
      ano: '2024',
      imagem: '/images/projeto1.png',
      tecnologias: ['Java', 'MySQL', 'Astah', 'NetBeans', 'Git', 'GitHub'],
      github: 'https://github.com/antonioVitor04/PII_1S_2024',
      gitlab: '',
      figma: '',
      linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
      id: 2,
      nome: t('project2Name'),
      descricao: t('project2Desc'),
      ano: '2024',
      imagem: '/images/projeto2.png',
      tecnologias: ['Node.js', 'MongoDB', 'Javascript', 'Html', 'CSS', 'Git', 'GitHub'],
      github: 'https://github.com/antonioVitor04/O-Semeador-',
      gitlab: '',
      figma: 'https://www.figma.com/design/WX7SQFNwLEEgXOyGXmywAH/Projeto-Integrador---O-Semeador?node-id=0-1&p=f&t=JIWX1EAk9gK6dqsI-0',
      linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
      id: 3,
      nome: t('project3Name'),
      descricao: t('project3Desc'),
      ano: '2025',
      imagem: '/images/projetosla.jpeg',
      tecnologias: ['React', 'Tailwind', 'Node.js', 'Javascript', 'Vite', 'MongoDB', 'MSal', 'Python', 'Azure', 'Figma', 'Git', 'GitHub'],
      github: 'https://github.com/antonioVitor04/S3-Site-MauaEsports',
      gitlab: '',
      figma: 'https://www.figma.com/design/LuwuqQ4VbyyILJQK0vf7Oo/S3-Site-MauaEsports?node-id=0-1&p=f&t=E8qiStQmD3MsXgQ4-0',
      linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
      id: 4,
      nome: t('project4Name'),
      descricao: t('project4Desc'),
      ano: '2025',
      imagem: '/images/projeto6.png',
      tecnologias: ['Flutter', 'Dart', 'Node.js', 'Javascript', 'MongoDB', 'Figma', 'Git', 'GitHub'],
      github: 'https://github.com/antonioVitor04/S4-Poliedro-Sistema-Para-Professores',
      gitlab: '',
      figma: '',
      linkedin: ''
    },
    {
      id: 5,
      nome: t('project5Name'),
      descricao: t('project5Desc'),
      ano: '2025',
      imagem: '/images/projeto4.png',
      tecnologias: ['Unity', 'C#', 'Git', 'GitLab'],
      github: '',
      gitlab: 'https://gitlab.com/nawatparty_temp/NawatParty',
      figma: '',
      linkedin: ''
    },
    {
      id: 6,
      nome: t('project6Name'),
      descricao: t('project6Desc'),
      ano: '2025',
      imagem: '/images/projeto5.png',
      tecnologias: ['React', 'Tailwind', 'Node.js', 'Javascript', 'Vite', 'Git', 'GitHub'],
      github: 'https://github.com/antonioVitor04/portfolio',
      gitlab: '',
      figma: '',
      linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    }
  ]

  return (
    <section ref={ref} className="py-24" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-azul-cosmo mb-8 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {t('projectsTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((p, index) => (
            <article 
              key={p.id} 
              className={`relative bg-black/30 rounded-2xl shadow-lg 
                         hover:shadow-xl transition-all duration-150 backdrop-blur-lg 
                         flex flex-col h-full border border-transparent hover:border-azul-cosmo/40
                         hover:scale-[1.02] group
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                animationDelay: isVisible ? `${index * 80}ms` : '0ms'
              }}
            >
              {/* Badge do ano */}
              <div className={`absolute -top-3 right-4 px-3 py-1 bg-azul-cosmo/90 text-white 
                              text-sm font-semibold rounded-full backdrop-blur-sm z-20 transition-all duration-150 shadow-lg
                              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {p.ano}
              </div>
              
              {/* Container da imagem - proporção fixa usando aspect ratio */}
              <div className="relative aspect-video flex-shrink-0 flex items-center justify-center p-4 
                            bg-gradient-to-br from-gray-800 to-azul-escuro rounded-t-2xl">
                
                {/* Molde estilo browser - largura consistente */}
                <div className="relative w-4/5 h-4/5 bg-gray-900 rounded-lg shadow-xl 
                              border border-azul-cosmo/30 overflow-hidden flex-shrink-0
                              group-hover:border-azul-cosmo/50 transition-colors duration-150">
                  {/* Barra do browser */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gray-800 
                                border-b border-azul-cosmo/20 flex items-center px-2 z-10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                  
                  {/* Imagem - mantém proporção */}
                  <div className="w-full h-full pt-4">
                    <img 
                      src={p.imagem} 
                      alt={p.nome} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do card - padding consistente */}
              <div className="p-5 flex flex-col flex-grow rounded-b-2xl">
                <h3 className="text-lg font-bold text-white mb-2">{p.nome}</h3>
                <p className="text-gray-300 flex-grow text-sm leading-relaxed">{p.descricao}</p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tecnologias.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-azul-cosmo/20 
                               text-azul-cosmo border border-azul-cosmo/40
                               transition-all duration-100 hover:scale-105 hover:bg-azul-cosmo/30" 
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Ícones */}
                <div className="flex gap-4 mt-5 text-lg">
                  {p.github && (
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-azul-cosmo transition-all duration-100 
                               transform hover:scale-125"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {p.gitlab && (
                    <a 
                      href={p.gitlab} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-azul-cosmo transition-all duration-100 
                               transform hover:scale-125"
                    >
                      <FiGitlab />
                    </a>
                  )}
                  {p.figma && (
                    <a 
                      href={p.figma} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-azul-cosmo transition-all duration-100 
                               transform hover:scale-125"
                    >
                      <FaFigma />
                    </a>
                  )}
                  {p.linkedin && (
                    <a 
                      href={p.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-azul-cosmo transition-all duration-100 
                               transform hover:scale-125"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}