import React, { MutableRefObject, useRef, useEffect, useState } from "react";
import { dream_job, fav_sub, learning_styles, programOptions } from "@/data";
import Head from "next/head";
import { useRouter } from "next/router";
import swal from "sweetalert";
import fetchResults from "@/components/results";

interface Data {
  // name: string;
  age: number;
  // gender: string;
  grade_aggregate: number;
  interest: string;
  dream_job: string;
  fav_sub1: string;
  fav_sub2: string;
  fav_sub3: string;
  learning_style: string;
}

const Forms = () => {
  // one way to get past the useRef eror is to add "as MutableRefObject<HTMLInputElement>"
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  // another way to get past the useRef eror is to use "useRef<HTMLInputElement | null>(null)"
  const ageRef = useRef() as MutableRefObject<HTMLInputElement>;
  const wassceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [interestValue, setInterestValue] = useState<string>("");
  // const [genderValue, setGenderValue] = useState<string>("");
  const [dreamValue, setDreamValue] = useState<string>("");
  const [favSub1, setfavSub1] = useState<string>("");
  const [favSub2, setfavSub2] = useState<string>("");
  const [favSub3, setfavSub3] = useState<string>("");
  const [learning, setLearning] = useState<string>("");

  const clearInputs = () => {
    nameRef.current.value = "";
      ageRef.current.value = "";
      wassceRef.current.value = "";
      setInterestValue("");
      // setGenderValue("");
      setDreamValue("");
      setfavSub1("");
      setfavSub2("");
      setfavSub3("");
      setLearning("");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (favSub1 === favSub2 || favSub1 === favSub3 || favSub2 === favSub3) {
      swal("Kindly make sure you have selected unique favorite subjects");
      return;
    }

    if (
      !nameRef.current.value ||
      !ageRef.current.value ||
      !wassceRef.current.value ||
      !interestValue ||
      !dreamValue ||
      !favSub1 ||
      !favSub2 ||
      !favSub3 ||
      !learning
    ) {
      swal("Kindly fill all the fields");
      return;
    }
    const data: Data = {
      age: Number(ageRef.current?.value),
      // gender: genderValue,
      grade_aggregate: Number(wassceRef.current?.value),
      interest: interestValue,
      dream_job: dreamValue,
      fav_sub1: favSub1,
      fav_sub2: favSub2,
      fav_sub3: favSub3,
      learning_style: learning,
    };
    try {
      swal(
        `Hey there, ${nameRef.current?.value}`,
        "Your data is being processed, your recommendation will be here in just a moment.",
        {
          buttons: [false, false],
        }
      );
      const res = await fetchResults(data);

      // console.log(res);
      if (!res.data) {
        swal(
          `Hey there ${nameRef.current?.value}`,
          `${res.msg}`
        );
        console.log('error from request:   ', res.error);
        clearInputs()
        
        return;
      }

      swal(
        `Hey there ${nameRef.current?.value}`,
        `Your recommended course is ${res?.data}`
      );
      clearInputs()
      
    } catch (error) {
      console.log('error from handlesubmit:   ', error);
      clearInputs()
      
    }
  };

  return (
    <main className="flex min-h-screen border-l-0 flex-col items-center gap-10 p-4">
      <Head>
        <title>Recommender Tool</title>
      </Head>
      <h1 className="text-xl min-w-full font-bold mt-3">
        Enter your details and submit to get a recommendation
      </h1>
      <form
        className="gap-5 self-center w-full flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="gap-5 self-center justify-center w-full md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" ref={nameRef} />
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="age">Age</label>
            <input required type="number" name="age" id="age" ref={ageRef} />
          </div>

          {/* <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              required
              onChange={(e) => setGenderValue(e.target.value)}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div> */}

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="wassce">Wassce Aggregate</label>
            <input
              required
              type="number"
              name="wassce"
              id="wassce"
              ref={wassceRef}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="interest">Interest</label>
            <select
              name="interest"
              id="interest"
              required
              onChange={(e) => setInterestValue(e.target.value)}
            >
              <optgroup>
                {programOptions.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="dream">Dream Job</label>
            <select
              name="dream"
              id="dream"
              required
              onChange={(e) => setDreamValue(e.target.value)}
            >
              {dream_job.map((job, index) => (
                <option key={index} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="fav1">Favorite Subject 1</label>
            <select
              name="fav1"
              id="fav1"
              required
              onChange={(e) => setfavSub1(e.target.value)}
            >
              {fav_sub.map((job, index) => (
                <option key={index} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="fav2">Favorite Subject 2</label>
            <select
              name="fav2"
              id="fav2"
              required
              onChange={(e) => setfavSub2(e.target.value)}
            >
              {fav_sub.map((job, index) => (
                <option key={index} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="fav3">Favorite Subject 3</label>
            <select
              name="fav3"
              id="fav3"
              required
              onChange={(e) => setfavSub3(e.target.value)}
            >
              {fav_sub.map((job, index) => (
                <option key={index} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="learning">Learning Style</label>
            <select
              name="learning"
              id="learning"
              required
              onChange={(e) => setLearning(e.target.value)}
            >
              {learning_styles.map((style, index) => (
                <option key={index} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Forms;
