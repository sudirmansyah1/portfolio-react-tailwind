import React from 'react';
import { 
    bootstrap,
    codeigniter,
    css,
    docker,
    git,
    html,
    javascript,
    mysql,
    nodejs,
    oracle,
    php,
    react,
    tibco,
    lua
 } from "../assets/skills"

export default function Skills() {
  return (
    <section className="Skills">
        <div className="flex flex-wrap justify-center items-center h-screen mt-20 sm:mt-0 sm:px-32">
            <SkillIcon icon={bootstrap} name="Bootstrap" />
            <SkillIcon icon={codeigniter} name="Codeigniter" />
            <SkillIcon icon={css} name="CSS" />
            <SkillIcon icon={docker} name="Docker" />
            <SkillIcon icon={git} name="GIT" />
            <SkillIcon icon={html} name="HTML" />
            <SkillIcon icon={javascript} name="Javascript" />
            <SkillIcon icon={mysql} name="MySQL" />
            <SkillIcon icon={nodejs} name="NodeJS" />
            <SkillIcon icon={oracle} name="Oracle" />
            <SkillIcon icon={php} name="PHP" />
            <SkillIcon icon={react} name="React" />
            <SkillIcon icon={tibco} name="Tibco" />
            <SkillIcon icon={lua} name="Lua" />
        </div>
    </section>
  );
};

const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex justify-center relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md bg-gray-200 hover:bg-gray-900 hover:text-white mr-2 md:mr-8 transition duration-300 ease-in-out">
      <img
        src={icon}
        alt={name}
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};