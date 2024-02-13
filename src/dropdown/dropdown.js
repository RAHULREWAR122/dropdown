import style from "./dropdown.module.css";

import { useState } from "react";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const arr = ["hi", "hellow", "how are you?", "what is your name?"];

  return (
    <>
      <div className={style.div}>
        <div className={style.show}>
          <p
            className={style.btn}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(false)}
          >
            <span></span>Select
            <strong className={isOpen ? style.up : style.down}>^</strong>
          </p>
          {isOpen && (
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={style.list}
            >
              {arr.map((x, index) => {
                return (
                  <>
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
