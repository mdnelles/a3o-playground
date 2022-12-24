import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { FacesState } from "../../../features/faces/faces";
import { setFaces } from "../../../features/faces/facesSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { faceNames } from "../../global/constants";

export default function CPFaces(): JSX.Element {
   const dis = useAppDispatch();
   const faces: FacesState = useAppSelector((state) => state.faces);

   const handleChange = (event: any, face: string) => {
      //let face = tmp;
      console.log(event.target.checked);
      console.log(face);
      const faceNew = event.target.checked
         ? [...faces, { name: face, body: face }]
         : faces.filter((f) => f.name !== face);
      console.log(faceNew);
      dis(setFaces(faceNew));
   };
   return (
      <>
         {faceNames.map((face: string) => {
            const tmp = faces.filter((f) => f.name === face);

            return (
               <span key={face}>
                  <FormControlLabel
                     control={
                        !tmp[0] ? (
                           <Checkbox checked={false} />
                        ) : (
                           <Checkbox checked={true} />
                        )
                     }
                     label={face}
                     onChange={(event) => handleChange(event, face)}
                  />
                  <br />
               </span>
            );
         })}
      </>
   );
}
