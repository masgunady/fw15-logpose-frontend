import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

import { Helmet } from 'react-helmet';

import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import http from '../helper/http';
const Category = () => {
    const [category, setCategory] = React.useState([]);
    const [sort, setSort] = React.useState('ASC')
    const [sortBy, setSortBy] = React.useState('name')
    const [message, setMessage] = React.useState('Name (A/Z)')

    React.useEffect(() => {
        async function getDatacategory() {
            const { data } = await http().get(`/categories?sortBy=${sortBy}&sort=${sort}&page=1&limit=20`)
            setCategory(data.results)
        }
        getDatacategory()
    }, [sort, sortBy])

    const handleSort = (sortBy, sort, message) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)
        const elem = document.activeElement;
        elem?.blur();
    }


    return (
        <>
            <div>
                <Helmet>
                    <title>Category</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
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
                                <div className="flex items-center gap-2">
                                <div className="dropdown">
                                    <div className="flex gap-5 items-center">
                                    <label tabIndex={0} className="btn btn-ghost">
                                        <FaFilter className="text-black" size={30} />
                                    </label>
                                    <div className='capitalize text-black'>Sort By {message}</div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li onClick={()=>{handleSort('name', 'ASC', 'Name (A/Z)')}}><p>Name (A-Z)</p></li>
                                        <li onClick={()=>{handleSort('name', 'DESC', 'Name (Z/A)')}}><p>Name (Z-A)</p></li>
                                        <li onClick={()=>{handleSort('name', 'ASC', 'Category')}}><p>Category</p></li>
                                        <li onClick={()=>{handleSort('createdAt', 'ASC', 'First Added')}}><p>First Added</p></li>
                                        <li onClick={()=>{handleSort('createdAt', 'DESC', 'Last Added')}}><p>Last Added</p></li>
                                    </ul>
                                </div>
                                </div>
                                <div className=" text-grey-400 capitalize text-base font-semibold">20 Category</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white pb-7 flex flex-col gap-5">
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full ">
                                    {category.map(item => {
                                        return (
                                            
                                                <Link  to='/article-by-category' state={item.name} key={`item-cat-list-${item.id}`}>
                                                    <div className="flex flex-col gap-7 justify-center items-center">
                                                        <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                                            <div className="absolute flex justify-center items-center w-full h-full bg-black opacity-30">
                                                            </div>
                                                            <div className="absolute flex justify-center items-center w-full h-full text-xl">
                                                                <div className="w-[60%] font-semibold text-center text-white">+{item.total_articles}<br/> artticle</div>
                                                            </div>
                                                            
                                                            {item.picture && <img src={item.picture.startsWith('https') ? item.picture :
                                                                `http://localhost:8888/uploads/${item.picture}`} className="object-cover w-full h-full " alt="" />}
                                                        </div>
                                                        <div className="text-black text-xl font-semibold hover:border-primary  hover:text-primary">
                                                            <Link to='/article-by-category' state={item.name} className='capitalize'>{item.name}</Link>
                                                        </div>
                                                    </div>
                                                </Link>
                                            
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full pb-16 flex items-center justify-center">
                        <div className="text-black text-xl font-semibold underline">You have displayed all categories</div>
                    </div>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Category;
