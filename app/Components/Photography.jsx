'use client';

import Image from 'next/image';
import AnimatePage from './AnimatePage';

import Image1 from '../Assets/Photos/1.jpg';
import Image2 from '../Assets/Photos/2.jpg';
import Image3 from '../Assets/Photos/3.jpg';
import Image4 from '../Assets/Photos/4.jpg';
import Image5 from '../Assets/Photos/5.jpg';
import Image6 from '../Assets/Photos/6.jpg';
import Image7 from '../Assets/Photos/7.jpg';
import Image8 from '../Assets/Photos/8.jpg';
import Image9 from '../Assets/Photos/9.jpg';
import Image10 from '../Assets/Photos/10.jpg';
import Image11 from '../Assets/Photos/11.jpg';
import Image12 from '../Assets/Photos/12.jpg';
import Image13 from '../Assets/Photos/13.jpg';
import Image14 from '../Assets/Photos/14.jpg';
import Image15 from '../Assets/Photos/15.jpg';
import Image16 from '../Assets/Photos/16.jpg';
import Image17 from '../Assets/Photos/17.jpg';
import Image18 from '../Assets/Photos/18.jpg';
import Image19 from '../Assets/Photos/19.jpg';
import Image20 from '../Assets/Photos/20.jpg';
import Image21 from '../Assets/Photos/21.jpg';
import Image22 from '../Assets/Photos/22.jpg';
import Image23 from '../Assets/Photos/23.jpg';
import Image24 from '../Assets/Photos/24.jpg';
import Image25 from '../Assets/Photos/25.jpg';
import Image26 from '../Assets/Photos/26.jpg';
import Image27 from '../Assets/Photos/27.jpg';
import Image28 from '../Assets/Photos/28.jpg';
import Image29 from '../Assets/Photos/29.jpg';
import Image30 from '../Assets/Photos/30.jpg';
import Image31 from '../Assets/Photos/31.jpg';
import Image32 from '../Assets/Photos/32.jpg';
import Image33 from '../Assets/Photos/33.jpg';
import Image34 from '../Assets/Photos/34.jpg';
import Image35 from '../Assets/Photos/35.jpg';
import Image36 from '../Assets/Photos/36.jpg';
import Image37 from '../Assets/Photos/37.jpg';
import Image38 from '../Assets/Photos/38.jpg';
import Image39 from '../Assets/Photos/39.jpg';
import Image40 from '../Assets/Photos/40.jpg';
import Image41 from '../Assets/Photos/41.jpg';
import Image42 from '../Assets/Photos/42.jpg';
import Image43 from '../Assets/Photos/43.jpg';
import Image44 from '../Assets/Photos/44.jpg';
import Image45 from '../Assets/Photos/45.jpg';
import Image46 from '../Assets/Photos/46.jpg';
import Image47 from '../Assets/Photos/47.jpg';
import Image48 from '../Assets/Photos/48.jpg';
import Image49 from '../Assets/Photos/49.jpg';
import Image50 from '../Assets/Photos/50.jpg';
import Image51 from '../Assets/Photos/51.jpg';
import Image52 from '../Assets/Photos/52.jpg';
import Image53 from '../Assets/Photos/53.jpg';
import Image54 from '../Assets/Photos/54.jpg';
import Image55 from '../Assets/Photos/55.jpg';
import Image56 from '../Assets/Photos/56.jpg';
import Image57 from '../Assets/Photos/57.jpg';
import Image58 from '../Assets/Photos/58.jpg';
import Image59 from '../Assets/Photos/59.jpg';
import Image60 from '../Assets/Photos/60.jpg';
import Image61 from '../Assets/Photos/61.jpg';
import Image62 from '../Assets/Photos/62.jpg';
import Image63 from '../Assets/Photos/63.jpg';
import Image64 from '../Assets/Photos/64.jpg';
import Image65 from '../Assets/Photos/65.jpg';
import Image66 from '../Assets/Photos/66.jpg';
import Image67 from '../Assets/Photos/67.jpg';
import Image68 from '../Assets/Photos/68.jpg';
import Image69 from '../Assets/Photos/69.jpg';
import Image70 from '../Assets/Photos/70.jpg';
import Image71 from '../Assets/Photos/71.jpg';
import Image72 from '../Assets/Photos/72.jpg';
import Image73 from '../Assets/Photos/73.jpg';
import Image74 from '../Assets/Photos/74.jpg';
import Image75 from '../Assets/Photos/75.jpg';
import Image76 from '../Assets/Photos/76.jpg';
import Image77 from '../Assets/Photos/77.jpg';
import Image78 from '../Assets/Photos/78.jpg';
import Image79 from '../Assets/Photos/79.jpg';
import Image80 from '../Assets/Photos/80.jpg';
import Image81 from '../Assets/Photos/81.jpg';
import Image82 from '../Assets/Photos/82.jpg';
import Image83 from '../Assets/Photos/83.jpg';
import Image84 from '../Assets/Photos/84.jpg';
import Image85 from '../Assets/Photos/85.jpg';
import Image87 from '../Assets/Photos/87.jpg';
import Image88 from '../Assets/Photos/88.jpg';
import Image89 from '../Assets/Photos/89.jpg';
import Image90 from '../Assets/Photos/90.jpg';
import Image91 from '../Assets/Photos/91.jpg';
import Image92 from '../Assets/Photos/92.jpg';
import Image93 from '../Assets/Photos/93.jpg';
import Image94 from '../Assets/Photos/94.jpg';
import Image95 from '../Assets/Photos/95.jpg';
import Image97 from '../Assets/Photos/97.jpg';
import Image98 from '../Assets/Photos/98.jpg';

