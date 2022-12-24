import React, { useRef } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { ObjState } from "../../../features/obj/obj";
import { FacesState } from "../../../features/faces/faces";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function SourceCode(): JSX.Element {
   const obj: ObjState = useAppSelector((state) => state.obj);
   const faces: FacesState = useAppSelector((state) => state.faces);
   const ref = useRef<any>("");
   const facesOnly: FacesState = faces.filter(
      (face) => !face.name.toString().includes("-")
   );

   const nl = (s: string | undefined) => {
      let st = s || " ";
      st.toString().replace(/\\n/g, " ");
      st.toString().replace(/\n/g, " ").replace(/\n/g, " ");
      return st;
   };
   const st = (s: string | object) => JSON.stringify(s);

   const copyTxt = () => {
      navigator.clipboard.writeText(code);
   };

   const loadCS = () => {
      window.open("https://codesandbox.io/s/d7btcb");
   };

   const code = `import Obj from "anim-3d-obj/dist/cjs/components/Obj";

function App() {
  // face individual styles (over rides global)
  const global = {
    css:${nl(st(obj.global.css))},
    body:${nl(st(obj.global.body))}
  };
  const anim1 = ${st(obj.anim1)};
  const anim2 = ${st(obj.anim2)};

  // face individual styles (over rides global)
  const faces = [
    ${facesOnly.map(
       (face) =>
          `{
          name:${'"' + face.name + '",'}
          css:${'"' + nl(face.css) + '",'}
          body:${'"' + face.body + '"'}
      }`
    )}
  ];

  const objProps = {
    width: ${obj.width},
    height: ${obj.height},
    depth: ${obj.depth},
    perspectiveOrigin: "${obj.perspectiveOrigin}",
    perspective: ${obj.perspective},
    faces,
    anim1,
    anim2,
    global,
    showCenterDiv: false
  };

  return (
    <div style={{ padding: 150 }}>
      <Obj {...objProps} />
      <div style={{ padding: 5 }} />
    </div>
  );
}

export default App;`;

   return (
      <>
         <Button
            variant='contained'
            startIcon={<ContentCopyIcon />}
            onClick={copyTxt}
         >
            Copy Source Code
         </Button>
         <Button
            variant='contained'
            startIcon={<LaunchIcon />}
            onClick={loadCS}
            sx={{ ml: 1 }}
         >
            Code Sandbox
         </Button>
         <Paper sx={{ p: 2, mt: 1 }}>
            <div ref={ref} style={{ overflow: "hidden" }}>
               <pre>{code}</pre>
            </div>
         </Paper>
      </>
   );
}
