import React from 'react'
import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa'

const projetos = [
    {
        id: 1,
        nome: 'Jogo | Memória encantada',
        descricao:
            'Memória encantada é um jogo em que o aluno seleciona duas cartas por vez. Quando as cartas são iguais, elas desaparecem do tabuleiro. O tempo de conclusão é registrado para cada aluno, e ao final é gerado um ranking baseado no desempenho.',
        ano: '2024',
        imagem: '/images/projeto1.jpg',
        tecnologias: ['Java', 'MySQL', 'Astah', 'NetBeans', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/PII_1S_2024',
        linkedin: 'https://linkedin.com'
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
        linkedin: 'https://linkedin.com'
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
        linkedin: 'https://linkedin.com'
    },
    {
        id: 4,
        nome: 'Jogo | acompanhando o ritmo',
        descricao:
            'Serão apresentadas sequências movimentos, demonstradas por um boneco na cena, que os jogadores deverão repetir. Quanto mais fiel e preciso for o jogador ao acompanhar os movimentos do boneco, mais pontos ele receberá. Com o avanço do jogo, o número de notas e movimentos aumenta, enquanto o tempo entre cada ação diminui, tornando o desafio progressivamente mais difícil.',
        ano: '2025',
        imagem: '/images/projeto4.png',
        tecnologias: ['Unity', 'C#', 'Git', 'GitLab'],
        github: 'https://github.com/antonioVitor04/PII_1S_2024',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 5,
        nome: 'Site | Portfolio',
        descricao:
            'O portfólio apresenta minhas informações pessoais em uma interface limpa e organizada',
        ano: '2025',
        imagem: '/images/projeto5.png',
        tecnologias: ['React', 'Tailwind', 'Node.js', 'Javascript', 'Vite', 'Git', 'GitHub'],
        github: 'https://github.com/antonioVitor04/PII_1S_2024',
        linkedin: 'https://linkedin.com'
    }
]

export default function Projects() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-azul-cosmo mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((p) => (
            <article key={p.id} className="bg-black/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition backdrop-blur-lg flex flex-col h-full">
              
              {/* Container da imagem com molde - ANO FORA */}
              <div className="relative h-56 flex-shrink-0 flex items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-azul-escuro">
                {/* Badge do ano - AGORA FORA DO MOLDE */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-azul-cosmo/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm z-20">
                  {p.ano}
                </div>
                
                {/* Molde estilo browser */}
                <div className="relative w-full h-full bg-gray-900 rounded-lg shadow-2xl border border-azul-cosmo/30 overflow-hidden">
                  {/* Barra do browser */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 border-b border-azul-cosmo/20 flex items-center px-3 z-10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                  
                  {/* Imagem */}
                  <div className="w-full h-full pt-6">
                    <img 
                      src={p.imagem} 
                      alt={p.nome} 
                      className="w-full h-full object-contain transition-transform hover:scale-105 duration-300" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do card */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{p.nome}</h3>
                <p className="text-gray-300 mt-2 flex-grow">{p.descricao}</p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tecnologias.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-azul-cosmo/20 text-azul-cosmo border border-azul-cosmo/40">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Ícones */}
                <div className="flex gap-4 mt-4 text-lg">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-azul-cosmo transition transform hover:scale-110">
                      <FaGithub />
                    </a>
                  )}
                  {p.figma && (
                    <a href={p.figma} target="_blank" rel="noopener noreferrer" className="hover:text-azul-cosmo transition transform hover:scale-110">
                      <FaFigma />
                    </a>
                  )}
                  {p.linkedin && (
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-azul-cosmo transition transform hover:scale-110">
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