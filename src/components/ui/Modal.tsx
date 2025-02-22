import React, { useState, useEffect, useRef } from "react";
import { generateRandomString } from "@/libs/utils";
import { TModalSize } from "@/types";
import { getModalSizeBasedClasses } from "@/libs/ui";
import Image from "next/image";

// Define props interface
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  id?: string;
  size?: TModalSize;
  title?: string;
  persistent?: boolean;
  dialogClasses?: string;
  bodyClasses?: string;
  headerClasses?: string;
  titleClasses?: string;
  onClickOutside?: () => void;
  onClickClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open: initialOpen = false,
  id: initialId,
  size = "md",
  title,
  persistent = false,
  dialogClasses = "backdrop:bg-parch16/50 min-h-min max-h-[80vh] overflow-hidden rounded-2xl",
  bodyClasses = "grow max-h-[796px] overflow-y-auto flex flex-col justify-center items-center px-6 pb-6",
  headerClasses = "flex justify-between items-center px-6 py-4 shrink-0",
  titleClasses = "text-xl",
  onClickOutside = null,
  onClickClose = null,
  children,
  ...restProps
}) => {
  const [open, setOpen] = useState(initialOpen);
  const [id] = useState(initialId || generateRandomString());
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(initialOpen);
  }, [initialOpen]);

  const handleKeydown = (e: KeyboardEvent) => {
    if (open && e.key === "Escape") {
      setOpen(false);
    }
  };

  const clickOutside = (e: MouseEvent, persistent: boolean) => {
    if (persistent === false) {
      if (modalRef.current) {
        const modalDimensions = modalRef.current.getBoundingClientRect();

        if (
          e.clientX < modalDimensions.left ||
          e.clientX > modalDimensions.right ||
          e.clientY < modalDimensions.top ||
          e.clientY > modalDimensions.bottom
        ) {
          setOpen(false);
          if (onClickOutside) onClickOutside();
        }
      }
    }
  };

  const clickClose = () => {
    setOpen(false);
    if (onClickClose) onClickClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  const modalProps = {
    id,
    ...restProps,
    className: [
      size && getModalSizeBasedClasses(size),
      dialogClasses,
      restProps.className,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <>
      {open && (
        // svelte-ignore a11y-click-events-have-key-events
        // svelte-ignore a11y-no-static-element-interactions
        <div
          onClick={(e) => clickOutside(e, persistent)}
          className="bg-parch16/50 fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-4"
        >
          <div
            className={`bg-parch01 ${modalProps.className}`}
            id={modalProps.id}
            ref={modalRef}
          >
            <div>
              <div className={headerClasses}>
                <div className={titleClasses}>{title}</div>
                <button
                  onClick={() => {
                    setOpen(false);
                    clickClose();
                  }}
                >
                  <Image
                    aria-hidden
                    src="/svg/x.svg"
                    alt="Close icon"
                    width={16}
                    height={16}
                  />
                </button>
              </div>

              <div className={bodyClasses}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
