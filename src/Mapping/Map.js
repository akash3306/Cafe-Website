import { Children } from "react";


export const Map = ({render, of})=>
Children.toArray(of.map((item,index)=>render(item,index)));