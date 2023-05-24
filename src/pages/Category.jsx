import Header from '../components/Header';
import Footer from '../components/Footer';

import categoryPict from '../assets/image/category-pict.png';
import { FaFilter } from 'react-icons/fa';
const Category = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>
            <section>
                <div className="relative p-7 md:p-11 lg:p-28 h-[750px] bg-category-banner bg-no-repeat bg-cover text-black">
                    <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                        <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Choose Article by Category</div>
                        <div className="w-[90%] max-w-[500px] text-base md:text-xl">Category helps you to read another article that you haven’t thought before. You able to read all articles for free. Enjoy the reading!</div>
                    </div>
                </div>
            </section>
            <main>
                <section>
                    <div className="w-full py-16  flex flex-col gap-5 bg-white">
                        <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                            <div className="flex items-center gap-5">
                                <button className="btn btn-ghost border-none">
                                    <FaFilter className="text-black" size={30} />
                                </button>
                                <div className="text-black text-lg font-semibold">Sort By Last Added</div>
                            </div>
                            <div className=" text-grey-400 capitalize text-base font-semibold">18 Category</div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full bg-white pb-7 flex flex-col gap-5">
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                            <div className="flex flex-wrap items-center justify-center gap-7 h-full ">
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>

                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <div className="absolute flex justify-center items-center w-full h-full text-2xl text-black">
                                            <div className="w-[70%] font-semibold text-center text-white">+200 artticle</div>
                                        </div>
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full pb-16 flex items-center justify-center">
                    <div className="text-black text-xl font-semibold underline">Load another 30+ category</div>
                </div>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Category;
