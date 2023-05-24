import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import categoryPict from '../assets/image/category-pict.png';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import latestNews from '../assets/image/latest-news.png';
import embedVideo from '../assets/image/embed-video.png';
// import homeBanner from '../assets/image/home-banner.png';
const Home = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>
            <section>
                <div className="relative p-7 md:p-11 lg:p-28 h-[950px] bg-home-banner bg-no-repeat bg-cover text-black">
                    <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                        <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Share Information and Educate People</div>
                        <div className="w-[90%] max-w-[500px] text-base md:text-xl">
                            Everyone has their point of view of something, but just don&apos;t be afraid to express the facts. Be an author and share you prespective of something to the world.
                        </div>
                        <div>
                            <Link to="/" className="btn btn-primary text-white capitalize w-[170px] text-md">
                                Start Exploring
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <section>
                    <div className="w-full pt-16  flex flex-col gap-5 bg-white">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search Article</div>
                        <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                            <form>
                                <div className="form-control w-full max-w-[500px]">
                                    <input type="text" className="input input-bordered input-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full py-16  flex flex-col gap-5 bg-white">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Popular Tags</div>
                        <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                            <div className="w-full  scrollbar-hide overflow-scroll">
                                <div className="flex items-center gap-5">
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #jokowidodo
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #dayniki
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #jokowidodo
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #dayniki
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full bg-white pb-7 flex flex-col gap-5">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28  text-black font-bold">Category</div>
                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28  h-[260px]">
                            <div className="flex items-center gap-5 scrollbar-hide overflow-scroll h-full">
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                        <img src={categoryPict} className="w-full h-full " alt="" />
                                    </div>
                                    <div className="text-black text-xl font-semibold">Goverment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Recomended</div>
                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full min-h-[635px] px-7 md:px-16 lg:px-28 xl:px-36 bg-[#03999e5f] py-24">
                        <div className="flex flex-col-reverse md:flex-row gap-11 items-start justify-center">
                            <div className="flex flex-col gap-9 max-w-[400px]">
                                <div className="font-serif text-4xl font-bold text-black">Lets hear about Kaylas success story</div>
                                <div className="text-2xl font-semibold text-black">See how well News Today works in a real user’s life. </div>
                                <Link to="/" className="btn btn-primary capitalize w-full max-w-[180px]">
                                    Let&apos;s get started
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <img src={embedVideo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full bg-white py-16 px-7 md:px-16 lg:px-24 xl:px-28 flex flex-col gap-5 border-b-2 border-primary ">
                        <div className="text-2xl text-black font-bold">Latest News</div>
                        <div className="border-b-2 border-primary py-7">
                            <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
                                <div className="flex flex-col sm:flex-row gap-9 items-start">
                                    <div className="">
                                        <img src={latestNews} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-primary text-xl font-bold">COVID-19</div>
                                        <div className="text-black text-lg font-semibold">Why corona never ends? Let’s see how its facts</div>
                                        <div className="text-lg">Writted by Ryann Jenn</div>
                                        <div className="flex items-center justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/" className="btn btn-primary text-white capitalize w-full max-w-[185px]">
                                        Read now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 border-primary py-7">
                            <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
                                <div className="flex flex-col sm:flex-row gap-9 items-start">
                                    <div className="">
                                        <img src={latestNews} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-primary text-xl font-bold">COVID-19</div>
                                        <div className="text-black text-lg font-semibold">Why corona never ends? Let’s see how its facts</div>
                                        <div className="text-lg">Writted by Ryann Jenn</div>
                                        <div className="flex items-center justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/" className="btn btn-primary text-white capitalize w-full max-w-[185px]">
                                        Read now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 border-primary py-7">
                            <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
                                <div className="flex flex-col sm:flex-row gap-9 items-start">
                                    <div className="">
                                        <img src={latestNews} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-primary text-xl font-bold">COVID-19</div>
                                        <div className="text-black text-lg font-semibold">Why corona never ends? Let’s see how its facts</div>
                                        <div className="text-lg">Writted by Ryann Jenn</div>
                                        <div className="flex items-center justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/" className="btn btn-primary text-white capitalize w-full max-w-[185px]">
                                        Read now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};
export default Home;
