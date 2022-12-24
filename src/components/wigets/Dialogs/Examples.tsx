import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { makeid } from "../../global/utils";
import {
   ExampleState,
   ExampleStateArr,
} from "../../../features/examples/examples";
import { ObjState } from "../../../features/obj/obj";
import { setObj } from "../../../features/obj/objSlice";
import { setFaces } from "../../../features/faces/facesSlice";
import { clearDialog } from "../../../features/dialog/dialogSlice";
import { ThemeType, ThemesState } from "../../../features/themes/themes";
import { FacesState } from "../../../features/faces/faces";

export default function Examples(): JSX.Element {
   const dis = useAppDispatch();
   const examples: ExampleStateArr = useAppSelector((state) => state.examples);
   const obj: ObjState = useAppSelector((state) => state.obj);
   const faces: FacesState = useAppSelector((state) => state.faces);
   const themes: ThemesState = useAppSelector((state) => state.themes);
   const globalCss = obj.global.css || "";
   const [shape, setShape] = useState<string>(obj.name);
   const [theme, setTheme] = useState<string>(obj.theme);

   const handleShapeChange = (val: string) => {
      const focus = examples.filter((ex: ExampleState) => ex.name === val);
      const {
         name,
         width,
         depth,
         height,
         global,
         faces,
         perspective = obj.perspective,
         perspectiveOrigin = obj.perspectiveOrigin,
         anim1 = obj.anim1,
         anim2 = obj.anim2,
      } = focus[0];

      const newFaces = faces.map(function (face) {
         let thisCss =
            face.css && face.css.toString().length > 3 ? face.css : globalCss;
         return { ...face, css: thisCss };
      });

      setShape(name);

      dis(setFaces(newFaces));
      let newObj: ObjState = {
         ...obj,
         name,
         width,
         depth,
         height,
         perspective,
         perspectiveOrigin,
         global,
         anim1,
         anim2,
      };
      dis(setObj(newObj));
      dis(clearDialog());
   };

   const handleThemeChange = (val: string) => {
      const focus = themes.filter((th: ThemeType) => th.name === val);
      const { css } = focus[0];

      const newFaces = faces.map(function (face) {
         const body = face.body || face.name;
         return { ...face, css, body };
      });

      setTheme(val);
      dis(setFaces(newFaces));
      dis(clearDialog());
   };

   return (
      <>
         <Grid container>
            <Grid item xs={12} sx={{ mt: 1, minWidth: 500 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='shapes-label'>Shapes</InputLabel>
                  <Select
                     id={"id" + makeid()}
                     labelId='shapes-label'
                     label='Shapes'
                     value={shape}
                     onChange={(event) => handleShapeChange(event.target.value)}
                  >
                     {examples.map((ex) => (
                        <MenuItem key={"k" + makeid()} value={ex.name}>
                           {ex.name}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1, minWidth: 500 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='themes-label'>Color Themes</InputLabel>
                  <Select
                     id={"id" + makeid()}
                     labelId='themes-label'
                     label='Color Themes'
                     value={theme}
                     onChange={(event) => handleThemeChange(event.target.value)}
                  >
                     {themes.map((th) => (
                        <MenuItem key={"k" + makeid()} value={th.name}>
                           {th.name}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
         </Grid>
      </>
   );
}
