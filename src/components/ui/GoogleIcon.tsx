import Image from "next/image";
import React from "react";

type GoogleIconProps = {
  size?: number;
};

export default function GoogleIcon({ size = 20 }: GoogleIconProps) {
  return (
    <Image src="/googleicon.svg" alt="Google icon" width={size} height={size} />
  );
}
