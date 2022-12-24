import React, { useEffect } from "react";
import Obj from "anim-3d-obj/dist/cjs/components/Obj";
import { useAppSelector } from "../redux/hooks";
import { ObjState } from "../features/obj/obj";
import { FacesState } from "../features/faces/faces";

export default function Playground() {
   const obj: ObjState = useAppSelector((state) => state.obj);
   const faces: FacesState = useAppSelector((state) => state.faces);

   const objProps = {
      width: obj.width,
      height: obj.height,
      depth: obj.depth,
      perspectiveOrigin: obj.perspectiveOrigin,
      perspective: obj.perspective,
      faces,
      anim1: obj.anim1,
      anim2: obj.anim2,
      global: obj.global,
      showCenterDiv: false,
   };

   useEffect(() => {
      // rebuild new object
   }, [obj.toggle]);

   return (
      <div style={{ padding: 300 }}>
         <Obj {...objProps} />
      </div>
   );
}
