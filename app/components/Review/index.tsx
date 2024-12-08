'use client'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Review() {
    return (
        <>
            <section className="min-h-screen bg-[url('/images/bg-review.png')] bg-center bg-cover flex flex-col space-y-20">
                <div className="text-center mx-auto mt-28">
                    <h1 className="font-bold text-6xl text-black">Our Happy Customer</h1>
                    <p className=" text-base font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className=''>
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        centeredSlides={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 40,
                            },

                        }}

                    >
                        <SwiperSlide>

                            <div className="relative flex flex-col items-center pt-10 mb-28">
                                <div className='absolute -top-10'>
                                    <img src="/images/person-review1.png" alt="woman" className="rounded-full mx-auto mt-10 object-cover h-20 w-20" />
                                    <img src="/images/stars.png" alt="bintang" className='mx-auto -mt-6' />
                                </div>
                                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl p-24">

                                    <p className="text-gray-600 text-center my-8">
                                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.
                                    </p>
                                    <div className="text-center">
                                        <h3 className="text-gray-900 font-bold text-lg">Ama Ampomah</h3>
                                        <p className="text-gray-500">CEO & Founder Inc</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="relative flex flex-col items-center pt-10 mb-28">
                                <div className='absolute -top-10'>
                                    <img src="/images/person-review2.jpeg" alt="woman" className="rounded-full mx-auto mt-10 object-cover h-20 w-20" />
                                    <img src="/images/stars.png" alt="bintang" className='mx-auto -mt-6' />
                                </div>
                                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl p-24">

                                    <p className="text-gray-600 text-center my-8">
                                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.
                                    </p>
                                    <div className="text-center">
                                        <h3 className="text-gray-900 font-bold text-lg">Kweku Annan</h3>
                                        <p className="text-gray-500">CEO & Founder Inc</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="relative flex flex-col items-center pt-10 mb-28">
                                <div className='absolute -top-10'>
                                    <img src="/images/person-review3.jpg" alt="woman" className="rounded-full mx-auto mt-10 object-cover h-20 w-20" />
                                    <img src="/images/stars.png" alt="bintang" className='mx-auto -mt-6' />
                                </div>
                                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl p-24">

                                    <p className="text-gray-600 text-center my-8">
                                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.
                                    </p>
                                    <div className="text-center">
                                        <h3 className="text-gray-900 font-bold text-lg">Candice D. Wright</h3>
                                        <p className="text-gray-500">Meeting director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="relative flex flex-col items-center pt-10 mb-28">
                                <div className='absolute -top-10'>
                                    <img src="/images/person-review4.jpg" alt="woman" className="rounded-full mx-auto mt-10 object-cover h-20 w-20" />
                                    <img src="/images/stars.png" alt="bintang" className='mx-auto -mt-6' />
                                </div>
                                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl p-24">

                                    <p className="text-gray-600 text-center my-8">
                                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.
                                    </p>
                                    <div className="text-center">
                                        <h3 className="text-gray-900 font-bold text-lg">Kenneth L. Aragon</h3>
                                        <p className="text-gray-500">Cable splicer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="relative flex flex-col items-center pt-10 mb-28">
                                <div className='absolute -top-10'>
                                    <img src="/images/person-review5.jpg" alt="woman" className="rounded-full mx-auto mt-10 object-cover h-20 w-20" />
                                    <img src="/images/stars.png" alt="bintang" className='mx-auto -mt-6' />
                                </div>
                                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl p-24">

                                    <p className="text-gray-600 text-center my-8">
                                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.
                                    </p>
                                    <div className="text-center">
                                        <h3 className="text-gray-900 font-bold text-lg">David K. Beamon</h3>
                                        <p className="text-gray-500">
                                            Facilities coordinator</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    )

}