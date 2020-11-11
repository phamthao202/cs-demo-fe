import React from 'react'
import "./SalaryManagerPage.css"
import { useSelector, useDispatch } from "react-redux";
const SalaryManagerPage = () => {
    const dispatch = useDispatch();
  const submitMenu = (e) => {
    e.preventDefault();
    let newMenu = {
      title: e.target.title.value,
      price: e.target.price.value,
      pictureUrl: e.target.pictureUrl.value,
      category: e.target.category.value,
    };
    console.log("new menu la", newMenu);
    // dispatch(menuAction.createNewMenu(newMenu));
  };
    return (
        <div>
            <h3>day la trang de create salary</h3>
            <div className="createnewmenu-title">Staff list</div>
            <div>cho nay de map staff list</div>
      <form onSubmit={(e) => submitMenu(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">Staff email</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="email"
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
              <input
                required
                name="pictureUrl"
                className="managerpage-menu-input"
                placeholder="Food picture"
              ></input>
            </div>
          </div>





          {/* <div className="managerpage-menu-item">
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
                <option value="izakaya-ten signature">
                  Izakaya-Ten Signature
                </option>
                <option value="japanese sake and shochu">
                  Japanese Sake and Shochu
                </option>
                <option value="japanese cocktail">Japanese Cocktail</option>
                <option value="more alcohol">More Alcohol</option>
                <option value="soft drink">Soft Drink</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="createMenuButton-wrap">
          <button type="submit" className="createMenuButton">
            Update salary
          </button>
        </div>
      </form>
        </div>
    )
}

export default SalaryManagerPage
