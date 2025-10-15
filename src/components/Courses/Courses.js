import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";
const coursesData = {
  inprogress: [
    {
      id: 1,
      title: "Python - July (24)",
      mentor: "Ayunsh B",
      startDate: "July 1, 2024",
      type: "Academic",
      progress: 99,
      modules: [
        {
          name: "Introduction to Python",
          topic: [
            "Programming with Python",
            "Programming with Python | Cheat Sheet",
            "MCQ Practice",
            "Variables and Data Types",
            "Variables and Data Types | Cheat Sheet",
            "MCQ Practice",
            "Sequence of Instructions",
            "Sequence of Instructions | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "I/O Basics",
          topic: [
            "Input and Output Basics",
            "Input and Output Basics | Cheat Sheet",
            "MCQ Practice",
            "Type Conversion",
            "Type Conversion | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Operators & Conditional Statements",
          topic: [
            "Relational Operators",
            "Relational Operators | Cheat Sheet",
            "MCQ Practice",
            "Logical Operators",
            "Logical Operators | Cheat Sheet",
            "MCQ Practice",
            "Conditional Statements",
            "Conditional Statements | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Nested Conditions",
          topic: [
            "Nested Conditional Statements",
            "Nested Conditional Statements | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Loops",
          topic: [
            "Loops",
            "Loops | Cheat Sheet",
            "MCQ Practice",
            "For Loop",
            "For Loop | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Loop Control Statements",
          topic: [
            "Nested Loops",
            "Nested Loops | Cheat Sheet",
            "MCQ Practice",
            "Loop Control Statements",
            "Loop Control Statements | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Comparing Strings & Naming Variables",
          topic: [
            "Comparing Strings & Naming Variables",
            "Comparing Strings & Naming Variables | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Lists",
          topic: [
            "Lists",
            "Lists | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Functions",
          topic: [
            "List & Strings",
            "List & Strings | Cheat Sheet",
            "MCQ Practice",
            "Functions",
            "Functions | Cheat Sheet",
            "MCQ Practice",
            "Function Arguments",
            "Function Arguments | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Recursion",
          topic: [
            "Built-in Functions",
            "Built-in Functions | Cheat Sheet",
            "MCQ Practice",
            "Function Call Stack & Recursion",
            "Function Call Stack & Recursion | Cheat Sheet",
            "MCQ Practice",
            "List Methods",
            "List Methods | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Tuples & Sets",
          topic: [
            "Tuples & Sequences",
            "Tuples & Sequences | Cheat Sheet",
            "MCQ Practice",
            "Sets",
            "Sets | Cheat Sheet",
            "MCQ Practice",
            "Set Operations",
            "Set Operations | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Dictionaries",
          topic: [
            "Nested Lists & String Formatting",
            "Nested Lists & String Formatting | Cheat Sheet",
            "MCQ Practice",
            "Dictionaries",
            "Dictionaries | Cheat Sheet",
            "MCQ Practice",
            "Working with Dictionaries",
            "Working with Dictionaries | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Introduction to Object Oriented Programming",
          topic: [
            "Introduction to Object Oriented Programming",
            "Introduction to Object Oriented Programming | Cheat Sheet",
            "MCQ Practice",
            "Object Oriented Programming",
            "Object Oriented Programming | Cheat Sheet",
            "MCQ Practice",
            "Classes & Objects",
            "Classes & Objects | Cheat Sheet",
            "MCQ Practice",
            "Attribute Methods",
            "Attribute Methods | Cheat Sheet",
            "MCQ Practice",
            "Inheritance Part1",
            "Inheritance Part1 | Cheat Sheet",
            "MCQ Practice",
            "Inheritance Part2",
            "Inheritance Part2 | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Miscellaneous Topics",
          topic: [
            "Python Standard Library",
            "Python Standard Library | Cheat Sheet",
            "MCQ Practice",
            "Scope & Namespaces",
            "Scope & Namespaces | Cheat Sheet",
            "MCQ Practice",
            "Errors & Exceptions",
            "Errors & Exceptions | Cheat Sheet",
            "MCQ Practice",
            "Dates & Time",
            "Dates & Time | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Revision",
          topic: [
            "Python Summary Cheat Sheet - 1",
            "Python Summary Cheat Sheet - 2",
            "Python Summary Cheat Sheet - 3",
            "Python Summary Cheat Sheet - 4"
          ]
        }
      ]

    },
    {
      id: 2,
      title: "Static Website: HTML CSS & Bootstrap ",
      mentor: "Ayunsh B",
      startDate: "July 1, 2024",
      type: "Academic",
      progress: 30,
      modules: [
        {
          name: "Introduction to HTML & CSS",
          topic: [
            "Introduction to HTML",
            "Introduction to HTML | Cheat Sheet",
            "MCQ Practice",
            "Introduction to CSS Prat 1",
            "Introduction to CSS Prat 1 | Cheat Sheet",
            "MCQ Practice",
            "Introduction to CSS Prat 2",
            "Introduction to CSS Prat 2 | Cheat Sheet",
            "MCQ Practice",
            "Introduction to CSS Prat 3",
            "Introduction to CSS Prat 3 | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "CSS Box Model",
          topic: [
            "Introduction to CSS Box Model Part 1",
            "Introduction to CSS Box Model Part 1 | Cheat Sheet",
            "MCQ Practice",
            "Introduction to CSS Box Model Part 2",
            "Introduction to CSS Box Model Part 2 | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Bootstrap",
          topic: [
            "Introduction to Bootstrap Part 1",
            "Introduction to Bootstrap Part 1 | Cheat Sheet",
            "MCQ Practice",
            "Introduction to Bootstrap Part 2",
            "Introduction to Bootstrap Part 2 | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Developing Layouts",
          topic: [
            "Favourite Places Section",
            "Favourite Places Section | Cheat Sheet",
            "MCQ Practice",
            "Approach to Develop a Layout",
            "Approach to Develop a Layout | Cheat Sheet",
            "MCQ Practice",
            "Favourite Place Detailed View Section",
            "Favourite Place Detailed View Section | Cheat Sheet",
            "MCQ Pratice",
          ]
        },
        {
          name: "Website Integration",
          topic: [
            "Website Integration Part 1",
            "Website Integration | Cheat Sheet",
            "MCQ Practice",
            "Website Integration Part 2",
            "Website Integration Part 2 | Cheat Sheet",
            "MCQ Practice",
            "Website : Behind the Scenes",
            "MCQ Pratice",
            "HTML Hyperlinks",
            "HTML Hyperlinks | Cheat Sheets",
            "MCQ Pratice",
            "On-Demand Session",
            "On-Demand Session | Cheat Sheets",
            "MCQ Pratice",

          ]
        },
        {
          name: "Revision",
          topic: [
            "Static Summary CheatSheet",
          ]

        },
        {
          name: "Assignments",
          topic: [
            "MCQ Assignment 1",
            "MCQ Assignment 2",
            "MCQ Assignment 3",
            "MCQ Assignment 4",
            "MCQ Assignment 5",

          ]
        }
      ]

    },
    {
      id: 3,
      title: "Responsive Website: HTML CSS & Bootstrap ",
      mentor: "Ayunsh B",
      startDate: "July 1, 2024",
      type: "Academic",
      progress: 30,
      modules: [
        {
          name: "Responsive Web Design & BootStrap Grid System",
          topic: [
            "Introduction to Responsive Web Design",
            "Introduction to Responsive Web Design | Cheat Sheet",
            "MCQ Practice",
            "BootStrap Grid System Part 1",
            "BootStrap Grid System Prat 1 | Cheat Sheet",
            "MCQ Practice",
            "BootStrap Grid System Part 2",
            "BootStrap Grid System Part 2 | Cheat Sheet",
            "MCQ Practice",
            "BootStrap Navbar",
            "BootStrap Navbar | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "CSS Building Blocks",
          topic: [
            "CSS Selectors & Inheritance",
            "CSS Selectors & Inheritance | Cheat Sheet",
            "MCQ Practice",
            "CSS Specificity & Cascade",
            "CSS Specificity & Cascade | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Developing Layouts",
          topic: [
            "Banner Section",
            "Banner Section | Cheat Sheet",
            "MCQ Practice",
            "Why Choose us? Section",
            "Why Choose us? Section | Cheat Sheet",
            "MCQ Practice",
            "Explore New Section",
            "Explore New Section | Cheat Sheet",
            "MCQ Practice",
            "Healthy Food, Delivery and Payment, Thanking Customers Section",
            "Healthy Food, Delivery and Payment, Thanking Customers Section | Cheat Sheet",
            "MCQ Practice",
          ]
        },
        {
          name: "Developing Layouts 2",
          topic: [
            "Follow Us Section & More Styling",
            "Follow Us Section & More Styling | Cheat Sheet",
            "MCQ Practice",
            "CSS Gradients & More BootStrap Components",
            "CSS Gradients & More BootStrap Components | Cheat Sheet",
            "MCQ Practice",

          ]
        },
        {
          name: "Developing Layouts Pratice",
          topic: [
            "Codding Pratice 1",
            "Codding Pratice 2",

          ]
        },
        {
          name: "Revision",
          topic: [
            "Responsive Summary CheatSheet",
          ]

        },
        {
          name: "Assignments",
          topic: [
            "MCQ Assignment 1",
            "MCQ Assignment 2",
            "MCQ Assignment 3",
            "MCQ Assignment 4",
            "MCQ Assignment 5",

          ]
        }
      ]

    },
    {
      id: 4,
      title: "Dynamic Web Application : HTML CSS & JavaScript",
      mentor: "Ayunsh B",
      startDate: "July 1, 2024",
      type: "Academic",
      progress: 99,
      modules: [ 
      {
        name : "Introduction to JS & Variables",
        topic : [
          "Introduction to Dynamic Web Applications",
          "Introduction to Dynamic Web Applications | Cheat Sheet",
          "MCQ Practice - Intro_Dynamic  Web App",
          "DOM and Event Fundamentals",
          "DOM and Event Fundamentals | Cheat Sheet",
          "MCQ Pratice - DOM Event Fund",
          "Primitive Types & Conditionals",
          "Primitive Types & Conditionals | Cheat Sheet",
          "MCQ Pratice - Primitive Types",
          "Input Element and Math Functions",
          "Input Element and Math Functions | Cheat Sheet",
          "MCQ Pratice - Input Elements",
        ]
      },
      { name : "Arrays and Objects",
        topic : [
          "Arrays & More DOM Manipulations",
          "Arrays & More DOM Manipulations | Cheat Sheet",
          "MCQ Pratice - Array & DOM",
          "Objects",
          "Objects | Cheat Sheet",
          "MCQ Pratice - Objects",
        ]
      },
      {
        name : "Todos Application",
        topic : [
           "Todos Application Introduction",
            "Todos Application | Part 1",
            "Todos Application | Cheat Sheet",
            "MCQ Pratice - Todos App",
            "On-Demand Session",
            "On-Demand Session | Cheat Sheet",
            "MCQ Pratice - On-Demand Session",
            "Todos Application | Part 2",
            "Todos Application | Part 2 | Cheat Sheet",
            "MCQ Pratice - Todos App 2",
        ]
      },
      {
        name : "Todos Application 2",
        topic : [
           "Todos Application | Part 3",
            "Todos Application | Part 3 | Cheat Sheet",
            "MCQ Pratice - Todos App 3",
            "Todos Application | Part 4",
            "Todos Application | Part 4 | Cheat Sheet",
            "MCQ Pratice - Todos App 4",
        ]
      },
       {
        name : "Todos Application 5",
        topic : [
           "Todos Application | Part 5",
            "Todos Application | Part 5 | Cheat Sheet",
            "MCQ Pratice - Todos App 5",
            "Array Methods | Pratice 1",
            "Array Methods | Pratice 2",
            "Array Methods | Pratice 3",
            
        ]
      },
      {
        name : "Todos Application 6",
        topic : [
           "Todos Application | Part 6",
            "Todos Application | Part 6 | Cheat Sheet",
            "MCQ Pratice - Todos App 6",
        ]
      },
      {
        name : "Fetch & Callbacks",
        topic : [
          "Callbacks & Schedulers",
          "Callbacks & Schedulers | Cheat Sheet",
          "MCQ Pratice - Callbacks & Schedulers",
          "Event Listeners & More Events",
          "Event Listeners & More Events | Cheat Sheet",
          "MCQ Pratice - Event Listeners",
        ]
      }, 
      {
        name : "Forms",
        topic : [
          "Forms",
          "Forms | Cheat sheet",
          "MCQ Pratice - Forms",
          "Forms | Part - 2",
          "Forms | Part - 2 | Cheat sheet",
          "MCQ Pratice - Forms | Part - 2",
          

        ]
      }
     ]

    },
    {
      id: 5,
      title: "Java - July (24)",
      mentor: "Ayunsh B",
      startDate: "July 1, 2024",
      type: "Academic",
      progress: 30,
      modules: [
        { name: "Programming with Python" },
        { name: "I/O Basics" },
        { name: "Operators & Conditional Statements" },
        { name: "Nested Conditions" },
        { name: "Loops" },
        { name: "Comparing Strings & Naming Variables" },
        { name: "Lists" },
        { name: "Functions" },
        { name: "Recursion" },
        { name: "Tuples & Sets" },
        { name: "Dictionaries" },
        { name: "Introduction to Object Oriented Programming" },
        { name: "Miscellaneous Topics" },
        { name: "Revision" }
      ]

    }
  ],
  completed: [],
  upcoming: [],
};

const Courses = () => {
  const [active, setActive] = useState("inprogress");
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const [completedSubtopics, setCompletedSubtopics] = useState({});
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("All");

  const navigate = useNavigate();
  const currentCourses = coursesData[active];

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedModule(null);
  };

  const toggleModule = (moduleName) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  const handleSubtopicClick = (moduleName, subtopic) => {
    setCompletedSubtopics((prev) => ({
      ...prev,
      [moduleName]: { ...prev[moduleName], [subtopic]: true },
    }));
    setSelectedSubtopic(subtopic);
    navigate(`/subtopics/${encodeURIComponent(subtopic)}`);
  };

  const getSubtopicContent = (subtopic) => {
    return <p>Content for {subtopic}</p>;
  };

  return (
    <div className="courses-container">
      {/* Course Tabs */}
      <div className="courses-information">
        <p
          className={active === "inprogress" ? "active" : ""}
          onClick={() => setActive("inprogress")}
        >
          Inprogress{" "}
          <button style={{ backgroundColor: "#f4cb3ade" }}>
            {currentCourses.length}
          </button>
        </p>
        <p
          className={active === "completed" ? "active" : ""}
          onClick={() => setActive("completed")}
        >
          Completed <button style={{ backgroundColor: "#3cb371" }}>0</button>
        </p>
        <p
          className={active === "upcoming" ? "active" : ""}
          onClick={() => setActive("upcoming")}
        >
          Upcoming <button style={{ backgroundColor: "#87cefa" }}>0</button>
        </p>
      </div>

      {/* Course Filter */}
      <div className="drop-down">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="Courses" disabled>
            Courses
          </option>
          <option value="All">All</option>
          <option value="Academic">Academic</option>
          <option value="Master Classes">Master Classes</option>
        </select>
      </div>

      {/* No Courses Message */}
      {currentCourses.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <img
            src="/assets/nocourse.png"
            alt="No course found"
            style={{ width: "250px", marginBottom: "20px" }}
          />
          <h3>No courses found</h3>
          <p>You don't have any courses.</p>
        </div>
      ) : (
        currentCourses.map((course) => (
          <div className="courses" key={course.id}>
            {/* Course Header */}
            <div className="couses-and-status">
              <h4>{course.title}</h4>
              <button>
                <span>.</span> In Progress
              </button>
            </div>

            {/* Mentor / Start Date / Type / Progress */}
            <div className="mentor-progress">
              <img
                src="/assets/placements.jpg"
                alt="BroKod"
                className="placementimg"
              />
              <div className="mentor-name">
                <p>Mentor</p>
                <p className="mentor">{course.mentor}</p>
              </div>
              <div className="mentor-name">
                <p>Start Date</p>
                <p className="mentor">{course.startDate}</p>
              </div>
              <div className="mentor-name">
                <p>Course</p>
                <p className="mentor">{course.type}</p>
              </div>
              <div className="progress-section">
                <p>{course.progress}%</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Expand Modules Button */}
            <div className="active-module">
              <button onClick={() => toggleCourse(course.id)}>
                {expandedCourse === course.id ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>}
              </button>
              <p onClick={() => toggleCourse(course.id)}>Active Modules</p>
            </div>
 

            {/* Modules */}
            {expandedCourse === course.id && (
              <div className="module-details">
                {course.modules.map((module) => {
                  const subtopics = module.topic || [];
                  const isExpanded = expandedModule === module.name;

                  // Calculate module progress based on completed subtopics
                  const completedCount = subtopics.filter(
                    (sub) => completedSubtopics[module.name]?.[sub]
                  ).length;
                  const progressPercent = subtopics.length
                    ? (completedCount / subtopics.length) * 100
                    : 0;
                  const isModuleCompleted = progressPercent >= 100;

                  return (
                    <div
                      className={`module-container ${isExpanded ? "expanded" : ""}`}
                      key={module.name}
                    >
                      <div
                        className="module-single-div"
                        onClick={() => toggleModule(module.name)}
                      >
                        {/* Timeline Column */}
                        <div className="timeline">
                          <div className="circle-row module-circle-row">
                            <div
                              className={`circle module-circle ${isModuleCompleted ? "completed" : ""}`}
                              style={{ "--progress": `${progressPercent}%` }}
                            >
                              {isModuleCompleted ? "✓" : ""}
                            </div>
                          </div>

                          {isExpanded && (
                            <>
                              {subtopics.map((subtopic, index) => (
                                <div
                                  className="circle-row subtopic-circle-row"
                                  key={`${subtopic}-${index}`}
                                >
                                  <div
                                    className={`circle subtopic-circle ${completedSubtopics[module.name]?.[subtopic]
                                        ? "completed"
                                        : ""
                                      }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSubtopicClick(module.name, subtopic);
                                    }}
                                  >
                                    {completedSubtopics[module.name]?.[subtopic]
                                      ? "✓"
                                      : ""}
                                  </div>
                                </div>
                              ))}
                              {subtopics.length > 0 && (
                                <div className="vertical-line"></div>
                              )}
                            </>
                          )}
                        </div>

                        {/* Content Column */}
                        <div className="content-area">
                          <div className="module-header-row">
                            <div className="topic-label">
                              <h6>TOPIC</h6>
                            </div>
                            <div className="module-title">
                              <h5>{module.name}</h5>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="subtopics-section">
                              {subtopics.map((subtopic, index) => (
                                <div
                                  className="subtopic-content-row"
                                  key={subtopic}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubtopicClick(module.name, subtopic);
                                  }}
                                >
                                  <span className="subtopic-text">{subtopic}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Side Lesson Content */}
                      {isExpanded && selectedSubtopic && (
                        <div className="lesson-content">
                          {getSubtopicContent(selectedSubtopic)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Courses;