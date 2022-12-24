import React, { useEffect, useRef, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
   animOptions,
   animDirOptions,
   animFillMode,
   animPlayState,
   animTiming,
   animNames,
} from "../../global/constants";
import { makeid } from "../../global/utils";
import { setObj } from "../../../features/obj/objSlice";

export default function CPAnim(): JSX.Element {
   const dis = useAppDispatch();
   const obj: any = useAppSelector((state) => state.obj);

   const [anim, setAnim] = useState<string>("anim1");
   const [animTxt, setAnimTxt] = useState(obj[anim]);
   const [direction, setDirection] = useState<string>(obj[anim].direction);
   const [fillMode, setFillMode] = useState<string>(obj[anim].fillMode);
   const [animationPlayState, setAnimationPlayState] = useState<string>(
      obj[anim].animationPlayState
   );
   const [timing, setTiming] = useState<string>(obj[anim].timing);
   const [name, setName] = useState<string>(obj[anim].name);
   const handleAnimChange = (val: string) => setAnim(val);
   const handleDirChange = (val: string) => setDirection(val);
   const handleFMChange = (val: string) => setFillMode(val);
   const handlePSChange = (val: string) => setAnimationPlayState(val);
   const handleTimingChange = (val: string) => setTiming(val);
   const handleNameChange = (val: string) => setName(val);
   const mupd = () => {
      if (anim === "anim1") dis(setObj({ ...obj, anim1: animTxt }));
      else dis(setObj({ ...obj, anim2: animTxt }));
   };

   const updAnimTxt = (val: any) =>
      setAnimTxt(typeof val === "object" ? val : JSON.parse(val));

   useEffect(() => {
      const newAnim = {
         ...obj[anim],
         direction,
         fillMode,
         animationPlayState,
         name,
         timing,
      };
      if (anim === "anim1") dis(setObj({ ...obj, anim1: newAnim }));
      else dis(setObj({ ...obj, anim2: newAnim }));
      setAnimTxt(newAnim);
   }, [direction, fillMode, animationPlayState, name, timing]);

   useEffect(() => {
      setTimeout(() => {
         setName(obj[anim].name);
         setDirection(obj[anim].direction);
         setFillMode(obj[anim].fillMode);
         setAnimationPlayState(obj[anim].animationPlayState);
         setTiming(obj[anim].timing);
      }, 100);
   }, [anim]);

   return (
      <div id={makeid()}>
         <Grid container>
            <Grid item xs={12} sx={{ mt: 1 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='anim-label'>Animation</InputLabel>
                  <Select
                     labelId='anim-label'
                     value={anim}
                     onChange={(event) => handleAnimChange(event.target.value)}
                  >
                     {animOptions.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ pb: 1, mt: 1 }}>
               <TextField
                  id={"animBody" + makeid()}
                  key={"k" + makeid()}
                  label={"ANIMATION: " + anim}
                  multiline
                  inputProps={{ style: { fontSize: 14 } }}
                  type='text'
                  rows={14}
                  fullWidth
                  onChange={(event) => updAnimTxt(event.target.value)}
                  defaultValue={JSON.stringify(animTxt, null, 4)}
               />
               <br />
               <Button
                  sx={{ mt: -3, zIndex: 30 }}
                  onClick={mupd}
                  fullWidth
                  variant='contained'
               >
                  UPDATE TEXT
               </Button>
            </Grid>
            <Grid item xs={12} sx={{ pb: 1, mt: 1 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='dir-label'>Direction</InputLabel>
                  <Select
                     id='label'
                     label='Direction'
                     value={direction}
                     onChange={(event) => handleDirChange(event.target.value)}
                  >
                     {animDirOptions.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ pb: 2, mt: 1 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='fm-label'>Fill Mode</InputLabel>
                  <Select
                     id='fm'
                     key='fillMode'
                     label='Fill Mode'
                     value={fillMode}
                     onChange={(event) => handleFMChange(event.target.value)}
                  >
                     {animFillMode.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ pb: 2, mt: 1 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='ps-label'>Play State</InputLabel>
                  <Select
                     id='ps'
                     label='Play State'
                     value={animationPlayState}
                     onChange={(event) => handlePSChange(event.target.value)}
                  >
                     {animPlayState.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ pb: 2, mt: 1 }}>
               <FormControl size='small' fullWidth component={"span"}>
                  <InputLabel id='timing-label'>Timing</InputLabel>
                  <Select
                     id='timing'
                     label='Timing'
                     value={timing}
                     onChange={(event) =>
                        handleTimingChange(event.target.value)
                     }
                  >
                     {animTiming.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ pb: 2, mt: 1 }} key={anim + makeid}>
               <FormControl
                  size='small'
                  fullWidth
                  component={"span"}
                  key={anim + "FC" + makeid}
               >
                  <InputLabel id='names-label'>Animation Name</InputLabel>
                  <Select
                     id='name'
                     key={anim + "name" + makeid}
                     label='Animation Names'
                     value={name}
                     onChange={(event) => handleNameChange(event.target.value)}
                  >
                     {animNames.map((a) => (
                        <MenuItem key={"k" + makeid()} value={a}>
                           {a}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Grid>
         </Grid>
      </div>
   );
}
