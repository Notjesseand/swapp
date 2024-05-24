import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import React from "react";
import { FaBars } from "react-icons/fa6";

export default function sidebar() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          {" "}
          <FaBars className="text-3xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="pt-10">
            <Link href="/" className="flex mx-auto text-lg py-2  ">
              Home
            </Link>
            <Link href="/rates" className="flex mx-auto text-lg py-2  ">
              Currencies{" "}
            </Link>
            <Link href={""} className="flex mx-auto text-lg py-2  ">
              App
            </Link>
            <Link href={""} className="flex mx-auto text-lg py-2  ">
              Company{" "}
            </Link>
            <Link href={""} className="flex mx-auto text-lg py-2  ">
              Support
            </Link>
            <Link href={""} className="flex mx-auto text-lg py-2  ">
              {" "}
              Dashboard
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
