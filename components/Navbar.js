import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
export default function Navbar() {
    const signIn = () => {
        signInWithPopup(auth, provider);
    };

    const signout = () => {
        signOut(auth);
    };

    const [user] = useAuthState(auth);
    const router = useRouter();
    return (
        <div className="h-20 shadow-xl px-10 py-2 bg-blue-500 flex items-center text-lg">
            <div className="h-full flex px-20 w-1/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/logofinal.png"
                    alt="ensight"
                    className="h-full object-contain cursor-pointer"
                    onClick={() => router.push("/")}
                />
            </div>
            <div className="w-2/3 flex items-center justify-end h-full py-3 space-x-8 cursor-pointer">
                <p
                    className="cursor-pointer text-white font-montserrat"
                    onClick={() => router.push("/mentorship")}
                >
                    Mentorships
                </p>
                <p
                    className="cursor-pointer text-white font-montserrat"
                    onClick={() => router.push("/programs")}
                >
                    Courses
                </p>
                <a
                    className="cursor-pointer text-white font-montserrat"
                    href="https://roadmap.sh/"
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    Roadmaps
                </a>
                <p
                    className="cursor-pointer text-white font-montserrat"
                    onClick={() => router.push("/fields")}
                >
                    Departments
                </p>
                <p
                    className="cursor-pointer text-white font-montserrat"
                    onClick={() => router.push("/faqs")}
                >
                    FAQ&apos;s
                </p>
                {!user ? (
                    <>
                        <p
                            className="cursor-pointer text-white font-montserrat"
                            onClick={signIn}
                        >
                            Sign In
                        </p>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/google.png"
                            alt=""
                            className="h-full object-contain"
                            onClick={signIn}
                        />
                    </>
                ) : (
                    <p
                        className="cursor-pointer text-white font-montserrat underline"
                        onClick={signout}
                    >
                        Hi, {user.displayName}
                    </p>
                )}
            </div>
        </div>
    );
}
