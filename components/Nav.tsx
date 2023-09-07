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
    <nav className="flex justify-between md:max-w-[calc(100%-256px)] my-auto">
      {/* logo */}
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
                <NavigationMenuContent className="flex flex-col min-w-[300px]">
                  {navSection.subsections.map((subsection, ssIdx) => {
                    return (
                      <NavigationMenuLink key={ssIdx}>
                        {subsection}
                      </NavigationMenuLink>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
export default Nav;
