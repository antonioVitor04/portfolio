import React from 'react'

const certificates = [
  {
    id: 1,
    nome: 'Back-end Development',
    instituicao: 'Alura',
    ano: '2025',
    descricao: 'Gemni e Node.js: integrando sua aplicação com a API do Google',
    imagem: '/logos/aluracursos_logo.jpeg',
    link: 'https://cursos.alura.com.br/certificate/ae3aadf9-6f79-497a-a9ca-a2ff7293297f?lang'
  },
  {
    id: 2,
    nome: 'Back-end Development',
    instituicao: 'Alura',
    ano: '2025',
    descricao: 'Imersão Dev-Backend',
    imagem: '/logos/aluracursos_logo.jpeg',
    link: 'https://cursos.alura.com.br/immersion/certificate/ed5a6a6a-b7d3-47e1-9124-2bf92cf5f32a?lang'
  },
  {
    id: 3,
    nome: 'Agile Development',
    instituicao: 'Project Management Institute',
    ano: '2025',
    descricao: 'Fundamentos de Gerenciamento Ágil de Projetos',
    imagem: '/logos/project_management_institute_logo.jpeg',
    link: 'https://www.credly.com/badges/e4b7c97e-787a-4691-a789-9dccef2df757/linked_in_profile'
  },
  {
    id: 4,
    nome: 'Back-end Development',
    instituicao: 'Oracle',
    ano: '2024',
    descricao: 'Java Foundations',
    imagem: '/logos/oracle_logo.jpeg',
    link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1724867622597/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
  },
  {
    id: 5,
    nome: 'Data Visualization',
    instituicao: 'Instituto Mauá de Tecnologia',
    ano: '2024',
    descricao: 'Power BI Básico',
    imagem: '/logos/instituto_maua_de_tecnologia_logo.jpeg',
    link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1742241674896/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
  },
  {
    id: 6,
    nome: 'Data Visualization',
    instituicao: 'Instituto Mauá de Tecnologia',
    ano: '2024',
    descricao: 'Dashboards e Gráficos avançados em Excel',
    imagem: '/logos/instituto_maua_de_tecnologia_logo.jpeg',
    link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1724868023816/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
  },
  {
    id: 7,
    nome: 'hackathon',
    instituicao: 'Centro Universitário São Camilo',
    ano: '2024',
    descricao: 'Certifcado de primeiro lugar no hackathon São Camilo',
    imagem: '/logos/sao_camilo_logo.png',
    link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1760912555630/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
  },
  {
    id: 8,
    nome: 'English',
    instituicao: 'Cellep',
    ano: '2021',
    descricao: 'Conclusão do curso de inglês completo (C1 - Advanced)',
    imagem: '/logos/cellep_logo.jpeg',
    link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1760034140957/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
  }
]

export default function Certificates() {
  return (
    <section className="py-24" id="certificates">
      <div className="max-w-6xl mx-auto px-6"> {/* largura padronizada */}
        <h2 className="text-4xl font-bold text-azul-cosmo mb-8">Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <div key={c.id} className="relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden p-6 hover:scale-[1.02] transition">
              <div className="pb-10">
                <div className="flex items-center gap-4">
                  <img src={c.imagem} alt={c.instituicao} className="w-14 h-14 object-contain rounded-2xl" />
                  <div>
                    <h3 className="font-bold text-lg">{c.nome}</h3>
                    <p className="text-sm text-gray-400">{c.instituicao} — {c.ano}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{c.descricao}</p>
              </div>
              <a href={c.link} target="_blank" className="absolute bottom-6 left-6 text-azul-cosmo hover:underline">Ver certificado →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}