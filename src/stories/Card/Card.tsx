import React from "react";
import classNames from "classnames";
import "./Card.css";

export interface Props {
  children: string;
  color: string;
  size: string;
  isClickable: boolean;
  isDragable: boolean;
}

export const Card = ({
  children = "I'm a card",
  color = "primary",
  size = "sm",
  isClickable,
  isDragable,
}: Props) => {
  return (
    <div
      className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-dragable": isDragable,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
