import { useEffect, useRef, useState } from "react";
import MainHeading from "../components/MainHeading"
import TableBody from "../components/TableBody"

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";




const DataTable = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const nextRef = useRef('');
    const prevRef = useRef('');
    const searchRef = useRef('');

    const data = [
        {
            title: 'SQL Basics To Advanced Mastery Course',
            startDate: '20 Jul 2024',
            endDate: '28 Jul 2024',
            price: '₹ 0',
            validity: '180 days',
            status: 'Published',
            imagePath: 'image1.png'
        },
        {
            title: '30 Days Of Javascript Challenge',
            startDate: '13 Jul 2024',
            endDate: '12 Aug 2024',
            price: '₹ 0',
            validity: '33 days',
            status: 'Unpublished',
            imagePath: 'image2.png'
        },
        {
            title: 'Interview Preparation With Javascript 2.0',
            startDate: '02 Aug 2024',
            endDate: '15 Sep 2024',
            price: '₹ 10,000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image3.png'
        },
        {
            title: 'ReactJS Complete Guide',
            startDate: '01 Jul 2024',
            endDate: '31 Jul 2024',
            price: '₹ 5000',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Mastering Python Programming',
            startDate: '05 Aug 2024',
            endDate: '05 Oct 2024',
            price: '₹ 3000',
            validity: '180 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Data Science Bootcamp',
            startDate: '10 Jul 2024',
            endDate: '10 Sep 2024',
            price: '₹ 8000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Web Development with HTML & CSS',
            startDate: '01 Aug 2024',
            endDate: '31 Aug 2024',
            price: '₹ 1500',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Advanced Node.js Techniques',
            startDate: '15 Jul 2024',
            endDate: '15 Sep 2024',
            price: '₹ 7000',
            validity: '180 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Machine Learning with Python',
            startDate: '05 Jul 2024',
            endDate: '05 Oct 2024',
            price: '₹ 10000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Introduction to Cloud Computing',
            startDate: '01 Sep 2024',
            endDate: '30 Sep 2024',
            price: '₹ 4000',
            validity: '90 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Angular Framework Mastery',
            startDate: '20 Aug 2024',
            endDate: '20 Sep 2024',
            price: '₹ 6000',
            validity: '180 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Full Stack Java Developer',
            startDate: '10 Jul 2024',
            endDate: '10 Oct 2024',
            price: '₹ 15000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Deep Learning Essentials',
            startDate: '01 Aug 2024',
            endDate: '30 Nov 2024',
            price: '₹ 12000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Blockchain Fundamentals',
            startDate: '15 Sep 2024',
            endDate: '15 Oct 2024',
            price: '₹ 5000',
            validity: '180 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Game Development with Unity',
            startDate: '01 Jul 2024',
            endDate: '01 Oct 2024',
            price: '₹ 20000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'AI for Beginners',
            startDate: '05 Aug 2024',
            endDate: '05 Nov 2024',
            price: '₹ 8000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Cybersecurity Basics',
            startDate: '10 Jul 2024',
            endDate: '10 Aug 2024',
            price: '₹ 3000',
            validity: '90 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Kubernetes for DevOps',
            startDate: '01 Aug 2024',
            endDate: '31 Aug 2024',
            price: '₹ 6000',
            validity: '180 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Big Data with Hadoop',
            startDate: '20 Jul 2024',
            endDate: '20 Sep 2024',
            price: '₹ 10000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'DevOps with Jenkins',
            startDate: '05 Sep 2024',
            endDate: '05 Oct 2024',
            price: '₹ 7000',
            validity: '180 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'React Native for Mobile Apps',
            startDate: '01 Jul 2024',
            endDate: '01 Aug 2024',
            price: '₹ 9000',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Docker for Beginners',
            startDate: '15 Aug 2024',
            endDate: '15 Sep 2024',
            price: '₹ 4000',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'PHP & MySQL Web Development',
            startDate: '10 Jul 2024',
            endDate: '10 Aug 2024',
            price: '₹ 5000',
            validity: '90 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Vue.js 3 Crash Course',
            startDate: '01 Sep 2024',
            endDate: '01 Oct 2024',
            price: '₹ 2000',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Spring Boot Microservices',
            startDate: '05 Aug 2024',
            endDate: '05 Nov 2024',
            price: '₹ 10000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Swift Programming for iOS',
            startDate: '10 Jul 2024',
            endDate: '10 Sep 2024',
            price: '₹ 7000',
            validity: '180 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'AWS Solutions Architect',
            startDate: '01 Aug 2024',
            endDate: '31 Oct 2024',
            price: '₹ 12000',
            validity: '365 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Linux System Administration',
            startDate: '20 Jul 2024',
            endDate: '20 Aug 2024',
            price: '₹ 3000',
            validity: '90 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Ruby on Rails Development',
            startDate: '05 Sep 2024',
            endDate: '05 Dec 2024',
            price: '₹ 15000',
            validity: '365 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'ASP.NET Core Fundamentals',
            startDate: '10 Jul 2024',
            endDate: '10 Oct 2024',
            price: '₹ 8000',
            validity: '180 days',
            status: 'Published',
            imagePath: 'image4.jpg'
        },
        {
            title: 'Flutter for Mobile Development',
            startDate: '01 Aug 2024',
            endDate: '01 Sep 2024',
            price: '₹ 5000',
            validity: '90 days',
            status: 'Unpublished',
            imagePath: 'image4.jpg'
        }
    ];

    const [currentData, setCurrentData] = useState(data);

    useEffect(() => {
        prevRef.current.style.color = '#D6D6D6'
        prevRef.current.style.cursor = 'default'

        if (limit >= currentData.length) {
            nextRef.current.style.color = '#D6D6D6'
            nextRef.current.style.cursor = 'default'
        }
    }, [])

    

    const processData = () => {

        // data = handleSearch(data);
        // const totalPages = Math.ceil((data.length)/limit);

        let data = currentData;
        console.log('processData', currentData)
        const offset = (page - 1) * limit;
        return data.slice(offset, offset + limit)
    }

    const handleLimitChange = (e) => {
        const newLimit = e.target.value;
        setLimit(newLimit);
    }

    const handleNextPage = () => {

        const totalPages = Math.ceil((currentData.length) / limit);

        if (page != totalPages) {
            console.log('next');
            setPage(page + 1)

            if (page + 1 == totalPages) {
                console.log('1')
                nextRef.current.style.color = '#D6D6D6';
                nextRef.current.style.cursor = 'default'
            }
            prevRef.current.style.color = '#000000'
            prevRef.current.style.cursor = 'pointer'
        }
    }

    const handlePrevPage = () => {

        // const totalPages = Math.ceil((data.length)/limit);

        if (page != 1) {
            console.log('prev');
            setPage(page - 1)

            if (page - 1 == 1) {
                console.log('0')
                prevRef.current.style.color = '#D6D6D6';
                prevRef.current.style.cursor = 'default';
            }
            nextRef.current.style.color = '#000000'
            nextRef.current.style.cursor = 'pointer'
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        let input = searchRef.current.value;
        console.log(input);

        if (input?.length != 0) {
            console.log(true)
            const reg = new RegExp(input, 'i');
            console.log(data.filter(item => item.title.match(reg)), reg)
            setCurrentData(data.filter(item => item.title.match(reg)))
            // setIsSearched(true)
        } else {
            console.log(false)
            setCurrentData(data)
            // setIsSearched(false);
        }
        setPage(1);

    }


    return (
        <div className="bg-[#E2BBE9] w-[100%] min-h-[100vh]">
            <MainHeading text={'Chai aur Code'} color={'#444B79'}></MainHeading>
            <div className="flex pb-10">

                <div className="flex justify-center mt-6 w-full">
                    <div className="p-6 bg-[#F9F7F7] border-[F9F7F7] rounded-xl shadow w-[90%]">
                        <div className="">
                            <h1 className='text-4xl font-bold text-left'>{'Batches'}</h1>
                            <p className='text-xl text-[#4B4747] text-left mt-2'>{'Create learner’s batch and share information at the same time.'}</p>
                        </div>

                        <form className="flex max-w-sm my-5" onSubmit={handleSearch}>
                            <div className="relative w-full">
                                <input ref={searchRef} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full ps-10 p-2.5 outline-none" maxLength='20' placeholder="Search by Title (alt+k or cmd+k)" />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#6C6BAF] rounded-md outline-none focus:ring-blue-300 w-36">Search
                            </button>
                        </form>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b" colSpan="2">Title</th>
                                        <th className="py-2 px-4 border-b">Start Date</th>
                                        <th className="py-2 px-4 border-b">End Date</th>
                                        <th className="py-2 px-4 border-b">Price</th>
                                        <th className="py-2 px-4 border-b">Validity/Expiry</th>
                                        <th className="py-2 px-4 border-b">Status</th>
                                    </tr>
                                </thead>
                                <TableBody data={processData()} />
                            </table>
                        </div>
                        <div className="mt-3 flex justify-end items-center">
                            <div className="mr-3">Rows per page</div>
                            <select onChange={handleLimitChange} defaultValue={10} name="" id="" className="bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 outline-none">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                            <div className="flex text-5xl ml-4">
                                <div ref={prevRef} className="cursor-pointer" onClick={handlePrevPage}><MdKeyboardArrowLeft /></div>
                                <div ref={nextRef} className="cursor-pointer" onClick={handleNextPage}><MdKeyboardArrowRight /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mr-6 flex">
                    <div className="flex flex-col-reverse">
                        <a href="https://chaicode.com/" target="_blank" className="">
                            <img className="h-[115px] w-[115px] rounded-lg" src="/assets/images/cac_logo_square.png" alt="" />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DataTable