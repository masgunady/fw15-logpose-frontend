import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaFilter } from 'react-icons/fa'
import http from '../helper/http'

import WaitingListComponent from '../components/WaitingListComponent';

function WaitingList() {
  const [searchResults, setSearchResults] = React.useState([])
  const handleSortByAsc = async () => {
    const {data} = await http().get('/article?sort=ASC&sortBy=title&page=1&limit=100', {  
        params: searchResults,
    })
    setSearchResults(data.results)
}

const handleSortByDesc = async () => {
    const {data} = await http().get('/article?sort=DESC&sortBy=title&page=1&limit=100', {  
        params: searchResults,
    })
    setSearchResults(data.results)
}

const handleLastAdd= async () => {
    const {data} = await http().get('/article?sort=DESC&sortBy=createdAt&page=1&limit=100', {  
        params: searchResults,
    })
    setSearchResults(data.results)
}

const handleLastModify= async () => {
    const {data} = await http().get('/article?sort=DESC&sortBy=updatedAt&page=1&limit=100', {  
        params: searchResults,
    })
    setSearchResults(data.results)
}
  return (
    <>
      <div>
          <Helmet>
              <title>Article</title>
              <meta name="description" content="Ini adalah deskripsi halaman saya" />
          </Helmet>
      </div>
      <div className="className='bg-white md:bg-[#F4F7FF]'">
        <div className="header pb-24">
            <Header />
        </div>
      </div>
      <section>
          {/* <div className="relative p-7 md:p-11 lg:p-28 h-[750px] bg-article-banner bg-no-repeat bg-cover text-black">
              <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                  <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Start Writing an Article</div>
                  <div className="w-[90%] max-w-[500px] text-base md:text-xl">You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.</div>
              </div>
          </div> */}
      </section>
      <main>
          <section>
              <div className="w-full py-16  flex flex-col gap-5 bg-white">
                  <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search Article</div>
                  <div className="flex items-start gap-5 pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                      <div className="dropdown">
                          <label tabIndex={0} className="flex btn btn-ghost m-1">
                              <FaFilter className="text-black" size={30} />
                              <div className='flex gap-2 normal-case text-xl px-7 md:px-16 lg:px-24 xl:px-28 text-black text-start font-normal'>
                                <div className=''>Filter Article : sort by </div>
                                <div className='font-bold'>Last Added</div>
                              </div>
                          </label>
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li onClick={handleSortByAsc}><a>Name (A-Z)</a></li>
                              <li onClick={handleSortByDesc}><a>Name (Z-A)</a></li>
                              <li><a>Category</a></li>
                              <li onClick={handleLastAdd}><a>Last Added</a></li>
                              <li onClick={handleLastModify}><a>Last Modified</a></li>
                          </ul>
                      </div>
                      {/* <button className="btn bg-[#03999e5f] border-none text-black capitalize text-base font-semibold">
                          <Link className='flex gap-1 justify-center items-center' to='/write-article'>
                              <AiOutlinePlus className="text-black" size={15} /> Write an article
                          </Link>
                      </button> */}
                  </div>
              </div>
          </section>
          <WaitingListComponent />
          <div className="w-full pb-16 flex items-center justify-center">
              <div className="text-black text-xl font-semibold underline">Load another waiting list ...</div>
          </div>
      </main>
      <div className="footer">
          <Footer />
      </div>
    </>
  )
}

export default WaitingList