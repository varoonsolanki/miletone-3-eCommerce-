'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface SlugComponentProps {
  image: string | string[] | StaticImageData; // Define possible types
}

const SlugComponent: React.FC<SlugComponentProps> = ({ image }) => {
  const [path, setPath] = useState<string | StaticImageData>("");

  return (
    <div>
      {/* Main Image */}
      <Image 
        src={path ? path : Array.isArray(image) ? image[0] : image} 
        alt="E-commerce" 
        width={400} 
        height={400}
      />
      {/* Thumbnail Images */}
      {Array.isArray(image) && (
        <div className="flex items-center justify-evenly mx-auto mt-2">
          {image.map((item, i) => (
            <div key={i} className="cursor-pointer w-16 h-16">
              <Image 
                src={item} 
                alt="Picture" 
                width={60} 
                height={60}
                onClick={() => setPath(item)} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SlugComponent;