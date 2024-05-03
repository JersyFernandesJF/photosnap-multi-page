"use client"

import Link from "next/link"
import Image from "next/image";

import useIsCurrentRoute from "@/lib/hooks/useIsCurrentRoute";
import PrimaryButton from "@/components/buttons/primary-button";
import Logo from "@/public/logo/photosnap_logo_white.png";
import data from "../../../data";
import Navigation from "@/components/navigation/navigation";

export default function Header() {
  const { isCurrentRoute } = useIsCurrentRoute("/");

  const routes = data.routes.slice(1)
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-[72px] max-w-full justify-center bg-brand-white px-6 table:px-10">
      <div className="flex w-full max-w-[1110px] items-center justify-between">
       <Link
       className="flex-[0_0_170px]"
       href="/"
       {...(isCurrentRoute ?{"aria-current":"page"}:{})}

       >
       <Image src={Logo} alt="logo" priority className="h-4 w-[170px]"/>
       </Link>
       <div className="hidden w-full tablet:block">
        <Navigation routes ={routes}/>
       </div>
       <div className="hidden tablet:block">
        <PrimaryButton href="#">Get an Invite</PrimaryButton>
       </div>
        <div className="tablet:hidden">

        </div>
      </div>
    </header>
  )
}