import React, {useState} from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const InfluencerProfile = () => {
    function clickImage1() {
        setImageList([imageList[1], imageList[2], imageList[3], imageList[0]])
    }
    function clickImage2() {
        setImageList([imageList[2], imageList[3], imageList[1], imageList[0]])
    }
    function clickImage3() {
        setImageList([imageList[3], imageList[0], imageList[1], imageList[2]])
    }
    const [imageList, setImageList] = useState(["stock1.jpg", "stock2.jpg", "stock3.jpg", "stock4.jpg"]);
    return (
        <div className=' flex h-screen bg-gray-200 px-4'>
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg my-auto">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    
                    <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
                        <img src={`\\${imageList[0]}`} className='object-cover' />
                    </div>
                    {/* Thumbnail images */}
                    <div className="flex mt-4 space-x-2">
                        {/* Placeholder for thumbnail images */}
                        <div className="bg-gray-200 w-20 h-20 rounded-lg cursor-pointer hover:border-2" onClick={clickImage1}>
                            <img src={`\\${imageList[1]}`} className="h-20 w-20"/>
                        </div>
                        <div className="bg-gray-200 w-20 h-20 rounded-lg cursor-pointer" onClick={clickImage2}>
                            <img src={`\\${imageList[2]}`} className="h-20 w-20"/>
                        </div>
                        <div className="bg-gray-200 w-20 h-20 rounded-lg cursor-pointer" onClick={clickImage3}>
                            <img src={`\\${imageList[3]}`} className="h-20 w-20" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 ml-6">
                    <h2 className="text-2xl font-semibold">Chai aur code</h2>
                    <p className="text-gray-500 mt-2">@chaiaurcode</p>
                    <p className="text-xl text-gray-800 mt-4">{`\u20B9 ${51000}`}</p>
                    <p className="mt-4 text-gray-600">The nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.</p>
                    <div className="mt-4">
                        <div className="flex items-center">
                            {/* Stars placeholder */}
                            <p className="text-yellow-500 mr-2">★★★★☆</p>
                            <p>4.59</p>
                        </div>
                        <div className="mt-4">
                            {/* Color picker placeholder */}
                            <div className="flex space-x-2">
                                <YouTubeIcon />
                                <InstagramIcon />
                                <MailOutlineIcon />
                            </div>
                        </div>
                    </div>

                    

                    <div className="flex space-x-4 mt-6">
                        <button className="px-8 py-2 bg-blue-600 text-white text-sm uppercase rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Hire</button>
                        <button className="px-8 py-2 bg-white text-gray-800 text-sm uppercase rounded border border-gray-300 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">Chat</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InfluencerProfile;
