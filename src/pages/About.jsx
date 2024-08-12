import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Who We Are and What We Do
          </h1>
          <p>
          Everyone has different approach and priority when it comes to travel planning.
          The team at Q1 Travel & Tours have various areas of expertise in order to cover all of our clients’ travel needs.
          We are a Travel, Ticketing and Tourism sales Company licensed by the Ghana Tourism Authority and a member of the Tour Operators Union of  Ghana. 
          Q1 Travel & Tours services is committed to excellence in corporate integrity, performance and overall satisfaction.
          We are located right in the city of Accra,  Ghana.

          </p>
          <br />
          <p>
          Whether you’re planning an upcoming trip for work or leisure & family vacations,  we make the booking process easy and enjoyable. 
          Call us today and start traveling!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
