import React from "react";
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const WebsiteHome = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          color: "black",
        }}
      >
        <TypeAnimation
          sequence={[
            "Frontend Developer Learning Website",
            3500,
            "Lets Start",
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          style={{
            textAlign: "center",
            fontSize: "70px",
            fontWeight: "bold",
            margin: "100px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "25PX",
        }}
      >
        <p style={{ textAlign: "center", marginTop: "-60px" }}>
          Frontend developer means you specialize in building the user interface
          and user experience of websites and web applications. <br />
          &nbsp;&nbsp;&nbsp;You work with HTML, CSS, and JavaScript to create
          interactive and visually appealing interfaces that users interact.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/website">
          <button className="bg-black text-white px-4 py-2 h-25 mt-12 rounded-md  border hover:border-solid hover:border-black  hover:text-black hover:bg-white">
            Get Started
          </button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/website">
          <button className="mt-12 bg-white border  px-4 py-2 h-25 w-25 rounded-md hover:border-black">
            Login
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default WebsiteHome;
