"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navLinksObject = [
  {
    sectionTitle: "About us",
    subsections: [
      "Status",
      "Rules and Regulations",
      "CNRebuild Leadership",
      "Law 153 of 2017",
    ],
  },
  {
    sectionTitle: "Structure",
    subsections: [
      "Board of Directors",
      "Executive Director",
      "Advisory Board",
      "Technical Secretariat",
    ],
  },
  {
    sectionTitle: "Public information",
    subsections: [
      "Budget",
      "Contracts",
      "Reports",
      "Minutes",
      "Agreements",
      "Publications",
      "Press Releases",
      "News",
      "Events",
      "FAQs",
      "Transparency Portal",
    ],
  },
  {
    sectionTitle: "Legislation",
    subsections: ["In Romania", "In the EU"],
  },
  {
    sectionTitle: "Contact",
    subsections: [
      "Contact Us",
      "Public Relations",
      "Hearings",
      "Contact Form",
      "Phone numbers",
      "Public",
      "Open to public",
      "Hearings with medical service providers",
      "Data safety",
    ],
  },
];

const Nav = () => {
  return (
    <nav className="flex justify-center items-center sticky top-0">
      {/* logo */}
      <div className="flex justify-between items-center md:w-[calc(100%-256px)] h-[4rem]">
        <span>CNRebuild</span>
        {/* actual nav */}
        <NavigationMenu>
          <NavigationMenuList>
            {navLinksObject.map((navSection, idx) => {
              return (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger>
                    {navSection.sectionTitle}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col gap-10 w-full">
                    <ul className="min-w-[600px] flex flex-wrap gap-5 justify-center items-center px-10 py-5">
                      {navSection.subsections.map((subsection, ssIdx) => {
                        return (
                          <NavigationMenuLink
                            key={ssIdx}
                            className="underline cursor-pointer">
                            {subsection}
                          </NavigationMenuLink>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
export default Nav;
