import React, { Fragment } from "react";

const UploadImage = props => {

    const upload_input = {
        display: "none"
    }


//    const onChange = e =>{
//     const files = Array.from(e.target.files)
//     setImage({uploading: true })

//     const formData = new FormData()
//     files.forEach((file, i) => {
//         formData.append(i, file)
//     })

//     setImage({uploading: false, files})
//    }

// }


  
  return (
    /* generic re-usable image upload */
    <Fragment>
        <label htmlFor="single" className="btn"><b>{props.texto}</b></label>
        <input type='file' id='single' name={props.name} style={upload_input} accept="image/*" onChange={props.onChange}/>
    </Fragment>
  );
};

export default UploadImage;
