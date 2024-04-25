import {ReactNode} from "react";

interface ButtonPropsInterface {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  //todo
  value?: never;
  url?: string;
  onClickLink?: (url: string) => void;
  onClick?: () => void;
  children: ReactNode

}

export const Button = ({type, className, url, onClick, onClickLink, children}: ButtonPropsInterface) => {
  return (
    <>
      <button type={type} className={className} role={"buttonTest"}
              onClick={() => {
                if (url && onClickLink) onClickLink(url)
                else if (onClick) onClick()
              }}>
        {children}
      </button>

    </>
  )
}