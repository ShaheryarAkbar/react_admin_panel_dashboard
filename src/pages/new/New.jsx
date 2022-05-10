import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";


const New = ({inputs, title}) => {

  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={file ? URL.createObjectURL(file)
              : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"
            }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={(e) => setFile(e.target.files[0])} 
                  style={{display: "none"}}
                />
              </div>

              {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}

              <div className="formInput">
                <button>Send</button>
              </div>

              {/* <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Shery Rao" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+92 1232123" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="paswword" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Gulshan e Iqbal" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Pakistan" />
              </div> */}

              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