import Image166 from '../Assets/Photos/166.jpg';
import Image167 from '../Assets/Photos/167.jpg';
import Image168 from '../Assets/Photos/168.jpg';


// Add your full list of images here
const images = [

  Image1, Image2, Image3, Image4, Image166, Image5, Image23, Image17, Image20, Image168, Image9, Image10,
  Image11, Image12, Image22, Image13, Image167, Image15, Image16, Image7, Image18, Image19, Image8,
  Image21, Image14, Image6, Image24, Image25, Image26, Image27, Image28, Image29, Image30,
  Image31, Image32, Image33, Image34, Image35, Image36, Image37, Image38, Image39, Image40,
  Image41, Image42, Image43, Image44, Image45, Image46, Image47, Image48, Image49, Image50,
  Image51, Image52, Image53, Image54, Image55, Image56, Image57, Image58, Image59, Image60,  
  Image61, Image62, Image63, Image64, Image65, Image66, Image67, Image68, Image69, Image70,  
  Image71, Image72, Image73, Image74, Image75, Image76, Image77, Image78, Image79, Image80,  
  Image81, Image82, Image83, Image84, Image85, Image87, Image88, Image89, Image90,  
  Image91, Image92, Image93, Image94, Image95, Image97, Image98  
  // Image101, Image102, Image103, Image104, Image105, Image106, Image107, Image108, Image109, Image110,  
  // Image111, Image112, Image113, Image114, Image115, Image116, Image117, Image118, Image119, Image120,  
  // Image121, Image122, Image123, Image124, Image125, Image126, Image127, Image128, Image129, Image130,  
  // Image131, Image132, Image133, Image134, Image135, Image136, Image137, Image138, Image139, Image140,  
  // Image141, Image142, Image143, Image144, Image145, Image146, Image147, Image148, Image149, Image150,  
  // Image151, Image152, Image153, Image154, Image160,  
  // Image161, Image162, Image163, Image164, Image165


];

const PhotographyPage = () => {
  return (
    <AnimatePage>
      <div className="px-4 py-30 max-w-[1100px] mx-auto">

        {/* Heading and Intro Text */}
        <div className="text-center mb-24 mt-12 mx-auto max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-[850px]">
  <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white ">
    My Photo Gallery
  </h2>
  <p className="text-md sm:text-lg text-gray-300 leading-relaxed mt-5">
    Shot across India, from Corbett to Kabini, and even Tanzania, of all places! Some of these photos were taken while standing chest deep in the Indian Ocean, some while lying on wet cow dung in the rain, or halfway up a tree! It’s never just about pressing the shutter button.
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-md">
              <Image
                src={src}
                alt={`Portrait ${index + 1}`}
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};


export default PhotographyPage;
