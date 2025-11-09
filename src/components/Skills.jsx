import React from 'react';
import javascriptIcon from '../assets/icons/javascript.svg';
import pythonIcon from '../assets/icons/python.svg';
import javaIcon from '../assets/icons/java.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import reactIcon from '../assets/icons/react.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import viteIcon from '../assets/icons/vite.svg';
import githubIcon from '../assets/icons/github.svg';
import figmaIcon from '../assets/icons/figma.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import powerpointIcon from '../assets/icons/powerpoint.svg';
import azureIcon from '../assets/icons/azure.svg';
import trelloIcon from '../assets/icons/trello.svg';
import wordIcon from '../assets/icons/word.svg';
import notionIcon from '../assets/icons/notion.svg';
import gitlabIcon from '../assets/icons/gitlab.svg';
import flutterIcon from '../assets/icons/FlutterIcon.png';
import dartIcon from '../assets/icons/DartIcon.png';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/LanguageContext';

const skills = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'C#', icon: csharpIcon },
  { name: 'React.js', icon: reactIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitLab', icon: gitlabIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Power BI', icon: powerpointIcon },
  { name: 'Azure', icon: azureIcon },
  { name: 'Scrum', icon: trelloIcon },
  { name: 'Pacote Office', icon: wordIcon }, // Este será traduzido dinamicamente
  { name: 'Notion', icon: notionIcon },
  { name: 'Dart', icon: dartIcon },
  { name: 'Flutter', icon: flutterIcon },
];

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver()
  const { t } = useTranslation()

  // Traduz apenas o item necessário
  const translatedSkills = skills.map(skill => 
    skill.name === 'Pacote Office' ? { ...skill, name: t('skillsOffice') } : skill
  )

  const rows = [];
  for (let i = 0; i < translatedSkills.length; i += 3) {
    rows.push(translatedSkills.slice(i, i + 3));
  }

  return (
    <section ref={ref} className="py-24" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-azul-cosmo mb-8 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {t('skillsTitle')}
        </h2>
        
        <div className="space-y-3">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {row.map((skill, skillIndex) => {
                const overallIndex = rowIndex * 3 + skillIndex;
                return (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-xl bg-gradient-to-br from-black/20 to-white/3 
                             backdrop-blur-md hover:scale-105 transition-all duration-150 
                             flex flex-col items-center border border-transparent hover:border-azul-cosmo/40
                             hover:shadow-md hover:shadow-azul-cosmo/10 group
                             ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{
                      transitionDelay: isVisible ? `${rowIndex * 100 + skillIndex * 50}ms` : '0ms',
                      animationDelay: isVisible ? `${rowIndex * 100 + skillIndex * 50}ms` : '0ms'
                    }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-10 h-10 mb-3 transition-all duration-100 
                               group-hover:scale-110 group-hover:rotate-6" 
                    />
                    <div className="font-semibold text-center transition-all duration-100 
                                  group-hover:text-azul-cosmo">
                      {skill.name}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}