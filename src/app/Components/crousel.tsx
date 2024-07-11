import { Image } from '@nextui-org/react';
import { useState } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        "/images/crousel/1.webp",
        "/images/crousel/2.webp",
        "/images/crousel/3.webp",
    ];

    const handleButtonClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <div className=" max-w-7xl mx-auto">
             <Image src='/Images/crousel/crouselbg.png' className=' absolute top-0   w-full'   alt='img' height={1000} width={1000}></Image>
            <div className="overflow-hidden relative  h-[30rem]">
               
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute z-10 inset-0 transition-transform flex justify-center items-center duration-500 ease-in-out ${index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
                    >
                        <div className="p-8  h-[30rem] w-[78%] flex items-center justify-center">

                            <Image src={slide} alt='img' className=' h-full w-full' height={1000} width={1000}></Image>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center relative z-10 mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg ${index === activeIndex ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {`Button ${index + 1}`}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
