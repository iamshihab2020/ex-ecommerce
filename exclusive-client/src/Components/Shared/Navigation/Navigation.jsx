import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Input,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {

  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";





function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:items-center lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to={"/"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          className="font-medium text-black text-base hover:underline hover:underline-offset-4 duration-100 hover:bg-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Typography>
      </Link>
      <Link to={"/contact"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          className="font-medium text-black text-base hover:underline hover:underline-offset-4 duration-100 hover:bg-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Contact Us
          </ListItem>
        </Typography>
      </Link>

      <Link to={"/about"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          className="font-medium text-black text-base hover:underline hover:underline-offset-4 duration-100 hover:bg-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            About
          </ListItem>
        </Typography>
      </Link>

      <Link to={"/signUp"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          className="font-medium text-black text-base hover:underline hover:underline-offset-4 duration-100 hover:bg-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Sign Up
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto min-w-full px-5 lg:px-10 py-2 lg:py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center flex-row-reverse">
          <Link to={"/"}>
            <Typography
              as="a"
              href="#"
              // variant="h5"
              className="text-base lg:text-xl font-bold mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              Exclusive Commerce
            </Typography>
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden gap-4 lg:flex">
          <div>
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>

          <IconButton
            className="bg-transparent shadow-none hover:shadow-none hover:text-primary text-black hidden md:block"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </IconButton>

          <IconButton
            className="bg-transparent shadow-none hover:shadow-none hover:text-primary text-black"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </IconButton>
        </div>

        <div className="block lg:hidden ">
          <div className="flex items-center ">
            <div className="block lg:hidden">
              <div className="flex items-center justify-center gap-2">
                <IconButton
                  className="bg-transparent shadow-none hover:shadow-none hover:text-primary text-black"
                  size="sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </IconButton>

                <IconButton
                  className="bg-transparent shadow-none hover:shadow-none hover:text-primary text-black"
                  size="sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </IconButton>

                <Typography
                  variant="text"
                  color="black"
                  className="lg:hidden hover:text-primary transition-transformation"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                  )}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <div>
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
