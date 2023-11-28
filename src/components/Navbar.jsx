import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
    HomeIcon,
    ChatBubbleLeftRightIcon,
  IdentificationIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';
import Sudirmansyah from "../../public/sudirmansyah.jpeg"
import "../assets/styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



// profile menu component
const profileMenuItems = [
  {
    label: "Linkedin",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/sudirmansyah-sudirmansyah-5187271a3/"
  },
  {
    label: "Github",
    icon: faGithub,
    href: "https://github.com/sudirmansyah1"
  },
  {
    label: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/sudirmansyah_/"
  },
  {
    label: "Twitter",
    icon: faXTwitter,
    href: "https://twitter.com/X_YorBoy"
  },
];
 


// nav list component
const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/"
    },
    {
      label: "About",
      icon: IdentificationIcon,
      href: "/about"
    },
    {
      label: "Contact",
      icon: ChatBubbleLeftRightIcon,
      href: "/contact"
    },
  ];

// nav list menu
const navListMenuItems = [
    {
      title: "Experience",
      description:
        "View my job experience here to explore my past experiences.",
        href: "/experience"
    },
    {
      title: "Skills",
      description:
        "Explore the skills that I possess and have acquired.",
        href: "/skills"
    },
    {
      title: "Project",
      description:
        "View a list of projects I have worked on.",
        href: "/project"
    },
  ];
 
export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
   
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);
   
    return (
        <div className="navbar-container">
      <Navbar className="mx-auto md:mt-5 mt-0 max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
             <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5 mr-3"
            src={Sudirmansyah}
          /> Sudirmansyah
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            {isNavOpen ? (<XMarkIcon className="h-6 w-6" />):(<Bars2Icon className="h-6 w-6" />)}
          </IconButton>
          
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
      </div>
    );
}

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-2 lg:rounded-full p-3 lg:ml-auto"
        >
          Social Media
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 z-[999999999999]">
        {profileMenuItems.map(({ label, icon, href }) => {
          return (
            <a href={href} target="_blank">
                <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded`}
                >
                <FontAwesomeIcon icon={icon} className="h-4 w-4"/>
                <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color="inherit"
                >
                    {label}
                </Typography>
                </MenuItem>
            </a>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description, href }) => (
    <NavLink to={href}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </NavLink>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid z-[999999999999]">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, href }) => (
        <NavLink to={href}>
        <Typography
          as="a"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
        </NavLink>
      ))}
        <NavListMenu />
    </ul>
  );
}