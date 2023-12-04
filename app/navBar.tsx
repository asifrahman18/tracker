"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { GiProgression } from "react-icons/gi";
import classNames from "classnames";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  const links = [
    { label: "Home", href: "/" },
    { label: "Tasks", href: "/tracker" },
  ];
  const currentPath = usePathname();
  return (
    <nav className=" bg-cyan-500 py-3">
      <Container>
        <Flex align="center" justify='between'>
          <Flex gap='3'>
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
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar src={session.user!.image!} fallback="?" radius="full"/>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>{session.user!.name}</DropdownMenu.Label>
                  <DropdownMenu.Label>
                    {session.user!.email}
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                      <Link href="/api/auth/signout">Sign Out</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
