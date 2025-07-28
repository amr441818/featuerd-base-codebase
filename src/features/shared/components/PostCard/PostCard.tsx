"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PostI } from "../../../../types/posts";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Liked from "./Liked";
import useAddLike from "../../hooks/useAddLike";


interface PostCardProps {
  post: PostI;
}
const PostCard = ({ post }: PostCardProps) => {
  const isLongText = post?.content?.length > 150;
  const [readAll, setReadAll] = useState(isLongText);
  const { addLike } = useAddLike(post.id);
  const toggleReadMore = () => {
    setReadAll(!readAll);
  };
  return (
    <div className=" max-w-[600px] w-full  relative py-[12px] px-[18px] border-[1px] border-[#ECECEC] rounded-[12px]">
      <div className="user flex justify-between items-start">
        <div className="userInfo flex items-start gap-2">
          <div className="image relative w-fit ">
            <PhotoProvider>
              <PhotoView
                src={post?.company.company_image || "/images/blankProfile.png"}
              >
                <Image
                  src={
                    post?.company.company_image || "/images/blankProfile.png"
                  }
                  alt={post?.company.company_name}
                  width={56}
                  height={56}
                  className="rounded-full w-[56px] h-[56px] cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
            <Image
              src="/images/addIcon.svg"
              alt="Add icon"
              width={26}
              height={26}
              className="rounded-full absolute bottom-[-10px] right-[50%] translate-x-[50%]"
            />
          </div>
          <div className="date name">
            <p className="text-[12px] text-[#898989] ">
              {post?.company.company_name}
            </p>
            <div className="flex items-center gap-1 ">
              <Image
                src="/images/clock.svg"
                alt="clock icon"
                width={13}
                height={13}
                className="clock"
              />
              <p className="text-[10px] text-[#898989]"> {post?.created_at}</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/shareIcon.svg"
          alt="share icon"
          width={18}
          height={18}
          className="share"
        />
      </div>
      <div>
        <div className={`content text-[#2C343C] text-[11px] mt-[22px] mb-2 `}>
          {readAll ? post?.content?.slice(0, 150) : post?.content}
          {isLongText && (
            <span
              onClick={toggleReadMore}
              className="text-[#62C483] cursor-pointer hover:underline text-[11px] px-2"
            >
              {readAll ? "قراء المزيد..." : "إخفاء"}
            </span>
          )}
        </div>
        {post?.media_type === "image" && post?.media ? (
          <PhotoProvider>
            <PhotoView src={post?.media}>
              <Image
                src={post?.media}
                alt="Post Image"
                width={500}
                height={113}
                className="w-full h-[200px] rounded-[12px] object-contain cursor-pointer"
              />
            </PhotoView>
          </PhotoProvider>
        ) : post?.media_type === "video" && post?.media ? (
          <video
            src={post?.media}
            autoPlay
            muted
            playsInline
            loop
            className=" w-full h-[200px] object-contain "
            controls
          />
        ) : null}
      </div>
      <div className="info border-t-[1px] border-[#ECECEC] mt-4 pt-4 flex justify-between items-center">
        <div className="likes-comments flex items-center gap-2 sm:gap-4 md:gap-8 lg:gap-[45px]">
          <div
            className="likes flex items-center gap-1 cursor-pointer"
            onClick={addLike}
          >
            <Liked is_liked={post?.is_liked} />
            <p className="text-[12px] text-[#898989]">إعجاب</p>
            <span className="text-[10px] text-[#62C483]  bg-[#62C483]/[0.12] rounded-[9px] px-3 w-fit h-[18px] flex justify-center items-center">
              {post?.total_likes}
            </span>
          </div>
          <div className="likes flex items-center gap-1">
            <Image
              src="/images/comment.svg"
              alt="like icon"
              width={16}
              height={16}
            />
            <p className="text-[12px] text-[#898989]">تعليق</p>
            <span className="text-[10px] text-[#00B8B3]  bg-[#00B8B3]/[0.12] rounded-[9px] px-3 w-fit h-[18px] flex justify-center items-center">
              {post?.total_comments}
            </span>
          </div>
        </div>
        <div className="report flex items-center gap-1">
          <Image
            src="/images/report.svg"
            alt="report icon"
            width={20}
            height={20}
          />
          <p className="text-[12px] text-[#898989]">إبلاغ</p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
