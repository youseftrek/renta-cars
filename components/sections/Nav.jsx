import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { NavLinks } from "@/constants/const";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "../ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center shadow-sm p-3 xl:py-4 xl:px-6">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="renta car logo"
          width={140}
          height={60}
        />{" "}
        {/* Modify this line */}
      </Link>
      <div className="hidden xl:flex">
        {NavLinks.map((link) => (
          <Link href={link.path} key={link.name}>
            <Button className="font-bold" variant="ghost">
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
      <div className="hidden xl:flex xl:gap-2">
        <Sheet>
          <SheetTrigger>
            <Button className="font-bold" variant="secondary">
              <FaSearch />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-[30px]" side="top">
            <div className="flex gap-3 w-full justify-center">
              <Input className="w-1/3" placeholder="Search..." />
              <Button className="font-bold">
                <FaSearch />
              </Button>
            </div>
            <div className="flex flex-col gap-2 w-full pt-8 xl:hidden">
              {NavLinks.map((link) => (
                <Link href={link.path} key={link.name}>
                  <Button className="font-bold" variant="ghost">
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger>
            <Button className="font-bold">
              <FaCartFlatbed />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-[50px]">
            <div>
              <h2>CartContent</h2>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* MOBILE NAV */}
      <div className="flex gap-2 xl:hidden">
        <Sheet>
          <SheetTrigger>
            <Button className="font-bold" variant="secondary">
              <TiThMenu />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-[50px]" side="top">
            <div>
              <div className="flex gap-3">
                <Input placeholder="Search..." />
                <Button className="font-bold">
                  <FaSearch />
                </Button>
              </div>
              <div className="flex flex-col gap-2 w-full pt-8 xl:hidden">
                {NavLinks.map((link) => (
                  <Button
                    className="font-bold"
                    variant="secondary"
                    key={link.name}>
                    <Link href={link.path}>{link.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <Button className="font-bold">
              <FaCartFlatbed />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-[50px]">
            <div>
              <h2>CartContent</h2>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
