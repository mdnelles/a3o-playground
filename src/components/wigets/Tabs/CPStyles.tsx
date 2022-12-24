import React, { useEffect, useRef, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { faceNames } from "../../global/constants";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ObjState } from "../../../features/obj/obj";
import { FacesState } from "../../../features/faces/faces";
import { EditsState } from "../../../features/edits/edits";
import { setEdits } from "../../../features/edits/editsSlice";
import { setObj } from "../../../features/obj/objSlice";
import { setFaces } from "../../../features/faces/facesSlice";

export default function CPStyles(): JSX.Element {
   const dis = useAppDispatch();
   const faces: FacesState = useAppSelector((state) => state.faces);
   const obj: ObjState = useAppSelector((state) => state.obj);
   const edits: EditsState = useAppSelector((state) => state.edits);

   const [cssTxt, setCssTxt] = useState<string>(edits.css);
   const [bodyTxt, setBodyTxt] = useState<string>(edits.body);

   const upd = (event: any) => {
      console.log("UPDATE");
      event.preventDefault();
      const css = cssTxt === "-" ? edits.css : cssTxt;
      const body = bodyTxt === "-" ? edits.body : bodyTxt;
      if (edits.face === "global") {
         dis(setObj({ ...obj, global: { css, body } }));
      } else {
         dis(
            setFaces(
               faces.map((f: any) =>
                  f.name === edits.face ? { name: f.name, css, body } : f
               )
            )
         );
      }
   };

   const handleChange = (val: string | undefined): boolean => {
      dis(setEdits({ ...edits, face: val }));
      return true;
   };

   const addLineBreak = (s: string) => s.toString().replace(/;/g, ";\n");
   const removeLineBreak = (s: string) => s.toString().replace(/;\n/g, "; ");

   const cssFormatted = addLineBreak(edits.css);
   const bodyFormatted = addLineBreak(edits.body);

   useEffect(() => {
      if (edits.face === "global") {
         if (edits.body !== obj.global.body) {
            dis(
               setEdits({
                  ...edits,
                  body: obj.global.body,
                  css: obj.global.css,
               })
            );
         }
      } else {
         const tmp = faces.filter((f: any) => f.name === edits.face);
         if (tmp && tmp[0] && edits.body !== tmp[0].body) {
            dis(setEdits({ ...edits, body: tmp[0].body, css: tmp[0].css }));
         }
      }
      cssTxt === edits.css ? null : setCssTxt(edits.css);
      bodyTxt === edits.body ? null : setBodyTxt(edits.body);
   }, [edits.face, edits.css, edits.body]);

   return (
      <div>
         <FormControl
            sx={{ m: 1, minWidth: 120, pr: 3 }}
            size='small'
            fullWidth
            component={"span"}
         >
            <InputLabel id='face-label'>Face Style</InputLabel>
            <Select
               labelId='face'
               id='face'
               label='Face'
               defaultValue={" "}
               onChange={(event) => handleChange(event.target.value)}
            >
               <MenuItem value={"global"} key={"global"}>
                  {"Global Default"}
               </MenuItem>
               {faces.map((f: { name: string }) =>
                  faceNames.includes(f.name) ? (
                     <MenuItem value={f.name} key={f.name}>
                        {f.name}
                     </MenuItem>
                  ) : null
               )}
            </Select>
         </FormControl>

         <Grid container sx={{ pr: 2, pl: 1, pt: 2 }}>
            <Grid item xs={12} sx={{ pb: 2 }}>
               <TextField
                  key={"i" + edits.body}
                  id='body'
                  label='Div Body'
                  multiline
                  type='text'
                  rows={4}
                  fullWidth
                  defaultValue={bodyFormatted}
                  onChange={(event) =>
                     setBodyTxt(removeLineBreak(event.target.value))
                  }
                  onBlur={(event) =>
                     setBodyTxt(removeLineBreak(event.target.value))
                  }
               />
            </Grid>
            <Grid item xs={12} sx={{ pb: 2 }}>
               <TextField
                  key={"j" + edits.body}
                  id='css'
                  label='Div CSS'
                  multiline
                  type='text'
                  rows={10}
                  fullWidth
                  defaultValue={cssFormatted}
                  onChange={(event) =>
                     setCssTxt(removeLineBreak(event.target.value))
                  }
                  onBlur={(event) =>
                     setCssTxt(removeLineBreak(event.target.value))
                  }
               />
            </Grid>
            <Grid item xs={12}>
               {edits.face ? (
                  <Button fullWidth variant='contained' onClick={upd}>
                     Update {edits.face}
                  </Button>
               ) : (
                  <></>
               )}
            </Grid>
         </Grid>
      </div>
   );
}
