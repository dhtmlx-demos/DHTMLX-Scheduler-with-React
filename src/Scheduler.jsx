import { useEffect, useRef } from "react";

import { Scheduler } from "@dhx/trial-scheduler";
import "@dhx/trial-scheduler/codebase/dhtmlxscheduler_material.css";

export default function SchedulerView(props) {
  let container = useRef();

  useEffect(() => {
    let scheduler = Scheduler.getSchedulerInstance();
    scheduler.init(container.current, new Date(2023, 9, 6), "week");
    scheduler.parse(props.events);

    return () => {
      scheduler.destructor();
      container.current.innerHTML = "";
    };
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100vh" }}></div>;
}
