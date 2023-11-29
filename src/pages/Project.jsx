import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar } from "@material-tailwind/react";

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
    lua,
    postgresql,
    express,
    fastify
 } from "../assets/skills"


const projects = [
   {
     id: 1,
     title: 'AuthenCity',
     description: 'The AuthenCity website was developed using PHP, with Codeigniter 4 serving as its PHP framework. The frontend was crafted using Bootstrap, and the AuthenCity website has been seamlessly integrated with the Midtrans payment gateway, serving as the transaction payment tool.',
     image: 'https://cdn.discordapp.com/attachments/599393791773900816/1179411245670092850/image.png',
     avatars: [
       codeigniter,
       bootstrap,
       mysql,
       php,
     ],
     url: "https://fivem.authen.co.id"
   },
];
 
const App = () => {
 return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Project List</h1>
      <Projects projects={projects} />
    </div>
 );
};

export default App;

const Projects = ({ projects }) => {
 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {projects.map((project) => {
          const {
            id,
            title,
            description,
            image,
            avatars,
            url
          } = project;

          const projectContent = (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 duration-500 ease-in-out"
            >
              <div className="mb-4">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={image}
                  alt={title}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex items-center -space-x-4">
                {avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    variant="circular"
                    alt={title}
                    className="border-2 border-white hover:z-10 focus:z-10 bg-white shadow-lg"
                    src={avatar}
                  />
                ))}
              </div>
            </motion.div>
          );

          return (
            <React.Fragment key={id}>
              {url ? (
                <a href={url} target='_blank'>{projectContent}</a>
              ) : projectContent}
            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </div>
 );
};
