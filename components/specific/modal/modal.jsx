import PropTypes from "prop-types";
import React from "react";
import "wicg-inert";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import Portal from "../../base/portal";

export default function Modal({ open, onClose, locked, className, children }) {
  useLockBodyScroll(open);
  const [active, setActive] = React.useState(false);
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = e => !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = e => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#__next").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#__next").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <div
            ref={backdrop}
            className={`fixed inset-0 bg-dusky-blue  bg-opacity-60 backdrop-filter backdrop-blur-1 opacity-0 transition duration-100 delay-200 flex justify-center items-center z-5000 ${
              active && open && "duration-250 delay-0 opacity-100"
            }`}
          >
            <div
              className={`relative shadow-lightShadow rounded-[20px] transform translate-y-24 transition-all duration-200 opacity-0 ${
                active &&
                open &&
                "translate-y-0 opacity-100 delay-150 duration-350"
              } ${className}`}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  locked: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Modal.defaultProps = {
  locked: false,
  className: ""
};
