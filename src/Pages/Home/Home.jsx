import React from "react";
import "./Home.css";
import Categories from "../../Components/Categories/Categories";
import BestSellingCourses from "../../Components/BestSellingCourses/BestSellingCourses";
import FeaturesCourses from "../../Components/FeaturesCourses/FeaturesCourses";
import TopInstructors from "../../Components/TopInstructors/TopInstructors";
import TrustedCompanies from "../../Components/TrustedCompanies/TrustedCompanies";
import BecomeAnInstructor from "../../Components/BecomeAnInstructor/BecomeAnInstructor";
import RecentCourses from "../../Components/RecentCourses/RecentCourses";

const Home = () => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch("courses.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCourses(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <div className="hero">
        <div className="hero-container lg:flex-row-reverse">
          <img src="https://i.ibb.co/KbKcy7z/Images.png" className="img" alt="" />
          <div className="hero-info">
            <h1 className="text-5xl font-bold">Learn with expert anytime anywhere</h1>
            <p className="py-6">
              Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
            </p>
            <button className="btn btn-primary font-sans">Create Account</button>
          </div>
        </div>
      </div>
      <section>
        <Categories></Categories>
        <BestSellingCourses></BestSellingCourses>
        <FeaturesCourses></FeaturesCourses>
        <RecentCourses></RecentCourses>
        <BecomeAnInstructor></BecomeAnInstructor>
        <TopInstructors></TopInstructors>
        <TrustedCompanies></TrustedCompanies>
      </section>
    </div>
  );
};

export default Home;
