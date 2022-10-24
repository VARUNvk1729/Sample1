import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

function Mentors() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("")
    const [levelofeducation, setLevelofEducation] = useState("")
    const [proficientfields, setProficientFields] = useState("");

    let arr = proficientfields.split(/[ ,]+/);
    let newarray = [];
    for(let i=0;i<arr.length; i++)
    {
        newarray.push(arr[i]);
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "mentors"), {
      name,email,experience,levelofeducation,experience,proficientfields : newarray
    });
    setName("");
    setEmail("");
    setExperience("");
    setLevelofEducation("");
    setProficientFields("");

  };

  return (
    <>
    <div className="">
      <form onSubmit={handleSubmit} className="bg-blue-400 ali justify-between shadow-md rounded px-16 pt-6 pb-8 mb-4">
        <div className="form-group pd-2 mx-2 my-2 mb-4">
        <div className="mb-4">

          <label htmlFor="exampleInputEmail1" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="string"
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        </div>
        <div className="form-group pd-2 mx-2 my-2 mb-4">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="string"
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Link"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group pd-2 mx-2 my-2 mb-4">
          <label htmlFor="exampleInputEmail1">Level of Education</label>
          <input
            type="number"
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            value={levelofeducation}
            onChange={(e) => setLevelofEducation(e.target.value)}
          />
        </div>
        <div className="form-group pd-2 mx-2 my-2 mb-4">
          <label htmlFor="exampleInputEmail1">Experience</label>
          <input
            type="number"
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group pd-2 mx-2 my-2 mb-4">
          <label htmlFor="exampleInputEmail1">Proficient Fields</label>
          <input
            type="string"
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            value={proficientfields}
            onChange={(e) => setProficientFields(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default Mentors;
