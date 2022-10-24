import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

function Courses() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("tech");

    const categories = ["tech", "art", "underexplored"];

    useEffect(() => {
        const colRef = query(
            collection(db, "courses"),
            where("tag", "==", category),
            orderBy("title", "asc")
        );
        getDocs(colRef).then((q) => setData(q));
    }, [category]);

    return (
        <div className="flex flex-col w-[75vw] mx-auto overflow-y-scroll scrollbar-hide">
            <h1 className="text-center text-4xl font-montserrat mt-4">
                Courses
            </h1>

            <div className="flex space-x-4 mx-auto">
                {categories.map((c) => (
                    <div
                        key={c}
                        className="px-10 py-2 rounded-md bg-white cursor-pointer mt-4 hover:bg-gray-100" onClick={()=>setCategory(c)}
                    >
                        {c == "tech" && "Technology"}
                        {c == "art" && "Visual Arts"}
                        {c == "underexplored" && "Under Explored"}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 w-full">
                {data?.docs ? (
                    data?.docs?.map((doc) => (
                        <CourseCard
                            title={doc.data().title}
                            link={doc.data().link}
                            key={doc.data().link}
                            image={doc.data().logo}
                        />
                    ))
                ) : (
                    <>
                        <CourseCard title="Loading" link="" image="" />
                        <CourseCard title="Loading" link="" image="" />
                        <CourseCard title="Loading" link="" image="" />
                    </>
                )}
            </div>
        </div>
    );
}

export default Courses;

const CourseCard = (props) => {
    const router = useRouter();
    return (
        <div className="font-montserrat flex flex-col justify-between items-center bg-blue-300 pt-5 pb-5 m-5 rounded-2xl space-y-4">
            <p className="text-xl">{props.title}</p>
            {props.image && (
                //  eslint-disable-next-line @next/next/no-img-element
                <img
                    className="p2 my-1"
                    src={`/images/logos/${props.image}.png`}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                />
            )}
            <button
                onClick={() => router.push(`/programs/${props.link}`)}
                className="bg-blue-500 px-10 py-2 rounded-lg hover:bg-blue-600"
            >
                View Course
            </button>
        </div>
    );
};
