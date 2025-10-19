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

const skills = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'C#', icon: csharpIcon },
  { name: 'React.js', icon: reactIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'Git/GitHub', icon: githubIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Power BI', icon: powerpointIcon },
  { name: 'Azure', icon: azureIcon },
  { name: 'Scrum', icon: trelloIcon },
  { name: 'Pacote Office', icon: wordIcon },
  { name: 'G-Suite', icon: notionIcon },
];

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-azul-cosmo mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-black/20 to-white/3 backdrop-blur-md hover:scale-105 transition flex flex-col items-center"
            >
              <img src={s.icon} alt={s.name} className="w-10 h-10 mb-3 " />
              <div className="font-semibold text-center">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
