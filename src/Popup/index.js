import React from 'react';
import {
    AiOutlineCloseCircle,
    AiTwotoneAppstore,
    AiOutlineCode,
    AiOutlineShareAlt,
    AiOutlineLink,
} from 'react-icons/ai';

const POPUP = {
    links: [
        {
            icon: <AiTwotoneAppstore />,
            url: 'eCommerce',
        },
        {
            icon: <AiOutlineCode />,
            url: 'React, Node JS, MongoDB',
        },
        {
            icon: <AiOutlineShareAlt />,
            url: 'Source code',
        },
        {
            icon: <AiOutlineLink />,
            url: 'pocotep.com',
        },
    ],

    images: [
        'https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg',
        'https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg',
    ],
};

const PopUp = ({ close }) => {
    return (
        <div className="absolute top-[-300px] left-0 h-[95vh] w-[664px] flex justify-center items-center p-3">
            <div className="relative w-[851px] h-full bg-black rounded-md p-10 overflow-y-scroll">
                <div className="absolute right-[26px] top-[26px]">
                    <button className="text-red-500 text-3xl" onClick={close}>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className="">
                    <h1 className="text-lg md:text-3xl text-white font-[Montserrat] font-semibold">
                        Pocotep eCommerce Website
                    </h1>
                    <p className="text-[#696969] text-[15px] font-[Poppins] mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis
                        posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum
                        nisi, platea condimentum cursus velit dui. Massa volutpat odio
                        facilisis purus sit elementum. Non.
                    </p>
                </div>
                <div className="md:columns-2 mt-10 space-y-5">
                    {POPUP?.links.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-[#67DB52] ">{item.icon}</span>
                            <a
                                href="/"
                                className="text-white underline-offset-4 decoration-[#67DB52] duration-1000 hover:underline"
                            >
                                {item.url}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="w-full max-h-[400px] rounded-md mt-10">
                    <a href="https://corporx-react-website.vercel.app" target="_blank" rel="noreferrer" className="project-box h-[220px]">
                        
                    </a>
                </div>
                <div className="flex gap-5 justify-center md:justify-between mt-10">
                    {POPUP?.images.map((url, index) => (
                        <div
                            key={index}
                            className="w-[365px] max-h-[174px] rounded-md scrollbar-hide project-box"
                        >
                            <img src={url} alt={url} className="w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopUp;
