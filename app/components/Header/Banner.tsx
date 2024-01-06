import Image from "next/image"
export default function Banner() {
    return (<div className="bg-[#FCF7F8]">
    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Collaborate remotely, with
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Pixel Party.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">We are Building a Video Conferencing App with Lowest Latency and Maximum Stability!</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="/createMeet" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                    </div>
                </div>

                <div>
                    <Image className="w-5/6" width={100} height={100} src="/hero.svg" alt="" />
                </div>
             </div>
        </div>
    </section>
</div>)
}

