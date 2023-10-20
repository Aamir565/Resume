import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-info text-light py-5">
        <div className="container">
          <img src="assets/images/profile.jpg" alt="profile" height="200px" />
          <h1>Aamir Rayeen</h1>
          
          <p>
            I am a hardworking and dedicated individual with experience in
            Customer Care Executive
          </p>
          <hr />
          <h2>Education</h2>
          <ul>
            <li>A. S. DEGREE COLLAGE KAILARAS, MORENA - PGDCA</li>
            <li>
              INDRAPRASTHA ARTS, SCIENCE & MANAGEMENT INSTITUTE KAILARAS, MORENA
              - Bachelor of Science ( Computer Science)
            </li>
            <li>
              SANDEEPANI PUBLIC H.S. SCHOOL, MORENA - HIGHER SECONDARY ( M.P.
              BOARD)
            </li>
          </ul>
          <hr />
          <h2>Work Experience</h2>
          <ul>
            <li>Customer Care Executive - Teleperformance India</li>
            <p>December 2022 - Present</p>
            <ul>
              <li>Answered customer inquiries via chat.</li>
              <li>Resolved customer complaints and issues.</li>
              <li>
                Maintained customer records and updated account information.
              </li>
            </ul>
          </ul>
          <hr />
          <h2>Skills</h2>
          <h3>Soft Skills</h3>
          <ul>
            <li>Customer service:⭐⭐⭐⭐⭐</li>
            <li>Organizational Skills:⭐⭐⭐⭐</li>
            <li>Emotional Intelligence: ⭐⭐⭐⭐</li>
          </ul>
          <h3>Tech Skills</h3>
          <ul>
            <li>HTML: ⭐⭐⭐⭐</li>
            <li>CSS : ⭐⭐⭐</li>
            <li>JavaScript: ⭐⭐⭐</li>
            <li>Node JS : ⭐⭐⭐</li>
            <li>React: ⭐⭐⭐</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
