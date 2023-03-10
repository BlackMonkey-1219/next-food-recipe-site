import React, { useState } from 'react';
import styleClasses from './footerStyles.module.css';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import { FaCaretDown } from 'react-icons/fa';

function Footer() {
  const [isOpen, setIsOpen] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ]);

  function accordianHandler(
    e: React.MouseEvent<HTMLDivElement>,
    sectionIndex: number
  ) {
    e.preventDefault();
    setIsOpen((prevState) => {
      const newState = prevState.map((state, index) => {
        return index == sectionIndex ? !state : state;
      });

      return newState as [boolean, boolean, boolean];
    });
  }

  return (
    <footer className={'w-full h-fit mt-auto px-4'}>
      <hr />
      <Container>
        <div
          className={
            'w-full h-fit pt-[2rem] lg:grid grid-cols-12 auto-rows-auto'
          }>
          <Logo
            classes={
              'col-start-1 col-end-6 w-full max-w-[200px] lg:max-w-[20rem]'
            }
          />
          <p className={'col-start-1 col-end-6 mt-4'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            aliquid magnam facere, veniam minus consequuntur voluptates
            assumenda fugiat, delectus qui sapiente eveniet consequatur!
            Voluptas quidem in obcaecati non debitis quod!
          </p>
          <ul
            className={
              'col-start-7 col-end-13 row-start-1 row-end-3 flex flex-col lg:flex-row items-start justify-end gap-4'
            }>
            <li className={'w-full h-fit lg:text-end'}>
              <div
                onClick={(e) => {
                  accordianHandler(e, 0);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2 lg:border-none'
                }>
                <b className={'lg:ml-auto'}>Tastebite</b>
                <span className={'lg:hidden'}>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[0]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Feedback</li>
              </ul>
            </li>
            <li className={'w-full h-fit lg:text-end'}>
              <div
                onClick={(e) => {
                  accordianHandler(e, 1);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2 lg:border-none'
                }>
                <b className={'lg:ml-auto'}>Legal</b>
                <span className={'lg:hidden'}>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[1]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}>
                <li>Terms</li>
                <li>Conditions</li>
                <li>Cookies</li>
                <li>Copyright</li>
              </ul>
            </li>
            <li className={'w-full h-fit lg:text-end'}>
              <div
                onClick={(e) => {
                  accordianHandler(e, 2);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2 lg:border-none'
                }>
                <b className={'lg:ml-auto'}>Follow</b>
                <span className={'lg:hidden'}>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[2]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
      <div className={'col-start-1 col-end-13 w-full h-fit'}>
        <hr className={' w-full h-fit mt-2 border-[1px]'} />
        <p className={'w-full h-fit'}>
          <span>&copy;</span>
          <span>2020 Tastebite - All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
