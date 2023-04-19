import Image from "next/image";
import React from "react";

interface CardProps {
  person: {
    name: string;
    role: string;
    img?: string;
  };
}

const ProfileCard: React.FC<CardProps> = ({ person }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-1 flex-1 rounded-md py-3">
      {person.img && (
        <Image
          src={person.img}
          alt={person.name}
          width={80}
          height={80}
          className="rounded-full bg-contain w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
        />
      )}
      <h3 className="font-bold italic">{person.name}</h3>
      <h3 className="font-bold italic">{person.role}</h3>
    </div>
  );
};

export default ProfileCard;
