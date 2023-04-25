import swal from "sweetalert";

export default async function fetchResults(data) {
  const {
    // gender,
    age,
    grade_aggregate,
    dream_job,
    fav_sub1,
    fav_sub2,
    fav_sub3,
    interest,
    learning_style,
    } = data;
    const reqOptions = {
        method: "GET",
        mode: 'cors',
        redirect: 'follow',
    }
  try {
      const bend = `https://program-recommeder.onrender.com/?age=${age}&grade_aggregate=${grade_aggregate}&dream_job=${dream_job}&fav_sub1=${fav_sub1}&fav_sub2=${fav_sub2}&fav_sub3=${fav_sub3}&interest=${interest}&learning_style=${learning_style}`;
      console.log('here');
      const res = await fetch(bend, reqOptions);
    //   console.log('res   ',res);
      const dt = await res.json();
    // if (dt.status != "success") {
    //   throw dt.message;
    // }
    return dt;
  } catch (error) {
    console.log(error)
    return {
      msg:  "We are sorry, we could not find a recommendation for you at the moment. Please try again later.",
      error,
    };
  }
}
