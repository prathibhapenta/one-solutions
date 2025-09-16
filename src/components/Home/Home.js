import React from 'react'
import './Home.css'
import "bootstrap-icons/font/bootstrap-icons.css";
const Home = () => {
  const homeData = {
    brokod: {
      title: "BroKod: Your Learning Ally at KadNest",
      description:
        "Unlock your potential with BroKod - your mentor, friend, coach, guide, and companion. Available 24/7 to support your journey, from learning to career success",
      image: "/assets/brokodimg.jpg",
    },

    liveClasses: {
      title: "Live Classes",
      items: [
        {
          id: "lc1",
          letter: "M",
          name: "Mastering Front-End Tech...",
          mentor: "Deeptanshu Kumar",
          status: "Upcoming",
          progress: "87.18%",
          time: "02:30 PM - 04:30 PM",
        },
        {
          id: "lc2",
          letter: "M",
          name: "Mastering Back-End Tech...",
          mentor: "Rahul Sharma",
          status: "Upcoming",
          progress: "97.5%",
          time: "05:00 PM - 06:30 PM",
        },
      ],
    },

    selfPaced: {
      title: "Self-Paced Courses",
      items: [
        {
          id: "sp1",
          letter: "F",
          name: "Full Stack Project Learn sph...",
          mentor: "Deeptanshu Kumar",
          type: "Self-Paced",
          progress: "6.67%",
          color:"#e0e0e0",
        },
        {
          id: "sp2",
          letter: "A",
          name: "Applitude and Resoning",
          mentor: "Rahul Sharma",
          type: "Self-Paced",
          progress: "1.08%",
        },
        {
          id: "sp3",
          letter: "P",
          name: "Python for Data Science",
          mentor: "Rahul Sharma",
          type: "Self-Paced",
          progress: "0%",
        },
      ],
    },
     attendance: {
    title: "Attendance",
    items: [
      {
        id: "at1",
        progress: "79.7%",
        total: 133,
        present: 106,
        absent: 27,
        courseduration: "Java - July (24)"
      },
      {
        id: "at2",
        progress: "70.5%",
        total: 44,
        present: 31,
        absent: 13,
        courseduration: "Python"
      },
      {
        id: "at3",
        progress: "85%",
        total: 51,
        present: 41,
        absent: 10,
        courseduration: "Mastering FrontEnd- Technologies"
      },
    ],
    },


    practice: {
      title: "Practice",
      items: [
        {
          id: "pr1",
          title: "Path To Proficiency",
          challenge: "Intermediate Challenge",
          progress: "0%",
          problems: "22",
          color: "#c0c9ee4a",
          iconColor: "#7272fcff",
        },
        {
          id: "pr2",
          title: "One Solutions 75",
          challenge: "Advanced Challenge",
          progress: "0%",
          problems: "30",
          color: "#cdf9ed75",
          iconColor: "#078866ff",
        },
        {
          id: "pr1",
          title: "Path To Proficiency",
          challenge: "Intermediate Challenge",
          progress: "0%",
          problems: "22",
          color: "#f5d0e458",
          iconColor: "#d43b8cff",
        },
      ],
    },

    
    placements: {
      title: "Placements Achievements",
      items: [
        {
          id: "pl1",
          name: "Shama Shayed",
          role: "AI Developer @ DigiTod Technologies",
          batch: "One Solutions . June 2022",
          college: "Government Engineering College",
          company: "Wipro",
          package: "3.5 LPA",
          feedback:
            "I am glad to share that I got placed through One Solutions with a package of 3.5 LPA. The constant support, mock interviews, and practical training provided by the institute helped me gain confidence and improve my skills.",
        },
        {
          id: "pl2",
          name: "Ravi Kumar",
          role: "Software Engineer @ Infosys",
          batch: "Full Stack Dev . Aug 2022",
          college: "VCET",
          company: "Infosys",
          package: "4.2 LPA",
          feedback:
            "The training and hands-on projects really boosted my confidence and helped me land my dream job.",
        },
      ],
    },
  };
  return (
    <div>
      
       <div className="broKod-container">
        <div className="broKod-container-text">
          <h4>{homeData.brokod.title}</h4>
          <p>{homeData.brokod.description}</p>
          <button>Chat with BroKod</button>
        </div>
        <img src={homeData.brokod.image} alt="BroKod" />
      
       </div>

      
      <h1>{homeData.liveClasses.title}</h1>
      <div className="live">
        {homeData.liveClasses.items.map((item) => (
          <div key={item.id} className="liveclasses-container">
            <div className="indicator-bar"></div>
            <div className="information">
              <div className="class-info">
                <button className="letter-tag">{item.letter}</button>
                <div className="class-text">
                  <h3>{item.name}</h3>
                  <p>Mentor: {item.mentor}</p>
                </div>
                <button className="status upcoming">
                  <i className="bi bi-stopwatch" style={{ marginRight: "8px" }}></i>
                  {item.status}
                </button>
              </div>
              <div className="progress-time">
              <div className="row">
                <p>Progress</p>
                <p className="highlight">{item.progress}</p>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: item.progress }}>
                 </div>
              </div>
              <div className="row highlights">
                <p>Class Time</p>
                <p>{item.time}</p>
              </div>
            </div>
            <div className="actions">
                <p><i className="bi bi-question-circle" style={{ marginRight: "8px" }}></i>
                  Help Desk</p>
                <p><i className="bi bi-box-arrow-right" style={{ marginRight: "8px" }}></i>
                  Join Class</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <h1>{homeData.selfPaced.title}<i className="bi bi-question-circle"
          style={{ marginRight: "8px", padding: "10px" }}></i></h1>
          <div className="live">
        {homeData.selfPaced.items.map((course) => (
          <div key={course.id} className="liveclasses-container">
            <div
              className="indicator-bar"
              style={{ backgroundColor: "#0e027eff" }}>
              </div>
              <div className="information">
               <div className="class-info">
                <button className="letter-tag">{course.letter}</button>
              <div className="class-text">
                <h3>{course.name}</h3>
                <p>Mentor: {course.mentor}</p>
              </div>
              <button className="status upcoming"
                style={{ display: "flex", justifyContent: "center" }}>
                {course.type}
              </button>
            </div>
            <div className="progress-time">
              <div className="row">
                <p>Progress</p>
                <p className="highlight">{course.progress}</p>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: course.progress }}>
                 </div>
              </div>
              <div className="row highlights">
                <p>Course Type</p>
                <p>{course.type}</p>
              </div>
            </div>
            <div className="actions">
           <p> <i className="bi bi-file-break" style={{ marginRight: "8px" }}></i>
            View Syllabus
          </p>
          <p><i className="bi bi-play-circle" style={{ marginRight: "8px" }}></i>
              Continue
            </p>
            </div>
          </div>
        </div>
      ))}
      </div>


      <h1>{homeData.practice.title}<i className="bi bi-question-circle"
          style={{ marginRight: "8px", padding: "10px" }}></i></h1>
          <div className="live">
              {homeData.practice.items.map((item) => (
                <div key={item.id} className="liveclasses-container" style={{ height: "30vh" }}>
                  <div className="information">
                    <div className="class-info"
                      style={{ backgroundColor: item.color, minHeight: "80px" }}>
                  <i className="bi bi-trophy"
                    style={{
                      backgroundColor: "white",fontSize: "15px",
                      fontWeight: "900",color: item.iconColor,
                      padding: "10px",borderRadius: "50%",
                      display: "inline-block",
                    }}></i>
                    <div className="class-text">
                    <h3>{item.title}</h3>
                    <p style={{ color: item.iconColor }}>{item.challenge}</p>
                  </div>
                  <div>
                    <h3>{item.progress}</h3>
                    <p>Progress</p>
                  </div>
                </div>
                <div className="progress-time">
                <div className="row">
                  <p>Total Problems</p>
                  <p className="highlight">{item.problems}</p>
                </div>
                <div
                  className="progress-bar-container"
                  style={{
                    backgroundColor: "#e0e0e0b0", borderRadius: "4px",height: "4px",}}>
                  <div
                    className="progress-bar-fill"
                    style={{ width: item.progress, backgroundColor: item.iconColor, height: "100%",
                      transition: "width 0.4s ease-in-out",
                    }}>
                    </div>
                </div>
              </div>
               <div className="actions" style={{ backgroundColor: "white" }}>
                  <button style={{
                      backgroundColor: "white",padding: "10px 20px",borderRadius: "5px",
                      display: "flex",border: "2px solid",alignItems: "center",cursor: "pointer",
                    }}>
                    <i className="bi bi-book" style={{ marginRight: "8px" }}></i>
                    View Problems
                  </button>
                  <button style={{
                      backgroundColor: "black",color: "white", padding: "10px 20px",
                      border: "none", borderRadius: "5px",display: "flex",
                      alignItems: "center", cursor: "pointer",
                    }}>
                    <i className="bi bi-arrow-right" style={{ marginRight: "8px" }}></i>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

          <h1>{homeData.attendance.title}<i className="bi bi-question-circle"
            style={{ marginRight: "8px", padding: "10px" }}></i>
            </h1>
            <div className="live">
        {homeData.attendance.items.map((item) => (
          <div key={item.id} className="liveclasses-container" style={{ height: "29vh" }}>
            <div className="information">
              <div className="progress-time">
                    <div className="row">
                      <p >{item.courseduration}</p>
                      <p className="highlight">{item.progress}</p>
                    </div>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{ width: item.progress }}>
                      </div>
                    </div>
                    <div className="row highlights">
                      <p>0%</p>
                      <p>100%</p>
                    </div>
                  </div>
                  <div className="actions" style={{ backgroundColor: "white", marginTop: "5px" }}>
                <div className="attendence-buttons">
                  <div className="attendence-button">
                    <button style={{ backgroundColor: "#ffffff", color: "black", boxShadow: "none" }}>
                      Total
                      <p style={{ fontWeight: "bold", color: "black", fontSize: "15px", paddingBottom: "0px" }}>
                        {item.total}
                      </p>
                    </button>
                  </div>
                  <div className="attendence-button"> 
                    <button style={{ backgroundColor: "#e5e5fcde", color: "#0404c8de", borderColor: "#6f6feba6", boxShadow: "none" }}>
                      Present
                      <p style={{ fontWeight: "bold", color: "#0404c8de", fontSize: "15px", paddingBottom: "0px" }}>
                        {item.present}
                      </p>
                    </button>
                  </div>
                <div className="attendence-button">
                  <button style={{ backgroundColor: "#ffcdd271", color: "#B71C1C", borderColor: "#e9b0b0ff", boxShadow: "none" }}>
                    Absent
                    <p style={{ fontWeight: "bold", color: "#B71C1C", fontSize: "15px", paddingBottom: "0px" }}>
                      {item.absent}
                    </p>
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
          </div>

        <h1>Placements Achievements<i className="bi bi-question-circle" style={{ marginRight: "8px", padding: "10px"  }}></i></h1>
          <div className='live' style={{ height: "45vh" }}>
         <div className='liveclasses-container'>
        <div className='information'>
          <div className='class-info' style={{marginBottom: "5px",}}>
            <img src="/assets/placements.jpg" alt="BroKod" className='placementimg'/>
            <div className='class-text'>
              <h3>Shama Shayed</h3>
              <p>AI Developer @ DigiTod Technologies</p>
              <p>One Solutions . June 2022</p>
            </div>
          </div>
            <hr style={{  border: "none",  borderTop: "1px solid #ccc", width: "90%" }} />
          <div className='progress-time' style={{marginTop: "0"  }}>
            <div className='row'>
              <span className='span'>College</span>
              <p>Governement Engineering College</p>
            </div>
            <div 
              className="placed-container"
              style={{
                background: "linear-gradient(to right, #e3f2fd, #e8f5e9)",boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                display: "flex",flexDirection: "row",alignItems: "center",
                justifyContent: "space-between", padding: "6px 12px",borderRadius: "6px",marginBottom: "0"  
              }}>
              <p style={{ margin: 0, fontSize: "14px" }}>Got Placted in Wipro</p>
              <h4 style={{ margin: 0, fontSize: "16px" }}>3.5 LPA</h4>
            </div>
          </div>
          <div  className='actions' style={{ display: "flex",justifyContent: "flex-start",alignItems: "flex-start",
              padding: "10px 15px",
              backgroundColor: "transparent", 
              marginTop: "0"  
            }}>
            <p style={{ fontSize: "14px",fontWeight: "400",lineHeight: "1.6",color: "#333",margin: "0"}} >
              I am glad to share that I got placed through One Solutions with a package of 3.5 LPA. 
              The constant support, mock interviews, and practical training provided by the institute 
              helped me gain confidence and improve my skills.
            </p>
          </div>
        </div>
      </div>
      <div className='liveclasses-container'>
        <div className='information'>
          <div className='class-info' style={{marginBottom: "5px",}}>
            <img src="/assets/placements.jpg" alt="BroKod" className='placementimg'/>
            <div className='class-text'>
              <h3>Shama Shayed</h3>
              <p>AI Developer @ DigiTod Technologies</p>
              <p>One Solutions . June 2022</p>
            </div>
          </div>
            <hr style={{  border: "none",  borderTop: "1px solid #ccc", width: "90%" }} />
          <div className='progress-time' style={{marginTop: "0"  }}>
            <div className='row'>
              <span className='span'>College</span>
              <p>Governement Engineering College</p>
            </div>
            <div 
              className="placed-container"
              style={{
                background: "linear-gradient(to right, #e3f2fd, #e8f5e9)",boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                display: "flex",flexDirection: "row",alignItems: "center",
                justifyContent: "space-between", padding: "6px 12px",borderRadius: "6px",marginBottom: "0"  
              }}>
              <p style={{ margin: 0, fontSize: "14px" }}>Got Placted in Wipro</p>
              <h4 style={{ margin: 0, fontSize: "16px" }}>3.5 LPA</h4>
            </div>
          </div>
          <div className='actions' style={{ display: "flex",justifyContent: "flex-start",alignItems: "flex-start",
              padding: "10px 15px",
              backgroundColor: "transparent", 
              marginTop: "0"  
            }}>
            <p style={{ fontSize: "14px",fontWeight: "400",lineHeight: "1.6",color: "#333",margin: "0"}} >
              I am glad to share that I got placed through One Solutions with a package of 3.5 LPA. 
              The constant support, mock interviews, and practical training provided by the institute 
              helped me gain confidence and improve my skills.
            </p>
          </div>
        </div>
      </div>
      <div className='liveclasses-container'>
        <div className='information'>
          <div className='class-info' style={{marginBottom: "5px",}}>
            <img src="/assets/placements.jpg" alt="BroKod" className='placementimg'/>
            <div className='class-text'>
              <h3>Shama Shayed</h3>
              <p>AI Developer @ DigiTod Technologies</p>
              <p>One Solutions . June 2022</p>
            </div>
          </div>
            <hr style={{  border: "none",  borderTop: "1px solid #ccc", width: "90%" }} />
          <div className='progress-time' style={{marginTop: "0"  }}>
            <div className='row'>
              <span className='span'>College</span>
              <p>Governement Engineering College</p>
            </div>
            <div 
              className="placed-container"
              style={{
                background: "linear-gradient(to right, #e3f2fd, #e8f5e9)",boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                display: "flex",flexDirection: "row",alignItems: "center",
                justifyContent: "space-between", padding: "6px 12px",borderRadius: "6px",marginBottom: "0"  
              }}>
              <p style={{ margin: 0, fontSize: "14px" }}>Got Placted in Wipro</p>
              <h4 style={{ margin: 0, fontSize: "16px" }}>3.5 LPA</h4>
            </div>
          </div>
           <div className='actions' style={{ display: "flex",justifyContent: "flex-start",alignItems: "flex-start",
              padding: "10px 15px",
              backgroundColor: "transparent", 
              marginTop: "0"  
            }}>
            <p style={{ fontSize: "14px",fontWeight: "400",lineHeight: "1.6",color: "#333",margin: "0"}} >
              I am glad to share that I got placed through One Solutions with a package of 3.5 LPA. 
              The constant support, mock interviews, and practical training provided by the institute 
              helped me gain confidence and improve my skills.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Home
