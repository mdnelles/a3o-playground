import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setObj } from "../../../features/obj/objSlice";
import Paper from "@mui/material/Paper";
import { perspectivesX, perspectivesY } from "../../global/constants";
import { makeid } from "../../global/utils";

const max = 1500;

export default function CP3d(): JSX.Element {
   const dis = useAppDispatch();
   const obj: any = useAppSelector((state) => state.obj);
   let objper = obj.perspectiveOrigin.toString().split(" ");
   const [width, setWidth] = React.useState<any>(obj.width);
   const [height, setHeight] = React.useState<any>(obj.height);
   const [xPer, setXper] = React.useState(objper[0]);
   const [yPer, setYper] = React.useState(objper[1]);
   const [depth, setDepth] = React.useState<any>(obj.depth);
   const [perspectiveOrigin, setPerspectiveOrigin] = React.useState<any>(
      obj.perspectiveOrigin
   );
   const [perspective, setPerspective] = React.useState<any>(obj.perspective);

   const handleChangeX = (event: SelectChangeEvent) => {
      setXper(event.target.value);
      setPerspectiveOrigin(`${event.target.value} ${yPer}`);
   };
   const handleChangeY = (event: SelectChangeEvent) => {
      setYper(event.target.value);
      setPerspectiveOrigin(`${xPer} ${event.target.value}`);
   };

   const widthChange = (event: Event, newValue: number | number[]) =>
      setWidth(newValue);

   const heightChange = (event: Event, newValue: number | number[]) =>
      setHeight(newValue);

   const depthChange = (event: Event, newValue: number | number[]) =>
      setDepth(newValue);

   const perspectiveChange = (event: Event, newValue: number | number[]) =>
      setPerspective(newValue);

   useEffect(() => {
      dis(
         setObj({
            ...obj,
            width,
            height,
            depth,
            perspective,
            perspectiveOrigin,
         })
      );
   }, [width, height, depth, perspective, perspectiveOrigin]);

   return (
      <>
         <Box sx={{ m: 1 }}>
            <Typography id='width-slider' gutterBottom>
               Width
            </Typography>
            <Grid container spacing={2} alignItems='center'>
               <Grid item xs>
                  <Slider
                     value={width}
                     onChange={widthChange}
                     aria-labelledby='width-slider'
                     max={max}
                  />
               </Grid>
               <Grid item>{width}</Grid>
            </Grid>
         </Box>

         <Box sx={{ m: 1 }}>
            <Typography id='height-slider' gutterBottom>
               Height
            </Typography>
            <Grid container spacing={2} alignItems='center'>
               <Grid item xs>
                  <Slider
                     value={height}
                     onChange={heightChange}
                     aria-labelledby='height-slider'
                     max={max}
                  />
               </Grid>
               <Grid item>{height}</Grid>
            </Grid>
         </Box>

         <Box sx={{ m: 1 }}>
            <Typography id='depth-slider' gutterBottom>
               Depth
            </Typography>
            <Grid container spacing={2} alignItems='center'>
               <Grid item xs>
                  <Slider
                     value={depth}
                     onChange={depthChange}
                     aria-labelledby='depth-slider'
                     max={max}
                  />
               </Grid>
               <Grid item>{depth}</Grid>
            </Grid>
         </Box>

         <Box sx={{ m: 1 }}>
            <Typography id='perspective-slider' gutterBottom>
               Perspective
            </Typography>
            <Grid container spacing={2} alignItems='center'>
               <Grid item xs>
                  <Slider
                     value={perspective}
                     onChange={perspectiveChange}
                     aria-labelledby='perspective-slider'
                     max={max * 2}
                  />
               </Grid>
               <Grid item>{perspective}</Grid>
            </Grid>
         </Box>

         <Typography id='perspective-slider' gutterBottom>
            Perspective Origin [X,Y]
         </Typography>
         <Paper sx={{ m: 1, p: 1 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
               <InputLabel id='xPer'>X Perspecitve</InputLabel>
               <Select
                  labelId='xPer'
                  id='xPer'
                  value={xPer}
                  label='X Perspective'
                  onChange={handleChangeX}
               >
                  {perspectivesX.map((p) => (
                     <MenuItem key={"k" + makeid} value={p}>
                        {p}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </Paper>
         <Paper sx={{ m: 1, p: 1 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
               <InputLabel id='yPer'>Y Perspective</InputLabel>
               <Select
                  labelId='yPer'
                  id='yPer'
                  value={yPer}
                  label='Y Perspective'
                  onChange={handleChangeY}
               >
                  {perspectivesY.map((p) => (
                     <MenuItem key={"k" + makeid} value={p}>
                        {p}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </Paper>
      </>
   );
}
