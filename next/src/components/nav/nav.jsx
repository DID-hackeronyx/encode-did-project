import React from "react";
import classes from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Nav = ({ text }) => {
  return (
    <nav className={classes.nav}>
      <h3 className={classes.nav__text}>{text}</h3>

      <div className="flex gap-4 sm:flex-col">
        <Link href="/mypets">
          <div
            className={`${classes.nav__item} `}
            // onClick={() => dispatch(closeDrawer())}
          >
            <div className={`${classes.nav__item__image} bg-success`}>
              <Image
                src="/images/pet-breeds.webp"
                alt="breeds"
                width={117}
                height={163}
              />
            </div>
            <button
              className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 ml-8 relative outline-none overflow-hidden p-[10px] rounded-[10px] cursor-pointer select-none inline-flex items-center justify-center gap-2
              uppercase font-medium text-[12px] leading-[16px] tracking-[2px] transition-colors"
            >
              My Pet
            </button>
          </div>
        </Link>
        <Link href="/adopts">
          <div
            className={`${classes.nav__item} `}
            // onClick={() => dispatch(closeDrawer())}
          >
            <div className={`${classes.nav__item__image} bg-warning`}>
              <Image
                src="/images/images-search.svg"
                alt="gallery"
                width={112}
                height={190}
              />
            </div>
            <button
              className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 ml-8 relative outline-none overflow-hidden p-[10px] rounded-[10px] cursor-pointer select-none inline-flex items-center justify-center gap-2
              uppercase font-medium text-[12px] leading-[16px] tracking-[2px] transition-colors"
            >
              Adopts
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};
