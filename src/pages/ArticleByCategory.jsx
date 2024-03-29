import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaFilter } from 'react-icons/fa';
// import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
// import { RiBookmarkFill } from 'react-icons/ri';
// import defaultImage from '../assets/image/default.png'
// import moment from "moment";
import React from "react";
import http from "../helper/http";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
// import ImageTemplate from "../components/ImageTemplate";
import { Helmet } from "react-helmet";
import ArticleByCategoryPagination from "../components/pagination/ArticleByCategoryPagination";

const ArticleByCategory = () => {
    const location = useLocation()
    const reqCategory = location.state
    const [articleCategory, setArticleCategory] = React.useState([])
    const [activeTabCategory, setActiveTabCategory] = React.useState(reqCategory)
    const [categories, setCategories] = React.useState([])
    const [tabArticle, setTabArticle] = React.useState(1)
    // const [totalPage, setTotalPage] = React.useState()
    const [sort, setSort] = React.useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A/Z)')
    const [categorySort, setCategorySort] = React.useState('DESC')


    React.useEffect(() => {
        async function getCategory() {
            try {
                const { data } = await http().get(`/categories?page=1&limit=100&sort=${categorySort}&sortBy=name`)
                setCategories(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getCategory();
    }, [categorySort]);


    React.useEffect(() => {
        async function getArticleCategory() {
            try {
                const { data } = await http().get(`/article?category=${encodeURIComponent(activeTabCategory)}&sortBy=${sortBy}&sort=${sort}&page=${tabArticle}&limit=1000`)
                setArticleCategory(data.results)
                console.log(activeTabCategory)
            } catch (error) {
                console.error(error);
            }
        }
        getArticleCategory();
    }, [activeTabCategory, tabArticle, sort, sortBy]);

    const handleSort = (sortBy, sort, message) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)

        const elem = document.activeElement;
        elem?.blur();
    }
    const handleSortCategory = (message) => {
        setMessage(message)
        if(categorySort === 'DESC'){
            setCategorySort('ASC')
        }else(
            setCategorySort('DESC')
        )
        const elem = document.activeElement;
        elem?.blur();
    }


    const handleTabClick = (category) => {
        setActiveTabCategory(category)
        setTabArticle(1)
    };

    return (
        <>
            <div>
                <Helmet>
                    <title>Category | By Article</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <div className="bg-white">
            <div className="header pb-24">
                <Header />
            </div>
            <main className="px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 gap-5 flex flex-col mt-10">
                <section className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to='/category' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={35} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold mr-[410px]">Category</div>
                    </div>
                    <div className="dropdown">
                        <div className="flex gap-5 items-center">
                        <div className='capitalize text-black'>Sort By {message}</div>
                        <label tabIndex={0} className="btn btn-ghost">
                            <FaFilter className="text-black" size={30} />
                        </label>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li onClick={()=>{handleSort('title', 'ASC', 'Name (A/Z)')}}><p>Name (A-Z)</p></li>
                            <li onClick={()=>{handleSort('title', 'DESC', 'Name (Z/A)')}}><p>Name (Z-A)</p></li>
                            <li onClick={()=>{handleSortCategory('Category')}}><p>Category</p></li>
                            <li onClick={()=>{handleSort('createdAt', 'ASC', 'First Added')}}><p>First Added</p></li>
                            <li onClick={()=>{handleSort('createdAt', 'DESC', 'Last Added')}}><p>Last Added</p></li>
                        </ul>
                    </div>
                </section>
                <>
                    <div className="w-full text-black">
                        <div className=" flex items-center gap-7 overflow-scroll scrollbar-hide">
                            {categories.map(category => {
                                return (
                                    <>
                                        <div className="flex justify-center items-center">
                                            <button
                                                key={`category-list-${category.id}`}
                                                className={`font-semibold px-4 py-2 hover:bg-[#03999e5f] capitalize rounded-lg  hover:text-[#03989e] ${activeTabCategory === category.name ? 'flex gap-10 activ  bg-[#03989e]/50 text-[#03989e]' : 'opacity-80'} px-4 py-2`}
                                                onClick={() => handleTabClick(category.name)}
                                            >
                                                {category.name}
                                            </button>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
                
                <ArticleByCategoryPagination data={ articleCategory }/>
            </main>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
};
export default ArticleByCategory;