import React, { useState } from "react";
import "./MenuManagerPage.css";
import { useSelector, useDispatch } from "react-redux";
import { menuAction } from "redux/actions";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import OneDrink from "components/drinkMenu/OneDrink";
const MenuManagerPage = () => {
  const [editable, setEditable] = useState(true);
  const [menuPicture, setMenuPicture] = useState("");
  const [targetMenu, setTargetMenu] = useState("");
  const dispatch = useDispatch();
  const targetItem = useSelector((state) => state.menu.targetMenu);
  console.log("target menu", targetItem);
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
    let targetId = targetItem._id;

    let editInformation = {};
    if (e.target.title.value) editInformation.title = e.target.title.value;
    if (e.target.price.value) editInformation.price = e.target.price.value;
    if (menuPicture) editInformation.pictureUrl = menuPicture;
    if (e.target.category.value)
      editInformation.category = e.target.category.value;

    // title: e.target.title.value,
    // price: e.target.price.value,
    // pictureUrl: menuPicture,
    // category: e.target.category.value,
    dispatch(menuAction.updateMenu(editInformation, targetId));
  };

  const deleteMenu = () => {
    dispatch(menuAction.deleteMenu(targetItem._id));
  };

  const submitTargetMenu = (e) => {
    e.preventDefault();

    dispatch(menuAction.getMenuByTitle(targetMenu));
  };

  return (
    <div className="managerPage-menu">
      <div className="createnewmenu-title">Creat new menu</div>
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
            <div className="managerpage-menu-Price cung">Price</div>
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
            <div className="managerpage-menu-Category cung"> Category</div>
            <div className="managerpage-menu-Category-input ">
              <select
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
              </select>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap">
          <button type="submit" className="createMenuButton">
            Create new menu
          </button>
        </div>
      </form>
      <div style={{ margin: "30px", border: "2px solid black" }}></div>
      {/* This is to EDIT MENU */}

      <div className="createnewmenu-title">Edit or Delete menu</div>
      {/* Check the menu */}

      <form onSubmit={(e) => submitTargetMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Editting menu</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="email"
                onChange={(e) => setTargetMenu(e.target.value)}
                className="managerpage-menu-input"
                placeholder="Target menu"
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
      <div style={{ marginBottom: "30px" }}>
        {targetMenu && (
          <OneDrink
            pictureUrl={targetItem.pictureUrl}
            title={targetItem.title}
            price={targetItem.price}
          />
        )}
      </div>
      {/* Check the menu above */}
      {/* Edit menu */}
      <form onSubmit={(e) => editMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Title</div>
            <div className="managerpage-menu-title-input">
              <input
                name="title"
                className="managerpage-menu-input"
                placeholder="Food name"
              ></input>
            </div>
          </div>
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-Price cung">Price</div>
            <div className="managerpage-menu-Price-input">
              <input
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
            <div className="managerpage-menu-Category cung"> Category</div>
            <div className="managerpage-menu-Category-input ">
              <select
                name="category"
                className="managerpage-menu-Category-food"
              >
                <option value="">---</option>
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
              </select>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap d-flex flex-column align-items-center">
          <button type="submit" className="createMenuButton m-3">
            Edit menu
          </button>
          <button onClick={() => deleteMenu()} className="createMenuButton">
            Delete menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuManagerPage;
