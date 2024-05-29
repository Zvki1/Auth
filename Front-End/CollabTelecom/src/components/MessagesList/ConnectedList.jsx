/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ConnectedElement from "./ConnectedElement";
import { useState, useEffect } from "react";
import axios from "axios";



const ConnectedList = ({ freinds }) => {
  return (
    <div className="w-full px-5 pt-5 pb-3 flex flex-row items-center gap-3 overflow-x-auto">
      {freinds.length === 0 && (
        // <p className="text-gray-500">No freinds connected</p>
        <>
          <ConnectedElementSkeleton />
          <ConnectedElementSkeleton />
          <ConnectedElementSkeleton />
          <ConnectedElementSkeleton />
        </>
      )}

      {freinds.length > 0 &&
        freinds[0] &&
        freinds.map((freind, index) => (
          <ConnectedElement
            key={index}
            name={freind.username}
            freindId={freind._id}
            isOnline={freind.isOnline}
          />
        ))}
    </div>
  );
};


const ConnectedElementSkeleton = () => {
  return (
    <div className="relative min-w-14 animate-pulse">
    <div className="w-14 h-14 bg-gray-200 rounded-md"></div>
    <p className="text-center h-4 mt-2 bg-gray-200 rounded-md"></p>
  </div>
  );
}
export default ConnectedList;
