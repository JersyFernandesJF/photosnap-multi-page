"use client";
import LogoIMG from "@/public/logo/photosnap_logo_black.png";
import Image from "next/image";
import SocialIcons from "./social-icons";
import FooterNavigation from "./footer-navigation";
import Link from "next/link";
import ArrowButton from "../buttons/arrow-button";

export default function Footer() {
  const Logo = () => {
    <Image
      src={LogoIMG}
      alt="logo"
      className="h-4 w-[170px] translate-x-1"
      priority
    />;
  };
  const GetAnInviteBtn = () =>(
    <ArrowButton href="#">Get an invite</ArrowButton>
  )
  const CopyRight = () => (
    <div className="flex flex-col items-center gap-2 tablet:flex-row tablet:items-end tablet:gap-4">
      <Link href="/design-system" className="opacity-50 hover:opacity-60">
      Design System
      </Link>
      <p className="opacity-50">Copyright 2019. All Rights Reserved</p>
    </div>
  );
  return (
    <footer className="h-[540px] w-full bg-brand-black px-6 py-14 text-brand-white tablet:h-[284px] tablet:px-10 tablet:py-16 desktop:h-[250px]">

    </footer>
  )

}
