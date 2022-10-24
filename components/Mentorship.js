import React from "react";
import Mentors from "./Mentors";
import { useRouter } from "next/router";

function Mentorship() {
    const router = useRouter();
    return (
        <>
            <div className="overflow-y-scroll scrollbar-hide">
                <div className="flex px-[2rem] py-[2rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/mentor.jpg"
                        className="w-1/2 h-[25rem]"
                        alt="loading"
                    />
                    <div className="relative container p-[1rem] flex items-start flex-col bg-white ml-[1rem] justify-center">
                        <button
                            onClick={() => {
                                router.push("/mentorship/apply");
                            }}
                            className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-4 right-4 font-sans z-10"
                        >
                            Apply Now
                        </button>
                        <h1 className="font-bold text-3xl font-serif">
                            Mentorship{" "}
                        </h1>
                        <h2 className="text-xl py-[0.5rem]">
                            WHY DO YOU NEED A MENTOR?{" "}
                        </h2>
                        <p className="py-[0.3rem]">
                            Mentorship in middle and high school has the power
                            to impact the course of students’ academic and
                            personal life trajectories. Human connection built
                            on trust is the glue that binds students’ academic
                            and personal lives and helps them make sense of
                            their futures.
                        </p>
                        <p className="py-[0.3rem]">
                            The transition from high school to college is a big
                            leap towards the goals we aspire to achieve. It is
                            also a crucial period for exploring the various
                            opportunities available to us. Today, there are so
                            many diversion fields like Artificial Intelligence,
                            Machine Learning, Game Development, etc. Talking to
                            someone who was once in the same boat and went
                            through the same phase as you are, can help you
                            understand what mistakes you must refrain from
                            making and also learn from her/his experience.
                        </p>
                    </div>
                </div>

                <div className="flex px-[2rem] py-[1rem] flex-col">
                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] items-start flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            Learn from experience
                        </span>
                        <p className="text-lg">
                            When you have a mentor, they not only provide you
                            the guidance also share their personal experiences
                            and learnings with you. They will let you in, about
                            the learnings of other people. This helps you build
                            your own perspective and gain a clear understanding
                            of how things are done and how they could be.
                        </p>
                    </div>

                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] self-end flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            They empathise with you
                        </span>
                        <p className="text-lg">
                            A mentor has been through similar times and they
                            understand how things proceed in the real world in a
                            given field. They can look at things from your point
                            of view and suggest the best ways of dealing with a
                            situation when you are stuck. A mentor can provide a
                            student with personal support throughout the ups and
                            downs of academia. This can reinforce a student’s
                            sense of resilience.
                        </p>
                    </div>

                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] items-start flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            Build a network early on
                        </span>
                        <p className="text-lg">
                            Mentors also let you in on their network and help
                            you connect with the right kind of people in your
                            journey. This helps you interact with more people in
                            your industry and also opens up endless
                            opportunities for you. When you talk with
                            experienced people, it always helps you learn things
                            faster.
                        </p>
                    </div>

                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] self-end flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            They focus on the why
                        </span>
                        <p className="text-lg">
                            Everyone’s journey is different, but they always
                            want to reach the end goal. Your mentor will help
                            you remember “the Why” of your journey which will
                            help you set various goals and milestones for your
                            journey. This will also help you when you have to
                            make some tough decisions in your career.
                        </p>
                    </div>

                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] items-start flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            Become accountable for your goals
                        </span>
                        <p className="text-lg">
                            It is easy to get distracted and go off track. When
                            you have a mentor, they not only help you in setting
                            the goals but they also check in with you on your
                            progress. Now that you have someone to hold you
                            accountable, you easily become more motivated to
                            finish the tasks for yourself and see the results.
                        </p>
                    </div>

                    <div className="m-[1rem] bg-blue-300 rounded-xl p-[1rem] flex w-[60vw] self-end flex-col hover:scale-105 drop-shadow-lg">
                        <span className="font-bold font-serif text-xl">
                            Reliability
                        </span>

                        <p className="text-lg">
                            Connecting with a mentor working in a particular
                            field can help get proper insight about what the
                            field entails and the work you’ll need to put
                            in.Thus, we are combining the spirit of young
                            generations with the knowledge of experienced
                            scholars to provide the best kind of solution to the
                            problem of bridging the gap between the two.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mentorship;
