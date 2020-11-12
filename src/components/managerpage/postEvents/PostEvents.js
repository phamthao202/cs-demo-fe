import React, { useState } from "react";
import "./PostEvents.css";
import { useSelector, useDispatch } from "react-redux";
import { menuAction } from "redux/actions";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
const PostEvents = () => {
  const [editable, setEditable] = useState(true);
  const [menuPicture, setMenuPicture] = useState("");
  const [targetMenu, setTargetMenu] = useState("");
  const dispatch = useDispatch();
  const uploadPicture = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        tags: ["menu"],
      },
      function (error, result) {
        console.log("hihihihihihihih");
        if (error) console.log("abcd ", error);
        if (result.event === "success") {
          console.log(result.info.secure_url);

          setMenuPicture(result.info.secure_url);
        }
      }
    );
  };
  const submitMenu = (e) => {
    e.preventDefault();
    if (!menuPicture) {
      toast.error("No image uploaded!");
    } else {
      let newMenu = {
        title: e.target.title.value,
        price: e.target.price.value,
        pictureUrl: menuPicture,
        category: e.target.category.value,
      };
      console.log("new menu la", newMenu);
      dispatch(menuAction.createNewMenu(newMenu));
    }
  };
  const editMenu = (e) => {
    e.preventDefault();
  };

  const submitTargetMenu = (e) => {
    e.preventDefault();

    dispatch(menuAction.getMenuByTitle(targetMenu));
  };

  return (
    <div className="managerPage-menu">
      <div className="createnewmenu-title">Creat a new event</div>
      <form onSubmit={(e) => submitMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Title</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="title"
                className="managerpage-menu-input"
                placeholder="Food name"
              ></input>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Price cung">Time</div>
            <div className="managerpage-menu-Price-input">
              <input
                required
                name="price"
                type="number"
                className="managerpage-menu-input"
                placeholder="Food Price"
              ></input>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Picture cung">Picture Url</div>
            <div className="managerpage-menu-Picture-input">
              <Button
                variant="info"
                className="managerpage-menu-input"
                onClick={uploadPicture}
                disabled={!editable}
              >
                Upload image
              </Button>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Category cung"> Description</div>
            <div className="managerpage-menu-Category-input ">
              {/* <select
                name="category"
                className="managerpage-menu-Category-food"
              >
                <option value="vegan">Vegan</option>
                <option value="starter">Starter</option>
                <option value="main dishes">Main Dishes</option>
                <option value="grilled and skewers">Grilled and Skewers</option>
                <option value="izakaya ten signature">
                  Izakaya Ten Signature
                </option>
                <option value="japanese sake and shochu">
                  Japanese Sake and Shochu
                </option>
                <option value="japanese cocktail">Japanese Cocktail</option>
                <option value="more alcohol">More Alcohol</option>
                <option value="soft drink">Soft Drink</option>
              </select> */}
              <input style={{height:"200px"}}  className="managerpage-menu-Category-food"></input>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap">
          <button type="submit" className="createMenuButton">
            Create new event
          </button>
        </div>
      </form>
      <div style={{ margin: "30px", border: "2px solid black" }}></div>
      {/* This is to EDIT MENU */}

      <div className="createnewmenu-title">Edit or Delete event</div>
      {/* Check the menu */}

      <form onSubmit={(e) => submitTargetMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Editting event</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="email"
                onChange={(e) => setTargetMenu(e.target.value)}
                className="managerpage-menu-input"
                placeholder="Target event"
              ></input>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap">
          <button type="submit" className="createMenuButton">
            Check
          </button>
        </div>
      </form>
      {/* Check the menu above */}
      <form onSubmit={(e) => editMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Title</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="title"
                className="managerpage-menu-input"
                placeholder="Food name"
              ></input>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Price cung">Time</div>
            <div className="managerpage-menu-Price-input">
              <input
                required
                name="price"
                type="number"
                className="managerpage-menu-input"
                placeholder="Food Price"
              ></input>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Picture cung">Picture Url</div>
            <div className="managerpage-menu-Picture-input">
              <Button
                variant="info"
                className="managerpage-menu-input"
                onClick={uploadPicture}
                disabled={!editable}
              >
                Upload image
              </Button>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Category cung"> Description</div>
            <div className="managerpage-menu-Category-input ">
              {/* <select
                name="category"
                className="managerpage-menu-Category-food"
              >
                <option value="vegan">Vegan</option>
                <option value="starter">Starter</option>
                <option value="main dishes">Main Dishes</option>
                <option value="grilled and skewers">Grilled and Skewers</option>
                <option value="izakaya ten signature">
                  Izakaya Ten Signature
                </option>
                <option value="japanese sake and shochu">
                  Japanese Sake and Shochu
                </option>
                <option value="japanese cocktail">Japanese Cocktail</option>
                <option value="more alcohol">More Alcohol</option>
                <option value="soft drink">Soft Drink</option>
              </select> */}
               <input style={{height:"200px"}} className="managerpage-menu-Category-food"></input>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap d-flex flex-column align-items-center">
          <button type="submit" className="createMenuButton m-3">
            Edit event
          </button>
          <button type="submit" className="createMenuButton">
            Delete event
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEvents;
