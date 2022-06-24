import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import { getallnotes } from "./api_call";
import { onValue, ref, set, child, get } from "firebase/database";
import { rtdb } from "./config";

function AllNotes() {
  const [itemData, setitemData] = useState({});
  useEffect(() => {
    const fetchdata = () => {
      return onValue(
        ref(rtdb, "/items"),
        async (snapshot) => {
          let res = {};
          res = await snapshot.val();
          console.log(res);
          setitemData(res);
        },
        {
          onlyOnce: true,
        }
      );
    };
    fetchdata();
  }, []);

  if(!itemData || Object.keys(itemData).length===0)
  return(
    <div className="container h-100 m-0 p-2 my-auto">
      <div className="text-dark font-weight-bold jumbotron">
        No Notes
      </div>
    </div>
  )

  return (
    <div className="container mt-2 bg-dark">
      {Object.keys(itemData).map((d,index)=>{
          return(
            <NoteCard noteData={itemData[d]} key={index}></NoteCard>
          )
      })}
    </div>
  );
}

export default AllNotes;
