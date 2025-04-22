import React, { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';
import project4 from '../Assets/project4.png';
import Link from 'next/link';

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
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="flex flex-col items-center px-4 py-16 md:py-18">
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

      <div className="mt-8">
        <Link href="/Work">
          <button className="cursor-pointer px-[32px] py-[14px] rounded-full border border-[#262626] 
                             bg-[#18181B]/80 backdrop-blur text-white 
                             hover:bg-[#1f1f1f] hover:border-[#35353A] transition duration-500">
            See more projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Work;
