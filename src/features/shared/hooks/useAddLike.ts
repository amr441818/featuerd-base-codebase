"use client";

import apiServiceCall from "@/lib/apiServiceCall";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAddLike = (postId: string) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/auth/get-token", { method: "GET" });

        if (response.ok) {
          // API returns plain text, not JSON
          const dataToken = await response.text();
          setToken(dataToken);
        } else {
          setToken(null);
        }
      } catch (error) {
        setToken(null);
      }
    };
    fetchToken();
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: async (postId: string) => {
      if (!token) {
        throw new Error("الرجاء تسجيل الدخول لإضافة إعجاب");
      }
      return apiServiceCall({
        url: `posts/${postId}/like-toggle`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const addLike = () => {
    if (!token) {
      toast.error("الرجاء تسجيل الدخول لإضافة إعجاب");
      return;
    }
    mutate(postId);
  };
  return { addLike, isPending, token };
};

export default useAddLike;
