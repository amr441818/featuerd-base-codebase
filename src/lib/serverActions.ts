"use server";

import { cookies } from "next/headers";
import apiServiceCall from "./apiServiceCall";
import { errorsHandling } from "./errorHandling";

const getTokenCookies = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return token;
};

export const getHomeData = async (lang: string) => {
  try {
    const data = await apiServiceCall({
      url: "home",
      headers: { "Accept-Language": lang },
    });
    return data?.data;
  } catch (error) {
    errorsHandling(error, lang);
  }
};
export const getSettings = async (lang: string) => {
  try {
    const data = await apiServiceCall({
      url: "settings",
      headers: { "Accept-Language": lang },
    });
    return data?.data;
  } catch (error) {
    errorsHandling(error, lang);
  }
};

export const getProfile = async (lang: string) => {
  const token = await getTokenCookies();
  try {
    const data = await apiServiceCall({
      url: "get-profile",
      headers: { "Accept-Language": lang, Authorization: `Bearer ${token}` },
    });
    return data?.data;
  } catch (error) {
    errorsHandling(error, lang);
  }
};
export const getNotifications = async (lang: string) => {
  const token = await getTokenCookies();
  try {
    const data = await apiServiceCall({
      url: "notifications",
      headers: { "Accept-Language": lang, Authorization: `Bearer ${token}` },
    });
    return data?.data;
  } catch (error) {
    errorsHandling(error, lang);
  }
};
