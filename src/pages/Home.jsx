import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';

import { AiOutlineLike, AiOutlineFieldTime, AiOutlineSearch, AiOutlineLoading3Quarters } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx'
import { RiBookmarkFill } from 'react-icons/ri';
import embedVideo from '../assets/image/embed-video.png';
import { Helmet } from 'react-helmet';
import { getProfileAction } from '../redux/actions/profile';

import React from 'react';
// import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import http from '../helper/http';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const Home = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const profile = useSelector((state) => state.profile.data)
    const [tagArticle, setTagArtcile] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const [article, setArticle] = React.useState([]);
    const [articleWait, setArticleWait] = React.useState([]);
    const [articleLatest, setArticleLatest] = React.useState([]);
    const [loadingModal, setLoadingModal] = React.useState(false)
    const [selectedArticle, setSelectedArticle] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalAction, setModalAction] = React.useState('');

    const navigate = useNavigate()

    React.useEffect(() => {
        if(token){
            dispatch(getProfileAction(token))
        }
    }, [dispatch, token]);

    React.useEffect(() => {
        async function getDataTagArticle() {
            const { data } = await http().get('/tags?page=1&limit=15');
            setTagArtcile(data.results);
        }
        getDataTagArticle();
    }, []);

    React.useEffect(() => {
        async function getDataCategory() {
            const { data } = await http().get('/categories?page=1&limit=10');
            setCategory(data.results);
        }
        getDataCategory();
    }, []);

    React.useEffect(() => {
        async function getDataArticle() {
            const { data } = await http().get('/article?sort=DESC&sortBy=likeCount&page=1&limit=10');
            setArticle(data.results);
        }
        getDataArticle();
    }, [id]);

    React.useEffect(() => {
        async function getDataArticleWaiting() {
            const { data } = await http().get('/article/waiting-list?sort=DESC&sortBy=likeCount&page=1&limit=10');
            setArticleWait(data.results);
        }
        getDataArticleWaiting();
    }, [id]);


    const updateStateWaitingList = () => {
        async function getWaitingList() {
            try {
                const { data } = await http().get('/article/waiting-list?sort=DESC&sortBy=likeCount&page=1&limit=10');
                setArticleWait(data.results);

            } catch (err) {
                console.log(err)
            }
        }
        getWaitingList();
    };

    const handleAccept = async() => {
    setModalVisible(false);
    const selectedId = selectedArticle
    const qs = new URLSearchParams({articleId:selectedId}).toString()
    await http(token).post('/request/acc-article', qs)
    setLoadingModal(true)
    setTimeout(() => {
        setLoadingModal(false)
        navigate('/')
        updateStateWaitingList()
    }, 1000)

    };

    const handleDecline = async() => {
    setModalVisible(false);
    const selectedId = selectedArticle
    const qs = new URLSearchParams({articleId:selectedId}).toString()
    await http(token).post('/request/reject-article', qs)
    setLoadingModal(true)
    setTimeout(() => {
        setLoadingModal(false)
        navigate('/')
    updateStateWaitingList()

    }, 1000)
    };

    const openModal = (article, action) => {
    setSelectedArticle(article);
    setModalAction(action);
    setModalVisible(true);
    };

    const closeModal = () => {
    setSelectedArticle(null);
    setModalAction('');
    setModalVisible(false);
    };



    React.useEffect(() => {
        async function getDataArticleLatest() {
            const { data } = await http().get('/article?sort=DESC&sortBy=createdAt&page=1&limit=4');
            setArticleLatest(data.results);
        }
        getDataArticleLatest();
    }, []);

    const onSearch = (values) => {
        const qStrings = new URLSearchParams(values).toString()
        navigate(`/search-result?${qStrings}`)
    }

    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>HOME | Log Pose</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
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
                                <Link to="/article" className="btn btn-primary text-white capitalize w-[170px] text-md">
                                    Start Exploring
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <main>
                    <section>
                        <div className="w-full pt-16  flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-40 text-black font-bold">Search Article</div>
                            <div className="pl-3 pr-3 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 w-full">
                                <Formik
                                    initialValues={{
                                        searchName: '',
                                    }}
                                    onSubmit={onSearch}
                                >
                                    {({ handleBlur, handleChange, handleSubmit }) => (
                                        <>
                                            <div className='w-full flex items-center justify-start px-4 sm:px-0'>
                                                <form className='w-full' onSubmit={handleSubmit}>
                                                        <div className='h-14 w-full md:max-w-[450px]  flex items-center gap-2 border-2 border-primary rounded-xl'>
                                                            <i className='pl-5'>
                                                                <AiOutlineSearch size={20} />
                                                            </i>
                                                            <div className='form-control w-full h-full text-black'>
                                                                <input type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} className="outline-none w-full h-full" placeholder="Search" />
                                                            </div>
                                                            <div>
                                                                <button type='reset' className='btn btn-ghost'><RxCross1/></button>
                                                            </div>
                                                        </div>
                                                    
                                                </form>
                                            </div>
                                        </>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full py-16  flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-40 text-black font-bold">Popular Tags</div>
                            <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 w-full">
                                <div className="w-full  scrollbar-hide overflow-scroll">
                                    <div className="flex items-center gap-5">
                                        {tagArticle.map((item) => {
                                            return (
                                                <div key={`tagArticle-home-${item.id}`} className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                                    <Link className="text-primary" to="">
                                                        #{item.name}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white pb-7 flex flex-col gap-5">
                            <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 pr-7 md:pr-16 lg:pr-24 flex justify-between  ">
                                <div className='text-black font-bold text-2xl'>Category</div>
                                <Link to='/category'>
                                    <div className='font-semibold text-primary text-base'>More</div>
                                </Link>
                            </div>
                            <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40  h-[260px]">
                                <div className="flex items-center gap-5 scrollbar-hide overflow-scroll h-full">
                                    {category.map((items) => {
                                        return (
                                            <>
                                                <Link to='/article-by-category' state={items.name} key={`category-home-${items.id}`}>
                                                    <div className="flex flex-col gap-5 justify-center items-center">
                                                        <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="w-full h-full object-cover" alt="" />}
                                                        </div>
                                                        <div className="text-black text-xl font-semibold capitalize hover:text-primary/50">{items.name}</div>
                                                    </div>
                                                </Link>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    {token === "" &&
                        (
                            <section>
                                <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                                    <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 pr-7 md:pr-16 lg:pr-24 flex justify-between ">
                                        <div className='text-2xl text-black font-bold '>Recomended</div>
                                        <Link to='/article'>
                                            <div className='font-semibold text-xl base text-primary'>More</div>
                                        </Link>
                                    </div>
                                    <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 h-[330px]">
                                        <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                            {article.map((items) => {
                                                return (
                                                    <div key={`article-recomended-homes-${items.id}`} className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl ">
                                                        <div></div>
                                                        {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px]  object-cover" alt="" />}
                                                        <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                                                            <div key={`article-${items.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                                                                <Link to={`/article-view/${items.id}`}>
                                                                    <div className="text-primary text-xl font-bold">{(items.title).slice(0, 20) + `...`}</div>
                                                                </Link>
                                                                <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(items.content).slice(0, 40) + `...`}}/>
                                                                <div className="flex justify-between w-full text-sm text-black">
                                                                    <div className="flex gap-2 justify-center items-center">
                                                                        <div>
                                                                            <AiOutlineLike />
                                                                        </div>
                                                                        <div> {items.likeCount}</div>
                                                                    </div>
                                                                    <div className="flex gap-2 items-center">
                                                                        <div>
                                                                            <AiOutlineFieldTime />
                                                                        </div>
                                                                        <div> {moment(items.createdAt).add(420, 'minutes').startOf('minute').fromNow()}</div>
                                                                    </div>
                                                                    <div>
                                                                        <RiBookmarkFill />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </section>
                        )
                    

                    }

                    {token !== "" && (
                            profile?.role === "superadmin"
                            ?
                            (
                                <section>
                                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 pr-7 md:pr-16 lg:pr-24 flex justify-between ">
                                            <div className='text-2xl text-black font-bold'>Waiting list</div>
                                            <Link to='/waiting-list'>
                                                <div className='text-base text-primary font-semibold'>More</div>
                                            </Link>
                                        </div>
                                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 max-h-[380px]">
                                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                                {articleWait.map((items) => {
                                                    return (
                                                        <div key={`article-wait-home-${items.id}`} className='flex flex-col gap-5'>
                                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl ">
                                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px] object-cover" alt="" />}
                                                                <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                                                                    <div key={`article-${items.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                                                                        <Link to={`/admin/article-view/${items.id}`}>
                                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 20) + `...`}</div>
                                                                        </Link>
                                                                        <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(items.content).slice(0, 40) + `...`}}/>
                                                                        <div className="flex justify-between w-full text-sm text-black">
                                                                            <div className="flex gap-2 justify-center items-center">
                                                                                <div>
                                                                                    <AiOutlineLike />
                                                                                </div>
                                                                                <div> {items.likeCount}</div>
                                                                            </div>
                                                                            <div className="flex gap-2 items-center">
                                                                                <div>
                                                                                    <AiOutlineFieldTime />
                                                                                </div>
                                                                                <div> {moment(items.createdAt).add(420, 'minutes').startOf('minute').fromNow()}</div>
                                                                            </div>
                                                                            <div>
                                                                                <RiBookmarkFill />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='flex items-center justify-between px-10 gap-7'>
                                                            <button className="btn btn-primary rounded-xl text-white capitalize" onClick={() => openModal(items.id, 'accept')}>
                                                                Accept
                                                            </button>
                                                            <button className="btn btn-secondary rounded-xl text-white capitalize" onClick={() => openModal(items.id, 'decline')}>
                                                                Decline
                                                            </button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {modalVisible && (
                                                <div>
                                                    <input type="checkbox" id="loading" className="modal-toggle" checked={modalVisible} />
                                                <div className="modal">
                                                    <div className="modal-box">
                                                    <p className="py-4 text-black">
                                                        Are you sure {modalAction === 'accept' ? 'to publish' : modalAction === 'decline' ? 'to decline' : ''} this article!
                                                    </p>
                                                    <div className="modal-action">
                                                        <button type="button" className="btn btn-warning w-20 capitalize text-black" onClick={modalAction === 'accept' ? handleAccept : handleDecline}>
                                                        Yes
                                                        </button>
                                                        <label className="btn bg-[#03999e5f] border-0 text-black hover:text-white capitalize w-20" onClick={closeModal}>
                                                        Cancel!
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                        )}
                                        {
                                            articleWait.length < 1 &&
                                            <div className='flex flex-col items-center justify-center gap-7 '>
                                                <div className='font-semibold text-2xl text-secondary'>No Waiting List Found</div>
                                                <div className='font-medium text base max-w-[300px] text-center'>Waiting List arrived when author request to poblush the articles</div>
                                            </div>}
                                    </div>
                                </section>
                            )
                            :
                            (
                                <section>
                                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 pr-7 md:pr-16 lg:pr-24 flex justify-between ">
                                            <div className='text-2xl text-black font-bold '>Recomended</div>
                                            <Link to='/article'>
                                                <div className='font-semibold text-xl base text-primary'>More</div>
                                            </Link>
                                        </div>
                                        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 h-[330px]">
                                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                                {article.map((items) => {
                                                    return (
                                                        <div key={`article-recomended-home-${items.id}`} className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl ">
                                                            <div></div>
                                                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px]  object-cover" alt="" />}
                                                            <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                                                                <div key={`article-${items.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                                                                    <Link to={`/article-view/${items.id}`}>
                                                                        <div className="text-primary text-xl font-bold">{(items.title).slice(0, 20) + `...`}</div>
                                                                    </Link>
                                                                    <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(items.content).slice(0, 40) + `...`}}/>
                                                                    <div className="flex justify-between w-full text-sm text-black">
                                                                        <div className="flex gap-2 justify-center items-center">
                                                                            <div>
                                                                                <AiOutlineLike />
                                                                            </div>
                                                                            <div> {items.likeCount}</div>
                                                                        </div>
                                                                        <div className="flex gap-2 items-center">
                                                                            <div>
                                                                                <AiOutlineFieldTime />
                                                                            </div>
                                                                            <div> {moment(items.createdAt).add(420, 'minutes').startOf('minute').fromNow()}</div>
                                                                        </div>
                                                                        <div>
                                                                            <RiBookmarkFill />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
    
                                </section>
                            )
                        )
                    }
                    <section>
                        <div className="w-full min-h-[580px] px-7 md:px-16 lg:px-28 xl:px-36 bg-[#03999e5f] py-24">
                            <div className="flex flex-col-reverse md:flex-row gap-11 items-start justify-center">
                                <div className="flex flex-col gap-9 max-w-[400px]">
                                    <div className="font-serif text-4xl font-bold text-black">Lets hear about Kaylas success story</div>
                                    <div className="text-2xl font-semibold text-black">See how well News Today works in a real user’s life. </div>
                                    <Link to="/search-result" className="btn btn-primary capitalize w-full text-white tracking-wider max-w-[180px]">
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
                        <div className="w-full bg-white py-16 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 flex flex-col gap-5 border-b-2 border-primary ">
                            <div className="text-2xl text-black font-bold">Latest News</div>
                            {
                                articleLatest.map(item => {
                                    return (
                                        <div className="border-b-2 border-primary py-7" key={`item-article-latest-${item.id}`}>
                                            <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
                                                <div className="flex flex-col sm:flex-row gap-9 items-start">
                                                    <div className="w-[260px] h-[176px] rounded-2xl overflow-hidden">
                                                        {item.picture && <img src={item.picture.startsWith('https') ? item.picture : `http://localhost:8888/uploads/${item.picture}`} className='w-full h-full object-cover' alt="" />}
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <Link to={`/article-view/${item.id}`} className="text-primary text-xl font-bold">{item.title}</Link>
                                                        {/* <div className="text-black text-lg font-semibold">{item.content}</div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                                        <div className="text-lg capitalize">{item.author}</div>
                                                        <div className="flex items-center justify-start gap-5 w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {item.likeCount}</div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineFieldTime />
                                                                </div>
                                                                <div> {moment(item.createdAt).add(420, 'minutes').startOf('minute').fromNow()}</div>
                                                            </div>
                                                            <div>
                                                                <RiBookmarkFill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to={`/article-view/${item.id}`} className="btn btn-primary text-white capitalize w-full max-w-[185px]">
                                                        Read now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </section>
                    
                </main>
                <input type="checkbox" id="loading" className="modal-toggle" checked={loadingModal} />
                <div className="modal">
                    <div className="modal-box bg-transparent shadow-none">
                        <div className='justify-center flex '>
                            <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                        </div>
                    </div>
                </div>
                    
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default Home;
