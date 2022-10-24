import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    const router = useRouter();
    return (
        <div className="h-[calc(100vh-5rem) flex flex-col w-[75vw] mx-auto overflow-y-scroll scrollbar-hide font-montserrat">
            <div className="bg-white mt-16 flex items-center justify-center rounded-lg shadow-2xl">
                <p className="py-[1.5rem] font-montserrat text-2xl">
                    Initiative for the students, by the students
                </p>
            </div>

            <div className="flex items-center justify-between w-full my-[3rem]">
                <div className="w-1/2 font-[600] space-y-1">
                    <p className="text-lg text-center">The only programme with</p>
                    <p className="text-4xl text-center font-montserrat font-black p-[1rem]">
                        Access to Multiple Courses
                        <br /> & Instant Mentorship
                    </p>
                    <p className="text-lg text-center">from the best</p>
                    <br />
                    <div className="text-sm font-bold text-center px-[1.3rem]">
                        <p>
                            Wish you had an elder sibling who could walk you
                            through each and every uncertainty you have about your career & future?
                            Do not
                        </p>
                        <p>
                            worry we are here, We&apos;ll provide a platform for
                            all your queries & guide you every step of the way.
                        </p>
                        <p></p>
                    </div>
                </div>

                <img
                    src="/images/study.jpg"
                    alt="study krlo"
                    className="w-1/2 object-contain shadow-lg rounded-xl"
                />
            </div>

            <div className="mx-auto py-2">
                <button
                    className="border-[3px] font-[500] border-blue-700 px-4 py-1 text-lg cursor-pointer rounded-lg"
                    onClick={() => router.push("/faqs")}
                >
                    How does it work?
                </button>
            </div>

            <div className="w-full bg-blue-400 rounded-xl flex justify-between space-x-4 my-6">
                <div className="w-1/3 pl-16 my-auto">
                    <h2 className="text-xl font-black">
                        Sharpen Yourself up with some Latest Skills
                    </h2>
                    <p className="text-md font-[500]">
                        Learn any skill at your own pace with personal
                        mentorship and immediate doubt clearing at your convenience.
                    </p>

                    <button
                        className="bg-white px-12 mt-4 py-1 rounded-lg font-[500]"
                        onClick={() => router.push("/programs")}
                    >
                        Explore Programs
                    </button>
                </div>

                <div className="w-1/2 p-6">
                    <video controls className="rounded-xl">
                        <source src="intro.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}
