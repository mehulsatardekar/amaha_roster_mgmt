import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileDetails = (props) => {
  const { profileUrl = "", name = "", userId } = props || {};
  return (
    <div className="flex flex-col gap-2 w-[20%]">
      <Image
        src={profileUrl}
        alt="Provider"
        width={64}
        height={64}
        className="rounded-full mr-2"
      />
      <h5 className="text-[#607447] font-semibold underline underline-offset-4">
        {name}
      </h5>
      <div className="flex gap-2 mt-2">
        <Image
          src={
            "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740637193/amaha_health/offline_k8qvq7.svg"
          }
          alt="Offline"
          width={50}
          height={50}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740636987/amaha_health/online_f7lg3a.svg"
          }
          alt="Online"
          width={50}
          height={50}
        />
      </div>

      <Link
        href={`user/${userId}`}
        className="text-red-500 mt-4 underline underline-offset-4"
      >
        View Calendar
      </Link>
    </div>
  );
};

export default ProfileDetails;
