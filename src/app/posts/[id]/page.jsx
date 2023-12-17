"use client";
import Loader from "@/components/Loader";
import IsAuth from "@/utils/firebase/IsAuth";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

const PostInfo = ({ params }) => {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );

      if (!res.ok) {
        setError("Failed to fetch data");
      }

      const data = await res.json();
      setPost(data);
      setIsLoading(false);
    };
    getData();
  }, [params.id]);
  return (
    <>
      <IsAuth>
        {isLoading ? (
          <Loader color="blue" />
        ) : (
          <div className="h-auto container mt-80">
            <div className="flex justify-between mt-10">
              <div className="flex-1 pr-10">
                <h2 className="text-4xl">{post.title}</h2>
                <div className="flex my-2">
                  <Image
                    src="https://source.unsplash.com/person/30*30"
                    height={30}
                    width={20}
                    alt="author"
                    className="rounded-full mr-2 object-cover"
                  />
                  <small className="text-gray-300">
                    {Names[post.userId - 1]}
                  </small>
                </div>
                <p className="text-justify">{post.body}</p>
                <br />
                <p className="text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quae magni doloribus hic autem dicta recusandae
                  perferendis, architecto ipsa! Modi perspiciatis eveniet
                  placeat sunt blanditiis. Debitis, suscipit dignissimos iste
                  perferendis omnis aliquid, quidem nesciunt unde hic
                  exercitationem maiores repudiandae dolorum sapiente laudantium
                  inventore. Cumque iusto accusantium labore, aspernatur
                  eligendi asperiores.
                </p>
              </div>
              <div className="h-auto w-[300px] relative">
                <Image
                  src="https://source.unsplash.com/random"
                  alt="random image"
                  fill={true}
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="mb-10 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                laboriosam amet unde officiis quae beatae optio nostrum
                aspernatur doloribus quasi, a excepturi laudantium labore
                necessitatibus fugit accusamus molestiae sequi rerum ratione
                fugiat quod earum. Illo dolorum quos dignissimos, ipsam
                voluptate illum libero deleniti, asperiores natus sint quod
                facilis sed ullam distinctio? Minus iusto possimus neque
                accusantium cupiditate eligendi! Voluptatibus, doloremque
                corporis illo cumque reiciendis laborum ipsa optio obcaecati
                veniam deleniti sunt laudantium eos nobis eum maiores aut quia
                ut. Id eum recusandae maiores reiciendis obcaecati nesciunt
                doloribus accusamus possimus, praesentium et quam libero in
                animi dolorem debitis harum assumenda rem quaerat blanditiis
                aspernatur quo! Laborum ab odit et, consequuntur, perferendis ex
                qui sapiente sequi quae quaerat illum dignissimos provident,
                quis possimus esse dolores omnis nesciunt. Praesentium expedita
                sequi dolorem quae nobis possimus nesciunt facere explicabo
                veniam harum reiciendis vel pariatur tempore accusamus assumenda
                voluptatibus laboriosam, minus ipsam cum. Inventore, corrupti.
              </p>
            </div>
          </div>
        )}
      </IsAuth>
    </>
  );
};

export default PostInfo;
