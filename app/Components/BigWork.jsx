import React, { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';
import project4 from '../Assets/project4.png'
import project5 from '../Assets/project5.png';
import project6 from '../Assets/project6.png';
import project7 from '../Assets/project7.png';
import project8 from '../Assets/project8.png';
import AnimatePage from './AnimatePage';


const projects = [
  {
    id: 1,
    title: 'Tata 1mg MedAssist',
    description: 'A medication tracker designed for Tata 1mg to simplify medication routines. With smart reminders and a minimal interface, it helps users stay consistent with their meds.',
    genre: 'Product Design',
    image: project1,
    bgColor: '#F87062',
    textColor: '#000000',
    link: 'https://www.behance.net/gallery/218405177/MedAssist-Medication-Tracker-for-TATA-1mg',
  },
  {
    id: 2,
    title: 'Sparsh',
    description: 'An inclusive tap-to-pay app to empower the visually impaired. Sparsh reimagines mobile transactions with accessibility-first design, promoting financial independence for all.',
    genre: 'Accessibility Design',
    image: project2,
    bgColor: '#88C9EA',
    textColor: '#3D8ACF',
    link: 'https://www.behance.net/gallery/209738361/Sparsh-An-accessible-tap-to-pay-network-for-UPI',
  },
  {
    id: 3,
    title: 'WeGo',
    description: 'A platform that connects independent travelers with locals. WeGo redefines travel by offering freedom, flexibility, and rich cultural experiences, crafted by those who know the city best.',
    genre: 'UI/UX Design',
    image: project3,
    bgColor: '#4E3D3A',
    textColor: '#FFFFFF',
    link: 'https://www.behance.net/gallery/171155309/WeGo-UIUX-Case-Study',
  },
  {
    id: 4,
    title: 'Learn with Willy!',
    description: 'An educational app designed for children with Down Syndrome. Backed by research, interviews, and field visits, the app focuses on accessibility, engagement, and inclusive learning.',
    genre: 'Inclusive Design',
    image: project4,
    bgColor: '#E68CBD',
    textColor: '#C6EFFF',
    link: 'https://www.behance.net/gallery/175548369/Learn-with-Willy-Design-Research-Project',
  },
  {
    id: 5,
    title: 'Illume',
    description: 'A multiutility desk organiser, for those who value minimalism and quality while having utilitarian features in their products. This organiser will help you organise your workspace to the best of your ability.',
    genre: 'Product Design',
    image: project5,
    bgColor: '#3C3C3C',
    textColor: '#FFFFFF',
    link: 'https://www.behance.net/gallery/165334181/Illum-Product-Design',
  },
  {
    id: 6,
    title: 'Album Art',
    description: 'A visual redesign of classic album art using key elements from the originals. Features new takes on Making Movies by Dire Straits, The Stranger by Billy Joel, and The Joshua Tree by U2.',
    genre: 'Graphic Design',
    image: project6,
    bgColor: '#3FB4FD',
    textColor: '#FFFFFF',
    link: 'https://www.behance.net/gallery/165398667/Cover-Art-Graphic-Design',
  },
  {
    id: 7,
    title: 'Kholo Kholo',
    description: 'A motion design music video created for "Kholo Kholo." All visuals were custom designed and animated to sync seamlessly with the song, bringing its energy and emotion to life through vibrant motion graphics.',
    genre: 'Motion Design & Graphics',
    image: project7,
    bgColor: '#97EBF1',
    textColor: '#906B45',
    link: 'https://www.behance.net/gallery/209770737/Kholo-Kholo-Animated-Music-Video',
  },
  {
    id: 8,
    title: 'UltraDelay',
    description: 'UltraDelay is a low cost DIY guitar delay pedal made with Arduino and ultrasonic sensor. Housed in a cardboard case, it offers gesturec ontrolled delay effects, all for under ₹500.',
    genre: 'Product Design & Arduino',
    image: project8,
    bgColor: '#BBB4BB',
    textColor: '#4E3D3A',
    link: 'https://drive.google.com/drive/u/1/folders/1l30aFJbysXqFSG5x40a2erTnNNcAi4zo',
  },
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <AnimatePage>
      <section className="flex flex-col items-center px-4 py-30">
        {/* Heading and Intro Text */}
        <div className="text-center mb-24 mt-12 mx-auto max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-[850px]">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <p className="text-md sm:text-lg text-gray-300 leading-relaxed mt-5">
          I mainly design digital products from 0 to 1, but I also get distracted by random creative sparks. One day I’m redesigning a rock album cover from the '80s, the next I'm deep in 3D modeling a desk organizer or building an Arduino guitar delay pedal, because why not?!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-4 lg:gap-7 w-full max-w-[1100px]">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div
                className={`cursor-pointer w-full rounded-[20px] transition-all duration-800 relative overflow-hidden ${
                  hoveredId !== null && hoveredId !== project.id
                    ? 'blur opacity-30 scale-[0.98]'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: project.bgColor,
                  padding: '10px 10px 50px 10px',
                }}
              >
                <div className="w-full flex justify-center mb-6 relative">
                  <div
                    className={`relative rounded-[10px] overflow-hidden transition-transform duration-800 ${
                      hoveredId === project.id ? 'scale-[1.04]' : ''
                    } w-full max-w-md`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-[10px] w-full h-auto object-contain mx-auto"
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${project.bgColor} 100%)`,
                      }}
                    />
                  </div>

                  <div
                    className={`absolute top-0 right-0 bg-[#111111]/30 rounded-full p-1 cursor-pointer transition-transform duration-800 ${
                      hoveredId === project.id ? 'rotate-45' : ''
                    }`}
                  >
                    <FiArrowUpRight className="text-white text-xl" />
                  </div>
                </div>

                <div
                  className={`flex justify-center mb-4 transition-transform duration-800 ${
                    hoveredId === project.id ? 'scale-[1.04]' : 'scale-100'
                  }`}
                >
                  <span className="px-4.5 py-2.5 rounded-full text-sm font-medium text-white bg-[#18181B]/50 backdrop-blur">
                    {project.genre}
                  </span>
                </div>

                <div className="max-w-[80%] mx-auto text-center">
                  <p
                    className={`text-md mt-2 font-medium transition-transform duration-800 ${
                      hoveredId === project.id ? 'scale-[1.04]' : 'scale-100'
                    }`}
                    style={{ color: project.textColor }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </AnimatePage>
  );
};


export default Work;
