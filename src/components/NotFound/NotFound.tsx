import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Image
        src={
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740680890/amaha_health/14261113_2003.i121.050..isometric_psychologist_set-08_abz0vs.svg"
        }
        height={300}
        width={400}
        alt="No therapist found"
      />
      <h3 className="text-4xl font-extrabold dark:text-white">No Therapist Found</h3>
    </div>
  );
};

export default NotFound;
