import React, { MutableRefObject, useRef, useEffect, useState } from "react";
import { programOptions } from "@/data";
import Head from "next/head";

interface Data {
  name: string;
  age: number;
  gender: string;
  wassce: number;
  bece: number;
  pp: string;
  ppcp: number;
  dream: string;
}

const Forms = () => {
  // one way to get past the useRef eror is to add "as MutableRefObject<HTMLInputElement>"
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  // another way to get past the useRef eror is to use "useRef<HTMLInputElement | null>(null)"
  const ageRef = useRef() as MutableRefObject<HTMLInputElement>;
  const dreamRef = useRef() as MutableRefObject<HTMLInputElement>;
  const wassceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const beceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ppcpRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [ppValue, setPpValue] = useState<string>("");
  const [genderValue, setGenderValue] = useState<string>("");

  useEffect(() => {
    const pp = document.getElementById("pp") as HTMLSelectElement;
    setPpValue(pp.options[pp.selectedIndex].value);
    const gender = document.getElementById("gender") as HTMLSelectElement;
    setGenderValue(gender.options[gender.selectedIndex].value);
  }, [ppValue, genderValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Data = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      gender: genderValue,
      wassce: Number(wassceRef.current?.value),
      bece: Number(beceRef.current?.value),
      pp: ppValue,
      ppcp: Number(ppcpRef.current?.value),
      dream: dreamRef.current?.value,
    };
    console.log(data);
    alert('Your data has been logged to the console for now, Backend will be added soon')
    nameRef.current.value = "";
    ageRef.current.value = "";
    wassceRef.current.value = "";
    beceRef.current.value = "";
    ppcpRef.current.value = "";
    dreamRef.current.value = "";
    setPpValue("");
    setGenderValue("");
  };

  return (
    <main className="flex min-h-screen border-l-0 flex-col items-center gap-10 p-4">
      <Head>
        <title>
          Recommender Tool
        </title>
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

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="wassce">Wassce Score</label>
            <input
              required
              type="number"
              name="wassce"
              id="wassce"
              ref={wassceRef}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="bece">Bece Score</label>
            <input required type="number" name="bece" id="bece" ref={beceRef} />
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="pp">Preferred Program</label>
            <select name="pp" id="pp" required>
              {programOptions.map((course, index) => (
                <option key={index} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="ppcp">Preferred Program cut-off point</label>
            <input required type="number" name="ppcp" id="ppcp" ref={ppcpRef} />
          </div>

          <div className="flex flex-col gap-2 w-full md:flex-1">
            <label htmlFor="dream">Dream Job</label>
            <input
              required
              type="text"
              name="dream"
              id="dream"
              ref={dreamRef}
            />
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
