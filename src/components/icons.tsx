import React, { FC } from "react";
import {
  BsChevronLeft,
  BsEnvelopeAt,
  BsFillHouseFill,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsTwitter,
  BsWechat,
  BsWhatsapp,
  BsX,
  BsYoutube,
} from "react-icons/bs";
export { HiBars3 as IconMenu } from "react-icons/hi2";

const icons: any = {
  instagram: BsInstagram,
  youtube: BsYoutube,
  email: BsEnvelopeAt,
  telegram: BsTelegram,
  twitter: BsTwitter,
  whatsapp: BsWhatsapp,
  wechat: BsWechat,
  tiktok: BsTiktok,

  close: BsX,
  chevronLeft: BsChevronLeft,
  home: BsFillHouseFill,
};

interface IconFactoryProps {
  name?: string;
  props?: object;
}

export const IconFactory: FC<IconFactoryProps> = ({ name, props = {} }) => {
  if (!name) return null;
  const IconComponent = icons[name];
  return React.createElement(IconComponent, props);
};
