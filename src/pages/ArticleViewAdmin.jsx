import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { IoChevronBackOutline } from 'react-icons/io5';
import React from 'react';
import http from '../helper/http';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

const ArticleViewAdmin = () => {

    const {id} = useParams()
    const token = useSelector(state => state.auth.token)
    const location = useLocation()
    const navigate = useNavigate()
    const requestId = location.state
    const [articleView, setArticleView] = React.useState({})

    React.useEffect(() => {
        const getViewArticle = async (id) => {
            const { data } = await http().get(`/article/${id}`)
            
            setArticleView(data.results)
        }
        if (id) {
            getViewArticle(id)
        }
    }, [id])

    const accArticle = async()=> {
        try {
            const reqData = { articleId: id, ...requestId };
            const qs = new URLSearchParams(reqData).toString();
            const { data } = await http(token).post('/request/acc-article', qs);
            if(data.results){
                navigate('/')
            }
        } catch (error) {
            console.log(error?.data?.results?.message)
        }

    }
    const rejectArticle = async()=> {
        try {
            const reqData = { articleId: id, ...requestId };
            console.log(reqData)
            const qs = new URLSearchParams(reqData).toString();
            const { data } = await http(token).post('/request/reject-article', qs);
            console.log(data)
            if(data.results){
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Article View</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header">
                    <Header />
                </div>
                <section>
                    <div className="w-full pt-5 pb-7 md:pt-11 md:pb-16  flex flex-col gap-5 bg-white">
                        <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                            <div className="flex-1  flex items-center gap-5">
                                <Link to='/' className="btn btn-ghost border-none">
                                    <IoChevronBackOutline className="text-black" size={30} />
                                </Link>
                                <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                            </div>
                            <div className="flex-1 flex justify-end lg:justify-start text-black text-lg font-semibold">Article Viewer</div>
                        </div>
                    </div>
                </section>
                <main>
                    <section>
                        <div className="w-full min-h-[370px] flex flex-col gap-5 ">
                            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                                <div className="flex-1 min-h-[370px]  flex items-start overflow-hidden object-cover gap-5">
                                    {/* <img className="min-h-[370px] object-cover" src={articleImage} alt="" /> */}
                                    {articleView?.picture && <img src={articleView?.picture.startsWith('https') ? articleView?.picture : `http://localhost:8888/uploads/${articleView.picture}`} className="h-[370px] w-full object-cover" alt="" />}
                                </div>
                                <div className="flex-1  h-full min-h-[370px]  text-black text-lg font-semibold">
                                    <div className="px-6  h-full min-h-[370px] flex flex-col gap-7 items-start justify-between">
                                        <Link>
                                            <div className="text-black text-4xl font-bold">{articleView?.title}</div>
                                        </Link>
                                        <div className="text-black text-center text-lg">{articleView?.author} - {articleView.role}</div>
                                        <div className="text-black text-center text-sm">{moment(articleView?.createdAt).format('LLLL')}</div>
                                        <div className="flex justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike size={40} />
                                                </div>
                                                <div className="text-lg">{articleView?.likeCount}K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime size={40} />
                                                </div>
                                                <div className="text-lg">3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill size={40} />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button className="btn btn-primary w-full text-white capitalize">Share Article Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full bg-white py-16 flex flex-col gap-5">
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56">
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full text-xl text-black">
                                    {articleView?.content}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='flex items-center justify-center gap-11 w-full pb-16'>
                            <div>
                                <button onClick={accArticle} className='btn btn-primary text-white capitalize w-[300px]'>publish article</button>
                            </div>
                            <div>
                                <button onClick={rejectArticle} className='btn bg-[#03999e5f] text-primary hover:text-white capitalize w-[300px]'>Decline article request</button>
                            </div>
                        </div>
                    </section>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default ArticleViewAdmin;
