import React from "react";
import classNames from "classnames";
import { PRIMARY_COLOR, SMALL_CARD } from "../../constants";
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
  color = PRIMARY_COLOR,
  size = SMALL_CARD,
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
