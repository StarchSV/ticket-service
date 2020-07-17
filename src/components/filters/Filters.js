import React from "react";
import {Sort} from "./components/Sort";
import {Filter} from "./components/Filter";
import {Cost} from "./components/Cost";
import {Airline} from "./components/Airline";



export const Filters = () => {
  return (
    <>
      <h1 className='text-center'>Фильтры</h1>
      <Sort/>
      <Filter/>
      <Cost/>
      <Airline/>
    </>
  )
}