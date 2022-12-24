export type AnimType = {
   border?: string;
   degreesHi?: number;
   degreesLow?: number;
   delay?: number;
   direction?: string;
   duration?: number;
   fillMode?: string;
   animationPlayState?: string;
   iterationCount?: string | number;
   name: string;
   timing?: string;
};

export interface face {
   name?: string;
   css?: string;
   body: any;
}

export interface ExampleState {
   anim1?: AnimType;
   anim2?: AnimType;
   name: string;
   width: number;
   height: number;
   depth: number;
   perspective?: number;
   perspectiveOrigin?: string;
   global: any;
   showCenterDiv: boolean;
   faces: faces[];
}

export type ExampleStateArr = ExampleState[];
