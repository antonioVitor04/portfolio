import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/LanguageContext';

export default function Certificates() {
  const [ref, isVisible] = useIntersectionObserver()
  const { t } = useTranslation()

  const certificates = [
    {
      id: 1,
      nome: t('cert1Name'),
      instituicao: 'Alura',
      ano: '2025',
      descricao: t('cert1Desc'),
      imagem: '/logos/aluracursos_logo.jpeg',
      link: 'https://cursos.alura.com.br/certificate/ae3aadf9-6f79-497a-a9ca-a2ff7293297f?lang'
    },
    {
      id: 2,
      nome: t('cert2Name'),
      instituicao: 'Alura',
      ano: '2025',
      descricao: t('cert2Desc'),
      imagem: '/logos/aluracursos_logo.jpeg',
      link: 'https://cursos.alura.com.br/immersion/certificate/ed5a6a6a-b7d3-47e1-9124-2bf92cf5f32a?lang'
    },
    {
      id: 3,
      nome: t('cert3Name'),
      instituicao: 'Project Management Institute',
      ano: '2025',
      descricao: t('cert3Desc'),
      imagem: '/logos/project_management_institute_logo.jpeg',
      link: 'https://www.credly.com/badges/e4b7c97e-787a-4691-a789-9dccef2df757/linked_in_profile'
    },
    {
      id: 4,
      nome: t('cert4Name'),
      instituicao: 'Oracle',
      ano: '2024',
      descricao: t('cert4Desc'),
      imagem: '/logos/oracle_logo.jpeg',
      link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1724867622597/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
    },
    {
      id: 5,
      nome: t('cert5Name'),
      instituicao: 'Instituto Mauá de Tecnologia',
      ano: '2024',
      descricao: t('cert5Desc'),
      imagem: '/logos/instituto_maua_de_tecnologia_logo.jpeg',
      link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1742241674896/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
    },
    {
      id: 6,
      nome: t('cert6Name'),
      instituicao: 'Instituto Mauá de Tecnologia',
      ano: '2024',
      descricao: t('cert6Desc'),
      imagem: '/logos/instituto_maua_de_tecnologia_logo.jpeg',
      link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1724868023816/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
    },
    {
      id: 7,
      nome: t('cert7Name'),
      instituicao: 'Centro Universitário São Camilo',
      ano: '2024',
      descricao: t('cert7Desc'),
      imagem: '/logos/sao_camilo_logo.png',
      link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1760912555630/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
    },
    {
      id: 8,
      nome: t('cert8Name'),
      instituicao: 'Cellep',
      ano: '2021',
      descricao: t('cert8Desc'),
      imagem: '/logos/cellep_logo.jpeg',
      link: 'https://www.linkedin.com/in/ant%C3%B4nio-v%C3%ADtor-bozzo-de-napoli-2927a0323/details/certifications/1760034140957/single-media-viewer/?profileId=ACoAAFHO744BnJ8O-NAzY0q3_EMg7fawvnFKlNg'
    }
  ]

  return (
    <section ref={ref} className="py-24" id="certificates">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-azul-cosmo mb-8 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {t('certificatesTitle')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, index) => (
            <div 
              key={c.id} 
              className={`relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden p-6 
                         hover:scale-[1.03] transition-all duration-150 
                         border border-transparent hover:border-azul-cosmo/40 hover:shadow-lg hover:shadow-azul-cosmo/10
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                animationDelay: isVisible ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="pb-10">
                <div className="flex items-center gap-4">
                  <img 
                    src={c.imagem} 
                    alt={c.instituicao} 
                    className="w-14 h-14 object-contain rounded-2xl transition-transform duration-100 hover:scale-110" 
                  />
                  <div>
                    <h3 className="font-bold text-lg">{c.nome}</h3>
                    <p className="text-sm text-gray-400">{c.instituicao} — {c.ano}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{c.descricao}</p>
              </div>
              <a 
                href={c.link} 
                target="_blank" 
                className="absolute bottom-6 left-6 text-azul-cosmo hover:underline 
                           transition-all duration-100 hover:translate-x-1 font-semibold" 
              >
                Ver certificado →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}