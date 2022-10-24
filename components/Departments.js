import React, { useState } from "react";

function Departments() {
    const [dep, setDep] = useState("cse");
    return (
        <>
            <div className="font-montserrat overflow-y-scroll scrollbar-hide">
                <p className="font-bold text-3xl text-center py-4">
                    Circuital Departments
                </p>
                {/* </div> */}
                <div className="buttons flex justify-center items-center">
                    <button
                        className="rounded mx-4 text-xl bg-blue-300 p-[0.5rem] hover:bg-blue-800 hover:text-white"
                        onClick={() => setDep("cse")}
                    >
                        CSE
                    </button>
                    <button
                        className="rounded mx-4 text-xl bg-blue-300 p-[0.5rem] hover:bg-blue-800 hover:text-white"
                        onClick={() => setDep("ece")}
                    >
                        ECE
                    </button>
                    <button
                        className="rounded mx-4 text-xl bg-blue-300 p-[0.5rem] hover:bg-blue-800 hover:text-white"
                        onClick={() => setDep("ee")}
                    >
                        EE
                    </button>
                </div>

                <div className="flex px-[2rem] py-[1rem] flex-col items-center">
                    {dep === "cse" && (
                        <div className="m-[1rem] bg-white rounded-xl p-[1.5rem] flex w-[60vw] items-center flex-col hover:scale-105 drop-shadow-lg">
                            <span className="font-bold font-montserrat text-xl">
                                WHAT IS COMPUTER SCIENCE ENGINEERING?
                            </span>
                            <p className="text-lg">
                                Computer Science Engineering (CSE) is an
                                academic programme which integrates the field of
                                Computer Engineering and Computer Science. The
                                programme emphasises the basics to masters of
                                computer programming and networking. The said
                                topics are related to computation, algorithms,
                                programming languages, program design, computer
                                software, computer hardware, etc.{" "}
                            </p>
                            <p className="text-lg">
                                CSE could be really interesting for students
                                good at mathematics, real time problem solving
                                and logical thinking. In today’s world every
                                industry requires the basics of computer
                                science. The demand for computer science
                                engineers is continuously increasing not only in
                                companies but for research purposes too.
                            </p>
                            <p className="text-lg">
                                New unconventional fields like Artificial
                                Intelligence, Machine Learning, Robotics, Data
                                Sciences are also becoming popular as students
                                get more exposure in these fields. Wouldn’t it
                                be great if high school students had exposure
                                and roadmaps to these fields?
                            </p>
                        </div>
                    )}

                    {dep === "ece" && (
                        <div className="m-[1rem] bg-white rounded-xl p-[1.5rem] flex w-[60vw] items-center flex-col hover:scale-105 drop-shadow-lg">
                            <span className="font-bold font-montserrat text-xl">
                                WHAT IS ELECTRONICS AND COMMUNICATION
                                ENGINEERING?
                            </span>
                            <p className="text-lg">
                                Unlike CSE, ECE involves research, designing,
                                developing, testing and maintenance of
                                equipment. This branch offers students the best
                                of both worlds as it doesn’t only help you
                                explore the domain of core electronics
                                engineering but it also allows you to deviate
                                towards the software-oriented careers like IoT,
                                Software Development, etc.
                            </p>
                            <p className="text-lg">
                                The field of ECE has its basic foundations in
                                the following major technical areas i.e.,
                                Signals and Systems, Semiconductor devices,
                                Optical systems, Microprocessor and Computing
                                devices, Basic electronics, Digital and Analog
                                Communication, Satellite communication, etc. One
                                can also dive deeper into areas like IoT and
                                Robotics.
                            </p>
                            <p className="text-lg">
                                ECE is one of the versatile branches in
                                engineering and is in high demand in the modern
                                world.
                            </p>
                        </div>
                    )}

                    {dep === "ee" && (
                        <div className="m-[1rem] bg-white rounded-xl p-[1.5rem] flex w-[60vw] items-center flex-col hover:scale-105 drop-shadow-lg">
                            <span className="font-bold font-montserrat text-xl">
                                WHAT IS ELECTRICAL ENGINEERING?
                            </span>
                            <p className="text-lg">
                                The modern era is heavily dependent on
                                electrical and electronics products. The global
                                supply chain systems have necessitated the need
                                for skilled professionals in local electrical
                                industries.{" "}
                            </p>
                            <p className="text-lg">
                                The main fields in electrical engineering
                                include Digital and Power electronics, Analog
                                Electronics, Communication Systems and Embedded
                                Systems.{" "}
                            </p>
                            <p className="text-lg">
                                Careers in electrical engineering are highly
                                sought after due to the huge range of job
                                opportunities available for electrical engineers
                                immediately after graduation. Electrical
                                engineering is leading the charge in development
                                of cutting-edge technologies in healthcare,
                                robotics and transport industries. There is a
                                huge demand for talented engineering graduates
                                who can design and develop electrical control
                                systems.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Departments;
