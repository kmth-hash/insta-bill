import React, { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import { deleteNoteByID } from "./api_call";
import { useNavigate } from "react-router-dom";

function NoteCard(noteData) {
  let navigateTo = useNavigate();
  const [note, setnote] = useState({});

  const handleDelete = () => {
    console.log("deleted");
    deleteNoteByID(note.orderNo);
    alert("Note Deleted!");
    navigateTo(0);
  };
  useEffect(() => {
    setnote(noteData.noteData);

    return () => {};
  }, []);

  return (
    <div className="container m-0 font-weight-bold">
      <div className="container border m-2 p-1 d-flex row">
        <div className="col-5 text-left">
          <label>
            <span className="font-weight-light">Order</span> : #{note.orderNo}
          </label>
        </div>
        <div className="col-5 text-left">
          <label>{note.orderDate}</label>
        </div>
        <div className="col-2 text-left p-1 ">
          <div
            className="border rounded mx-auto d-flex justify-content-center"
            style={{ color: "#F87474", width: "1.5rem", height: "1.5rem" }}
          >
            <TrashFill
              className="my-auto "
              onClick={() => {
                handleDelete();
              }}
            />
          </div>
        </div>
        <div className="col-12 text-left">
          <label>
            <span className="font-weight-light">Studio</span> : {note.studio}
          </label>
        </div>
        <div className="col-12 text-left">
          <label>
            <span className="font-weight-light">Place</span> : {note.place}
          </label>
        </div>
        <div className="col-12 text-left">
          <label>
            <span className="font-weight-light">Contact</span> : {note.mobile}
          </label>
        </div>
        <hr />
        <div className="col-4 text-left">
          <label className="font-weight-light">Lamination</label>
        </div>
        <div className="col-4 text-left">
          <label className="font-weight-light">Frames</label>
        </div>
        <div className="col-4 text-left">
          <label className="font-weight-light">Size</label>
        </div>
        <div className="col-4 text-left">
          <label>{note.lam}</label>
        </div>
        <div className="col-4 text-left">
          <label>{note.frame}</label>
        </div>
        <div className="col-4 text-left">
          <label>{note.size}</label>
        </div>
        <hr />
        <div className="col-4 text-left">
          <label>
            <span className="font-weight-light">Thickness</span>
          </label>
        </div>
        <div className="col-4 text-left">
          <label>
            <span className="font-weight-light">Pay</span>
          </label>
        </div>
        <div className="col-4 text-left">
          <label>
            <span className="font-weight-light">Code</span>
          </label>
        </div>
        <div className="col-4 text-left">
          <label>{note.thickness}</label>
        </div>
        <div className="col-4 text-left">
          <label>{note.term}</label>
        </div>
        <div className="col-4 text-left">
          <label>{note.code}</label>
        </div>
        <hr />
        <div className="col-6 text-left">
          <label>
            <span className="font-weight-light">Qty</span> : {note.qty}
          </label>
        </div>

        <div className="col-6 text-left">
          <label>
            <span className="font-weight-light">Photo</span> : {note.photo}
          </label>
        </div>
        <hr />
        <div className="col-12 text-left">
          <label>
            <span className="font-weight-light">Delivery Date</span> :{" "}
            {note.deliveryDate}
          </label>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
