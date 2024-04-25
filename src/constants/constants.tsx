import {PATHS} from "../router/constants.ts";

export const inputClassName = "h-10 w-full focus:outline-none    border-b-primary-2 border-b-2 transition ease-in-out delay-50 duration-300 focus:-translate-y-1  " +
  "invalid:border-pink-500 invalid:border-b-4 \n" +
  "focus:invalid:ring-pink-500"

export const links = [
  {
    url: PATHS.dashboard,
    icon: "icon-home",
    name: "Home"
  },
  {
    url: "/*/images",
    icon: "icon-images",
    name: "Images"
  },
  {
    url: PATHS.tasks,
    icon: "icon-paragraph-justify",
    name: "Tasks"
  },


]
