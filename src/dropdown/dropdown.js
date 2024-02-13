import style from "./dropdown.module.css";

import { useState } from "react";
// component for dropdown
export function Dropdown() {
  
  // first we set a state which initaily false means list open is false
  const [isOpen, setIsOpen] = useState(false);
  // this is array to contain list
  const arr = ["hi", "hellow", "how are you?", "what is your name?"];

  // return JSX
  return (
    <>
      <div className={style.div}>
        <div className={style.show}>
          <p
            className={style.btn}
            // here we use onMouseEnter and onMouseLeave , when we hover btn then list is open else close
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            // if we click dropdown button then list will close
            onClick={() => setIsOpen(false)}
          >
            <span></span>Select
            <strong className={isOpen ? style.up : style.down}>^</strong>
          </p>
          {/* check condition isOpen is true or false if true then list open else close */}
          {isOpen && (
            <div
            // here we again use onMouseEnter and onMouseLeave for list open and close
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={style.list}
            >
              {arr.map((x, index) => {
                return (
                  <>
                  {/* show list and set onClick when we click on a list then dropdown list will close */}
                    <li onClick={() => setIsOpen(false)} key={index}>
                      {x}
                    </li>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
