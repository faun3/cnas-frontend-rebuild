const DaisyNav = () => {
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
      sectionTitle: "Contact",
      subsections: [
        "Contact Us",
        "Public Relations",
        "Hearings",
        "Contact Form",
        "Phone numbers",
        "Public",
        "Open to public",
        "Data safety",
      ],
    },
  ];
  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinksObject.map((link, idx) => {
              return (
                <li key={idx}>
                  <details>
                    <summary>{link.sectionTitle}</summary>
                    <ul>
                      {link.subsections.map((subsection, ssIdx) => {
                        return (
                          <li key={ssIdx}>
                            <a>{subsection}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CNRb</a>
      </div>
      <div className="navbar-end hidden lg:flex lg:flex-nowrap">
        <ul className="menu menu-horizontal px-1">
          {navLinksObject.map((link, idx) => {
            return (
              <li key={idx}>
                <details>
                  <summary>{link.sectionTitle}</summary>
                  <ul>
                    {link.subsections.map((subsection, ssIdx) => {
                      return (
                        <li key={ssIdx}>
                          <a>{subsection}</a>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DaisyNav;
