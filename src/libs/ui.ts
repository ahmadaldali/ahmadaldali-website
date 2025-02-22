import { TModalSize } from "@/types";

export const getModalSizeBasedClasses = (size: TModalSize) => {
    let classes = '';

    if (size === 'sm') {
        classes = 'w-[90%] sm:w-[100%] max-w-[500px]';
    } else if (size === 'lg') {
        classes = 'w-[90%] md:w-[80%] max-w-[900px]';
    } else if (size === 'xl') {
        classes = 'w-[90%] md:w-[80%] max-w-[1024px]';
    } else if (size === 'xxl') {
        classes = 'w-[90%] md:w-[80%] max-w-[1348px]';
    } else {
        classes = 'w-[90%] sm:w-[50%] max-w-[600px]';
    }

    return classes;
};

export const boxShadows = {
    'project-card': '3px 3px 5px #F3AD7A, 8px 8px 10px rgba(33,33,33,.2);',
    'company-card': '5px 5px 6px #E9BEF9, 3px 5px 8px #E9BEF9, 8px 8px 10px rgba(66,33,33,.2);',
    'sm': '0px 0px 12px 0px rgba(46, 55, 103, 0.05), 0px 0px 4px 0px rgba(46, 55, 103, 0.04)',
};

