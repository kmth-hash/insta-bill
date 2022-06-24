/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getID, addNewEntry } from "./api_call";
import { useNavigate } from "react-router-dom";

function ReadForm() {
  let navigateTo = useNavigate();
  const [flag, setflag] = useState({
    size: false,
    thickness: false,
    frame: false,
    qty: false,
  });
  const initState = {
    orderNo: "",
    orderDate:
      new Date().getFullYear() +
      "-" +
      ("00" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + new Date().getDate()).slice(-2),
    studio: "",
    place: "",
    mobile: "",
    size: "",
    thickness: "",
    qty: "",
    frame: "",
    lam: "",
    deliveryDate: "",
    term: "",
    photo: "",
    code: "",
  };

  const terms = [
    { value: "Cash", label: "Cash" },
    { value: "Credit", label: "Credit" },
  ];
  const qtys = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "Custom", label: "Custom" },
  ];
  const lams = [
    { value: "Glass", label: "Glass" },
    { value: "Matte", label: "Matte" },
    { value: "Glitter", label: "Glitter" },
    { value: "Canvas", label: "Canvas" },
    { value: "None", label: "None" },
  ];
  const codes = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
    { value: "G", label: "G" },
    { value: "H", label: "H" },
    { value: "I", label: "I" },
    { value: "J", label: "J" },
    { value: "K", label: "K" },
    { value: "L", label: "L" },
    { value: "M", label: "M" },
    { value: "N", label: "N" },
    { value: "O", label: "O" },
    { value: "P", label: "P" },
    { value: "Q", label: "Q" },
    { value: "R", label: "R" },
    { value: "S", label: "S" },
    { value: "T", label: "T" },
  ];
  const sizes = [
    { value: "4x6", label: "4x6" },
    { value: "5x7", label: "5x7" },
    { value: "6x8", label: "6x8" },
    { value: "6x9", label: "6x9" },
    { value: "8x10", label: "8x10" },
    { value: "8x12", label: "8x12" },
    { value: "10x12", label: "10x12" },
    { value: "12x13", label: "12x13" },
    { value: "12x14", label: "12x14" },
    { value: "12x15", label: "12x15" },
    { value: "12x16", label: "12x16" },
    { value: "12x18", label: "12x18" },
    { value: "Custom", label: "Custom" },
  ];
  const thicknesses = [
    { value: "0.50", label: "0.50" },
    { value: "0.75", label: "0.75" },
    { value: "1.00", label: "1.00" },
    { value: "1.25", label: "1.25" },
    { value: "1.50", label: "1.50" },
    { value: "2.00", label: "2.00" },
    { value: "2.50", label: "2.50" },
    { value: "3.00", label: "3.00" },
    { value: "Custom", label: "Custom" },
  ];
  const frames = [
    { value: "Glass", label: "Glass" },
    { value: "Fabric", label: "Fabric" },
    { value: "Lamination", label: "Lamination" },
    { value: "Custom", label: "Custom" },
  ];
  const photos = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const handleStuff = (key,e)=>{
    console.log(key , e.value);
    if(e.value==='Custom')
    {
      setflag({...flag , [key] : true});
      setitem({...item, [key] : ''});
    }
    
  }
  const handleSubmit = (e) => {
    // console.log(e);
    // e.preventDefault();
    let flag = true;
    Object.keys(item).map((v) => {
      if (!item[v]) {
        flag = false;
      }
    });
    if (flag === false) {
      alert("Missing details. Please fill all the fields");
    } else {
      // console.log(item);
      addNewEntry(item);
      alert("Item Added");
      navigateTo("/", { replace: true });
    }
  };

  const [item, setitem] = useState(initState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getID();
      setitem({ ...item, orderNo: res });
    };
    fetchData();

    return () => {
      // console.log("end");
    };
  }, []);

  useEffect(() => {
    console.log(item);
    // return () => {
    //   second
    // }
  }, [item]);

  useEffect(() => {
    console.log(flag);
    // return () => {
    //   second
    // }
  }, [flag]);

  return (
    <div className="jumbotron m-3 text-dark ">
      <div className="d-flex row ">
        <div className="col-6 border d-flex flex-column pt-1">
          <h6 className="row-12">Order No :</h6>
          <h4 className="row-12">{item.orderNo}</h4>
        </div>
        <div className="col-6 border d-flex pt-1 flex-column">
          <h6 className="row-12">Date :</h6>
          <h4 className="row-12">{item.orderDate}</h4>
        </div>

        <div className="col-12 pt-1">
          <label htmlFor="studio" className="col-12 text-left pl-0">
            Studio/Party
          </label>
          <input
            type="text"
            className="form-control col-12"
            onChange={(e) => {
              setitem({ ...item, studio: e.target.value });
            }}
            value={item.studio}
          />
        </div>
        <div className="col-12 pt-1">
          <label htmlFor="place" className="col-12 text-left pl-0">
            Place
          </label>
          <input
            type="text"
            className="form-control col-12"
            onChange={(e) => {
              setitem({ ...item, place: e.target.value });
            }}
            value={item.place}
          />
        </div>
        <div className="col-12 pt-1">
          <label htmlFor="mobile" className="col-12 text-left pl-0">
            Contact No
          </label>
          <input
            type="number"
            className="form-control col-12"
            pattern="[1-9]{10}"
            title="Enter valid Contact No"
            onChange={(e) => {
              setitem({ ...item, mobile: e.target.value });
            }}
            value={item.mobile}
          />
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="sizes" className="col-12 p-0 text-left">
            Size
          </label>
          {flag.size 
          ?
            <input type="text" className="form-control" placeholder="15x13" onChange={(e)=>{setitem({...item , size : e.target.value})}} />
          :
          <Select
          isSearchable={false}
          inputprops={{ readOnly: true }}
          options={sizes}
          value={
            item.size.trim() ? { label: item.size, value: item.size } : ""
          }
          onChange={(e) => {
            handleStuff('size' , e);
          }}
        ></Select>
          }
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="thickness" className="col-12 p-0 text-left">
            Thickness
          </label>
          {flag.thickness 
          ?
            <input type="text" className="form-control" placeholder="4.75" onChange={(e)=>{setitem({...item , thickness : e.target.value})}} />
          :
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={thicknesses}
            value={
              item.thickness.trim()
                ? { label: item.thickness, value: item.thickness }
                : ""
            }
            onChange={(e) => {
              handleStuff('thickness' , e);
            }}
          ></Select>
          }
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="frames" className="col-12 p-0 text-left">
            Frames
          </label>
          {flag.frame 
          ?
            <input type="text" className="form-control" placeholder="Custom Frame" onChange={(e)=>{setitem({...item , frame : e.target.value})}} />
          :
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={frames}
            value={
              item.frame.trim() ? { label: item.frame, value: item.frame } : ""
            }
            onChange={(e) => {
              handleStuff('frame' , e);
            }}
          ></Select>
}
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="qty" className="col-12 p-0 text-left">
            Quantity
          </label>
          {flag.qty 
          ?
            <input type="text" className="form-control" placeholder="150" onChange={(e)=>{setitem({...item , qty : e.target.value})}} />
          :
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={qtys}
            value={item.qty.trim() ? { label: item.qty, value: item.qty } : ""}
            onChange={(e) => {
              handleStuff('qty' , e);
            }}
          ></Select>
}
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="lams" className="col-12 p-0 text-left">
            Lamination
          </label>
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={lams}
            value={item.lam.trim() ? { label: item.lam, value: item.lam } : ""}
            onChange={(e) => {
              setitem({ ...item, lam: e.value });
            }}
          ></Select>
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="term" className="col-12 p-0 text-left">
            Term
          </label>
          <Select
            isSearchable={false}
            options={terms}
            value={
              item.term.trim() ? { label: item.term, value: item.term } : ""
            }
            onChange={(e) => {
              setitem({ ...item, term: e.value });
            }}
          ></Select>
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="code" className="col-12 p-0 text-left">
            Code
          </label>
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={codes}
            value={
              item.code.trim() ? { label: item.code, value: item.code } : ""
            }
            onChange={(e) => {
              setitem({ ...item, code: e.value });
            }}
          ></Select>
        </div>
        <div className="col-6 pt-1">
          <label htmlFor="photo" className="col-12 p-0 text-left">
            Photo
          </label>
          <Select
            isSearchable={false}
            inputprops={{ readOnly: true }}
            options={photos}
            value={
              item.photo.trim() ? { label: item.photo, value: item.photo } : ""
            }
            onChange={(e) => {
              setitem({ ...item, photo: e.value });
            }}
          ></Select>
        </div>
        <div className="col-6 pt-1 ">
          <label htmlFor="Delivery_Date" className="col-12 text-left pl-0">
            Delivery Date
          </label>
          <input
            type="Date"
            className="form-control col-12"
            onChange={(e) => {
              setitem({ ...item, deliveryDate: e.target.value });
            }}
            value={item.deliveryDate}
          />
        </div>
        <div className="col-12 border d-flex pt-2 flex-column">
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadForm;
