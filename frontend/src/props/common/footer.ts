import { Dispatch } from "react";

export type FooterProps = {
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
};

export type MenuProps = {
  text: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
};
