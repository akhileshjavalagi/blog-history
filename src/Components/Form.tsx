// import { Button, TextField } from "@mui/material";
// import "../styles/login.css"
// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';

// const FormValue = () => {

//     const navigate:any = useNavigate();


//     interface Text {
//         title: string;
//         launchdate: string;
//         author: string;
//         image_link: string;
//         description: string;
//       }

//       const initialState: Text = {
//         title: "",
//         launchdate: "",
//         author: "",
//         image_link: "",
//         description: "",
//       };

//       const [text, setText] = useState<Text>(initialState);

//       const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = e.target;
//         setText({ ...text, [id]: value });
//       };


//     console.log(text);


//     // const submitDetails = async () => {
//     //     if(text.title.length > 0 &&
//     //     text.author.length > 0 &&
//     //     text.description.length > 0 &&
//     //     text.launchdate.length > 0 &&
//     //     text.image_link.length > 0    
//     //     ) {
//     //         fetch('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg', {
//     //             method: "POST",
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //                 "token": "akhilesh@gmail.com"
//     //             },
//     //             body: JSON.stringify(text)
//     //         })
//     //             .then(response => response.json())
//     //             .then(data => console.log(data))
//     //             .then(navigate("/"))
//     //             .catch(error => console.error(error));
//     //     }else{
//     //         alert("please fill the data");
//     //     }
//     //     // const headers = {
//     //     //       // Define your headers here
//     //     //       // key : "token",
//     //     //       token : "abc@gmail.com",
//     //     //       // Authorization: 'Bearer <token>',
//     //     //       'Content-Type': 'application/json',
//     //     //     };
//     //     //    await axios.post("http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg",{headers}, text)
//     //     //    .then(Response=>console.log("response is ",Response))
//     //     //    .then(alert("Registered successfully"))
//     //     //    .then(setText({first_name : "", last_name : "", email : "", username : "", password: ""}))

//     // }

//     const submitDetails = async (): Promise<void> => {
//         if (
//           text.title.length > 0 &&
//           text.author.length > 0 &&
//           text.description.length > 0 &&
//           text.launchdate.length > 0 &&
//           text.image_link.length > 0
//         ) {
//           fetch('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg', {
//             method: "POST",
//             headers: {
//               'Content-Type': 'application/json',
//               "token": "akhilesh@gmail.com"
//             },
//             body: JSON.stringify(text)
//           })
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .then(() => navigate("/"))
//             .catch(error => console.error(error));
//         } else {
//           alert("please fill the data");
//         }
//       };





//     return (
//         <div className="mainDiv">
//             <div className="FormDiv">
//                 <b className="mainHeading">Add New Blog</b>
//                 <div className="textFieldDiv">

//                     <TextField onChange={handleChange} className="textField" id="title" label="title" variant="outlined" />

//                     <TextField onChange={handleChange} className="textField" id="launchdate" label="launchdate" variant="outlined" />

//                     <TextField onChange={handleChange} className="textField" id="author" label="author" variant="outlined" />

//                     <TextField onChange={handleChange} type="file" className="textField" id="image_link"  variant="outlined" />

//                     <TextField onChange={handleChange} className="textField" id="description" label="description" variant="outlined" />
//                 </div>

//                 <div className="submitCancelDiv">
//                     <Button variant="contained" className="submitCancelButton">Cancel</Button>
//                     <Button  variant="contained" className="submitCancelButton" onClick={submitDetails}>Submit</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default FormValue;


import { Button, TextField } from "@mui/material";
import "../styles/login.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

interface Text {
  title: string;
  launchdate: string;
  author: string;
  image_link: string;
  description: string;
}

const initialState: Text = {
  title: "",
  launchdate: "",
  author: "",
  image_link: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000",
  description: "",
};

const FormValue = (): JSX.Element => {
  const navigate = useNavigate();
  const [text, setText] = useState<Text>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setText({ ...text, [id]: value });
  };

  const submitDetails = async (): Promise<void> => {
    if (
      text.title.length > 0 &&
      text.author.length > 0 &&
      text.description.length > 0 &&
      text.launchdate.length > 0 &&
      text.image_link.length > 0
    ) {
      fetch('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "token": "akhilesh@gmail.com"
        },
        body: JSON.stringify(text)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => navigate("/"))
        .then(() => alert("Data Upload Success"))
        .catch(error => console.error(error));
    } else {
      alert("please fill the data");
    }
  };

  return (
    <div className="mainDiv">
      <div className="FormDiv">
        <b className="mainHeading">ADD NEW BLOG</b>
        <div className="textFieldDiv">
          <TextField
            onChange={handleChange}
            className="textField"
            id="title"
            label="title"
            variant="outlined"
          />

          <TextField
            onChange={handleChange}
            className="textField"
            id="launchdate"
            type="date"
            variant="outlined"
          />

          <TextField
            onChange={handleChange}
            className="textField"
            id="author"
            label="author"
            variant="outlined"
          />

          <TextField
            // onChange={handleChange}
            type="file"
            className="textField"
            id="image_link"
            variant="outlined"
          />

          <TextField
            onChange={handleChange}
            className="textField"
            id="description"
            label="description"
            variant="outlined"
          />
        </div>

        <div className="submitCancelDiv">
          <Link to="/">
            <Button style={{ backgroundColor: "#8CC928" }} variant="contained" className="submitCancelButton">
              Cancel
            </Button>
          </Link>
          <Button
            style={{ backgroundColor: "#8CC928" }}
            variant="contained"
            className="submitCancelButton"
            onClick={submitDetails}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormValue;
