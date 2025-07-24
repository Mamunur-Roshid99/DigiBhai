"use client";

import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DrawerMenu() {

  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Service" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/client", label: "Client" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ul className="flex flex-col space-y-5 p-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative text-[#A9B1C5] transition-colors duration-200 dm_sans md:text-xs font-medium lg:text-base ${
                pathname === link.href
                  ? "active-gradient-text active-gradient-underline"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu />
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 123, 255, 0.1)", // translucent blue
            backdropFilter: "blur(12px)", // blur effect
            WebkitBackdropFilter: "blur(12px)", // Safari support
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "white",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
