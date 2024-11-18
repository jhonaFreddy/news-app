'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Card({ title, description, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm mx-auto my-3 overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative">
        <Image
          className="w-full h-auto rounded-xl"
          src={imageUrl}
          alt={title}
          width={800}
          height={600}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h2 className="text-black font-bold text-lg">{title}</h2>
        </div>
      </figure>

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white p-4 text-center">
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}


