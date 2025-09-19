import React, { useState } from 'react'
import './Courses.css'

const Courses = () => {
  const [active, setActive] = useState("inprogress");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [expandedCourse, setExpandedCourse] = useState(null); 

  const coursesData = {
    inprogress: [
      { id: 1, title: "Java - July (24)", mentor: "Ayunsh B", startDate: "July 1, 2024", type: "Academic", progress: 99, modules: 8, topics: 55 },
      { id: 2, title: "Java - July (24)", mentor: "Ayunsh B", startDate: "July 1, 2024", type: "Academic", progress: 58, modules: 8, topics: 55 },
      { id: 3, title: "Java - July (24)", mentor: "Ayunsh B", startDate: "July 1, 2024", type: "Academic", progress: 30, modules: 8, topics: 55 },
    ],
    completed: [
      { id: 4, title: "Java - July (24)", mentor: "Ayunsh B", startDate: "July 1, 2024", type: "Academic", progress: 89, modules: 8, topics: 55 }
    ],
    upcoming: [],
  };

  const currentCourses = coursesData[active];

  const toggleModule = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="courses-container">
      {/* Tabs */}
      <div className="courses-information">
        <p className={active === "inprogress" ? "active" : ""} onClick={() => setActive("inprogress")}>
          Inprogress <button style={{backgroundColor: "#f4cb3ade"}}>10</button>
        </p>
        <p className={active === "completed" ? "active" : ""} onClick={() => setActive("completed")}>
          Completed <button style={{backgroundColor: "#3cb371"}}>0</button>
        </p>
        <p className={active === "upcoming" ? "active" : ""} onClick={() => setActive("upcoming")}>
          Upcoming <button style={{backgroundColor: "#87cefa"}}>0</button>
        </p>
      </div>

      {/* Dropdown */}
      <div className='drop-down'>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="Courses" disabled>Courses</option>
          <option value="All">All</option>
          <option value="Academic">Academic</option>
          <option value="Master Classes">Master Classes</option>
        </select>
      </div>

      {/* Courses List */}
      {currentCourses.length === 0 ? (
        <div style={{textAlign: "center", marginTop: "40px"}}>
          <img src="/assets/nocourse.png" alt="No course found" style={{ width: "250px", marginBottom: "20px" }}/>
          <h3>No courses found</h3>
          <p>You don't have any courses.</p>
        </div>
      ) : (
        currentCourses.map(course => (
          <div className='courses' key={course.id}>
            <div className='couses-and-status'>
              <h4>{course.title}</h4>
              <button><span>.</span> In Progress</button>
            </div>

            <div className='module-topics'>
              <button style={{display: "flex", alignItems: "center", gap: "8px"}}>
                <i className="bi bi-file-earmark-minus"></i>{course.modules} Modules
              </button>
              <button style={{display: "flex", alignItems: "center", gap: "8px"}}>
                <i className="bi bi-clipboard"></i>{course.topics} Topics
              </button>
            </div>

            <div className="mentor-progress">
              <img src="/assets/placements.jpg" alt="BroKod" className='placementimg'/>
              <div className='mentor-name ' style={{paddingLeft: "5px"}}>
                <p>Mentor</p>
                <p className='mentor' style={{color: "black", fontSize:"16px" }}>{course.mentor}</p>
              </div>
              <div className='mentor-name'>
                <p>Start Date</p>
                <p className='mentor' style={{color: "black", fontSize:"16px"}}>{course.startDate}</p>
              </div>
              <div className='mentor-name'>
                <p>Course Type</p>
                <p className='mentor' style={{color: "black", fontSize:"16px"}}>{course.type}</p>
              </div>
              <div className="progress-section">
                <p>{course.progress}%</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: `${course.progress}%` }} />
                </div>
              </div>
            </div>

            <div className="view-continue">
              <button className="btn-view"><i className="bi bi-book"></i> View Syllabus</button>
              <button className="btn-continue"><i className="bi bi-arrow-right"></i> Continue</button>
            </div>

           
            <div className='active-module'>
              <button onClick={() => toggleModule(course.id)}>
                {expandedCourse === course.id ? "-" : "+"}
              </button>
              <p>Active Module</p>
            </div>

        
            {expandedCourse === course.id && (
              <div className="module-details">
                <h5>Instrduction to Python </h5>
                <h5>I/O Basics</h5>
                <h5>Operators & conditional Statements</h5>
                <h5>Nested Conditions</h5>
                <h5>Loops</h5>
                <h5>Loop Control Statements</h5>
                <h5>Comparing Strings & Naming Variables</h5>
                <h5>Lists</h5>
                <h5>Functions</h5>
                <h5>Recurtion</h5>
                <h5>Tupels & Sets</h5>
                <h5>Dictionires</h5>
                <h5>Introduction to Object Oriented Programing</h5>
                <h5>Miscellaneous Topics</h5>
                <h5>Revision</h5>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Courses;
