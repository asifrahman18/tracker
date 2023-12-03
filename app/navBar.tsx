"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { GiProgression } from "react-icons/gi";
import classNames from "classnames";
import { Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Tasks", href: "/tracker" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="border-b mb-6 px-5 h-14 bg-cyan-500">
      <Container>
        <Flex align="center" gap="2">
          <Flex content="justify">
            <Link href="/">
              <GiProgression size={30} style={{ color: "white" }} />
            </Link>
            <ul className="flex space-x-6 text-xl items-center">
              {links.map((link, i) => (
                <li key={i}>
                  <Link className="text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
