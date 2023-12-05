"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#awards", label: "Awards" },
  {
    href: "https://drive.google.com/file/d/1XdjiOlwxWced9ZCvzwyLcPiZANGwptAV/view",
    label: "Resume",
  },
];

export default function MobileNav() {
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  return (
    isJsEnabled && (
      <div className="sm:hidden fixed top-6 w-56 right-6 text-right z-10">
        <Menu
          as="div"
          className="relative inline-block text-left shadow-3xl shadow-black"
        >
          <div className="group/menu">
            <div
              className="pt-[0.075rem] px-[0.1rem] rounded-lg bg-gradient-to-r from-neutral-700/30 via-neutral-600 to-neutral-700/30 
          group-hover/menu:from-neutral-700/30 group-hover/menu:via-neutral-600 group-hover/menu:to-neutral-700/30
          group-focus/menu:from-neutral-700/30 group-focus/menu:via-neutral-600 group-focus/menu:to-neutral-700/30 transition-colors
          "
            >
              <Menu.Button className="inline-flex w-full justify-center rounded-lg bg-neutral-800 group-hover/menu:bg-neutral-800/60 transition-colors px-4 py-2 text-sm font-medium text-neutral-200">
                Menu
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-neutral-200 transition-transform"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-neutral-900/90 backdrop-blur border border-neutral-800/60 shadow-3xl shadow-neutral-950/60">
              {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? "text-neutral-200 bg-neutral-700/30 focus:bg-neutral-700/30 backdrop-blur rounded-lg transition-colors m-0.5 block p-2.5 text-sm font-medium"
                          : "text-neutral-200 rounded-lg transition-colors m-0.5 block p-2.5 text-sm font-medium"
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  );
}
