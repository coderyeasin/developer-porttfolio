import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export type NaveType = {
  title: string;
  path: string;
};

export type SkillsType = {
  icon: ReactNode;
  title: string;
  content: string;
};

export type BackgroundType = {
  id: string;
  title: string;
  institute: string;
  description: string;
};

export type UserInfoType = {
  title: string;
  heading: string;
};
