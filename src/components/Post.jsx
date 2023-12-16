import Image from "next/image";
import Link from "next/link";
import React from "react";
const Names = [
  "Amelia Mitchell",
  "Benjamin Harper",
  "Olivia Thompson",
  "Ethan Anderson",
  "Isabella Foster",
  "Caleb Parker",
  "Sophia Reynolds",
  "Jackson Hayes",
  "Lily Simmons",
  "Henry Martinez",
];
const Post = ({ params, id, title, body, userId }) => {
  return (
    <div
      className="h-auto my-10 flex justify-between bg-[#080d0d] rounded-[20px] bg-gradient-to-b from-[#173b4d] from-1% to-[#080d0d] to-90%"
      key={id}
    >
      <div className="w-[600px] p-5">
        <h2 className="text-xl">{title}</h2>
        <div className="flex my-2">
          <Image
            src="https://source.unsplash.com/person/30*30"
            height={30}
            width={20}
            alt="author"
            className="rounded-full mr-2"
          />
          <small className="text-gray-300">{Names[userId - 1]}</small>
        </div>
        <p className="inline mr-2">{body.slice(0, 85) + "..."}</p>
        <Link href={`/posts/${id}`} className="inline text-bold text-blue-600">
          Read More
        </Link>
      </div>
      <div className="w-[300px] h-auto relative">
        <Image
          src="https://source.unsplash.com/random"
          alt="random image"
          fill={true}
          className="rounded-r-[20px]"
        />
      </div>
    </div>
  );
};

export default Post;
