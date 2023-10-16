import { useEffect, useRef } from "react";

import { Gantt } from "@dhx/trial-gantt";
import "@dhx/trial-gantt/codebase/dhtmlxgantt.css";

export default function GanttView(props) {
  let container = useRef();

  useEffect(() => {
    let gantt = Gantt.getGanttInstance();
    gantt.init(container.current);
    gantt.parse(props.tasks);

    return () => {
      gantt.destructor();
      container.current.innerHTML = "";
    };
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
