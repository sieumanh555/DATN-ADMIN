"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  ChevronDownIcon,
  ArrowTurnDownRightIcon,
  ShoppingBagIcon,
  CircleStackIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  BanknotesIcon,
  UserCircleIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

import { GridIcon } from "../icons/index";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Statistics", path: "/", pro: false }],
  },
  {
    name: "Product Management",
    icon: <CircleStackIcon className="h-6 w-6" />,
    subItems: [
      { name: "Product List", path: "/sanpham", pro: false },
      { name: "Categories List", path: "/danhmuc", pro: false },
    ],
  },
  {
    name: "Account Management",
    icon: <UserCircleIcon className="h-6 w-6" />,
    subItems: [
      { name: "User Account", path: "/tkkh", pro: false },
      { name: "Employee Account", path: "/tknv", pro: false },
    ],
  },
  {
    name: "Feedback Management",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    subItems: [{ name: "Feedback List", path: "/danhgia", pro: false }],
  },
  {
    name: "News List",
    icon: <BookOpenIcon className="h-6 w-6" />,
    subItems: [
      { name: "News Management", path: "/tintuc", pro: false },
      { name: "News Settings", path: "/news", pro: false },
    ],
  },
  {
    name: "Voucher List",
    icon: <BanknotesIcon className="h-6 w-6" />,
    subItems: [
      { name: "Voucher Management", path: "/phieugiam", pro: false },
      { name: "Voucher Settings", path: "/voucher", pro: false },
      { name: "Discount Limit", path: "/discountLmit", pro: false },
    ],
  },
  {
    name: "Order Management",
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    subItems: [{ name: "Order List", path: "/donhang", pro: false }],
  },
  {
    name: "Supplier Management",
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    path: "/ncc",
  },
];

const othersItems: NavItem[] = [
  {
    icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
    name: "Policies",
    path: "/policies",
  },
  {
    icon: <DocumentTextIcon className="h-6 w-6" />,
    name: "Regulations",
    path: "/regulations",
  },
  {
    icon: <InformationCircleIcon className="h-6 w-6" />,
    name: "Support",
    path: "/support",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    name: "Setting",
    path: "/setting",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    // Set client ready after component mounts
    setClientReady(true);
  }, []);

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others",
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="ml-9 mt-2 space-y-1">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      <ArrowTurnDownRightIcon
                        width={24}
                        height={24}
                      ></ArrowTurnDownRightIcon>{" "}
                      {subItem.name}
                      <span className="ml-auto flex items-center gap-1">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    clientReady && (
      <aside
        className={`fixed left-0 top-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900 lg:mt-0 ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
              ? "w-[290px]"
              : "w-[90px]"
        } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex py-8 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
        >
          <Link href="/">
            {isExpanded || isHovered || isMobileOpen ? (
              <>
                <Image
                  className="dark:hidden"
                  src="/images/logo/logo.png"
                  alt="Logo"
                  width={150}
                  height={40}
                />
                <Image
                  className="hidden dark:block"
                  src="/images/logo/logo-dark.svg"
                  alt="Logo"
                  width={150}
                  height={40}
                />
              </>
            ) : (
              <Image
                src="/images/logo/logos.png"
                alt="Logo"
                width={32}
                height={32}
              />
            )}
          </Link>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mb-6">
            <div className="space-y-6">{renderMenuItems(navItems, "main")}</div>
          </nav>
          <nav>
            <div className="space-y-6">
              {renderMenuItems(othersItems, "others")}
            </div>
          </nav>
        </div>
      </aside>
    )
  );
};

export default AppSidebar;
