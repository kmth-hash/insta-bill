import React , {useEffect,useState} from 'react';

function NoteCard(noteData) {
    const [note, setnote] = useState({});
    
    useEffect(() => {
      setnote(noteData.noteData);
    
      return () => {
        
      }
    }, []);
    
  return (
    <div className='container m-0 font-weight-bold'>
        <div className="container border m-2 p-1 d-flex row">
        <div className='col-6 text-left'>
            <label ><span className="font-weight-light">
                Order</span> : #{note.orderNo}</label>
        </div>
        <div className='col-6 text-left'>
            <label >{note.orderDate}</label>
        </div>
        <div className='col-12 text-left'>
            <label ><span className="font-weight-light">Studio</span> : {note.studio}</label>
        </div>
        <div className='col-12 text-left'>
            <label ><span className="font-weight-light">Place</span> : {note.place}</label>
        </div>
        <div className='col-12 text-left'>
            <label ><span className="font-weight-light">Contact</span> : {note.mobile}</label>
        </div>
        <div className='col-4 text-left'>
            <label className='font-weight-light'>Lamination</label>
        </div>
        <div className='col-4 text-left'>
            <label className='font-weight-light' >Frames</label>
        </div>
        <div className='col-4 text-left'>
            <label className='font-weight-light'>Size</label>
        </div>
        <div className='col-4 text-left'>
            <label >{note.lam}</label>
        </div>
        <div className='col-4 text-left'>
            <label >{note.frame}</label>
        </div>
        <div className='col-4 text-left'>
            <label >{note.size}</label>
        </div>
        <div className='col-8 text-left'>
            <label ><span className="font-weight-light">Thickness</span> : {note.thickness}</label>
        </div>
        <div className='col-4 text-left'>
            <label ><span className="font-weight-light">Pay</span>: {note.term}</label>
        </div>
        <div className='col-6 text-left'>
            <label ><span className="font-weight-light">Qty</span> : {note.qty}</label>
        </div>
        
        <div className='col-6 text-left'>
            <label ><span className="font-weight-light">Photo</span> : {note.photo}</label>
        </div>
        <div className='col-12 text-left'>
            <label ><span className="font-weight-light">Delivery Date</span> : {note.deliveryDate}</label>
        </div>
        </div>

    </div>
  )
}

export default NoteCard