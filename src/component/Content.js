import React, { useEffect } from "react";
import "./Content.css";
import BottomCont from "./BottomCont";

export default function Content() {
  useEffect(() => {
    // creating parallax effect
    const missions = document.querySelectorAll(".missionItem");

    // intersectionObserver constructor is used to create an object that address the relative positions of items
    const missionObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        console.log("hello");
        const ONSCREEN = "onScreen";

        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;

          if (isIntersecting) {
            target.classList.add(ONSCREEN);
            return true;
          }
          target.classList.remove(ONSCREEN);
        });
      },
      {
        threshold: 0.5,
      }
    );

    // traversing through each missionItem
    missions.forEach((mission) => {
      missionObserver.observe(mission);
      //   target: div.background.one.missionItem
      //    isIntersecting: true
    });
  }, []);

  return (
    <div className="mission">
      <div className="missionItem background one">
        <BottomCont
          title="RECENT LAUNCH"
          Mainline="GLOBALSTAR FM15 MISSION"
          btnText="REWATCH"
        />
      </div>
      <div className="missionItem background two">
        <BottomCont
          title="RECENT LAUNCH"
          Mainline="SARAH-1 MISSION"
          btnText="REWATCH"
        />
      </div>
      <div className="missionItem background three">
        <BottomCont
          title="RECENT LAUNCH"
          Mainline="STARLINK MISSION"
          btnText="REWATCH"
        />
      </div>
      <div className="missionItem background four">
        <BottomCont title="" Mainline="STARSHIP UPDATE" btnText="LEARN MORE" />
      </div>
      <div className="missionItem background five">
        <BottomCont
          title=""
          Mainline="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
          btnText="LEARN MORE"
        />
      </div>
    </div>
  );
}
