"use client";
import Man_Avatar from "@/../public/images/avatar/man.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { RiImageEditLine } from "react-icons/ri";

const UserInfo = () => {
  const [avatar, setAvatar] = useState<StaticImageData | string>(Man_Avatar);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <div className="relative w-12 h-12">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={avatar}
              className="rounded-full object-cover"
              alt="User Avatar"
              width={48}
              height={48}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <RiImageEditLine className="w-5 h-5 text-white" />
            </div>
          </div>
        </label>
      </div>
      <div>
        <h3 className="font-medium">Md Shobuj</h3>
        <p className="text-sm line-clamp-1 text-gray-700">
          mdshobuj123@gmail.com
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
