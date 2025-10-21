import React from 'react'
import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa'
import { FiGitlab } from "react-icons/fi";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projetos = [
    {
        id: 1,
        nome: 'Jogo | Memória encantada',
        descricao:
            'Memória encantada é um jogo em que o aluno seleciona duas cartas por vez. Quando as cartas são iguais, elas desaparecem do tabuleiro. O tempo de conclusão é registrado para cada aluno, e ao final é gerado um ranking baseado no desempenho.',
        ano: '2024',
        imagem: '/images/projeto1.png',
        tecnologias: ['Java', 'MySQL', 'Astah', 'NetBeans', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/PII_1S_2024',
        gitlab: '',
        linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
        id: 2,
        nome: 'Site | O Semeador',
        descricao:
            'Site informativo de instituição beneficente com objetivo de atrair novos doadores potenciasi e divulgar a instituição beneficente, com integração com API do V Libras, em que o site pode ser lido por voz ou libras em prol da acessibilidade',
        ano: '2024',
        imagem: '/images/projeto2.png',
        tecnologias: ['Node.js', 'MongoDB', 'Javascript', 'Html', 'CSS', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/O-Semeador-',
        gitlab: '',
        linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
        id: 3,
        nome: 'Site | Mauá Esports',
        descricao:
            'O site consiste em centralizar e facilitar a administração das atividades esportivas, incluindo a gestão dos horários de treino, das horas PAE dos alunos(em formato de ranking) e das informações sobre os times e campeonatos, com exportação de relatórios (Excel e PDF) em Python.',
        ano: '2025',
        imagem: '/images/projetosla.jpeg',
        tecnologias: ['React', 'Tailwind', 'Node.js', 'Javascript', 'Vite', 'MongoDB', 'MSal', 'Python', 'Azure', 'Figma', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/S3-Site-MauaEsports',
        gitlab: '',
        linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    },
    {
        id: 4,
        nome: 'Jogo | acompanhando o ritmo',
        descricao:
            'Serão apresentadas sequências movimentos, demonstradas por um boneco na cena, que os jogadores deverão repetir. Quanto mais fiel e preciso for o jogador ao acompanhar os movimentos do boneco, mais pontos ele receberá. Com o avanço do jogo, o número de notas e movimentos aumenta, enquanto o tempo entre cada ação diminui, tornando o desafio progressivamente mais difícil.',
        ano: '2025',
        imagem: '/images/projeto4.png',
        tecnologias: ['Unity', 'C#', 'Git', 'GitLab'],
        github: '',
        gitlab: 'https://gitlab.com/nawatparty_temp/NawatParty',
        linkedin: ''
    },
    {
        id: 5,
        nome: 'Site | Portfolio',
        descricao:
            'O portfólio apresenta minhas informações pessoais em uma interface limpa e organizada',
        ano: '2025',
        imagem: '/images/projeto5.png',
        tecnologias: ['React', 'Tailwind', 'Node.js', 'Javascript', 'Vite', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/portfolio',
        gitlab: '',
        linkedin: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/projects/'
    }
]

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section ref={ref} className="py-24" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-azul-cosmo mb-8 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Projects
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