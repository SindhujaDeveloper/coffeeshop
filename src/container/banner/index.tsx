import {
  Button,
  Image,
  // Table,
  // Container,
  // Dropdown,
  // ButtonGroup,
  // Form,
} from "react-bootstrap";
import CarouselPageImage from "../../assets/images/carousel.svg";
import "../../assets/css/banner.scss";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import moment from "moment";

export default function BannerPage() {
  // const userDetails = useSelector((state: any) => state.login.userDetails);

  // const dropdownItems = ["Expresso", "Sandwich", "Snacks"];

  // const [personCount, setPersonCount] = useState(1);
  // const [selectedDate, setSelectedDate] = useState(
  //   moment().format("YYYY-MM-D")
  // );
  // const [dropdownItem, setDropDownItem] = useState(dropdownItems[0]);

  // function handleInputChange(inputValue: string) {
  //   const numericValue = inputValue.replace(/[^0-9]/g, "");
  //   const parsedValue = parseInt(numericValue, 10);
  //   if (isNaN(parsedValue)) {
  //     setPersonCount(0);
  //   } else {
  //     setPersonCount(parsedValue);
  //   }
  // }

  function scrollToTarget(id: string) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling behavior
        block: "start", // Scroll to the top of the element
        inline: "nearest", // Align the element to the nearest edge of the viewport
      });
    }
  }

  return (
    <div className="head-text">
      <div className="head-image">
        <Image src={CarouselPageImage} className="banner_image" />
        <div className="background"></div>
        <div className="text-on-image">
          <p className="text">
            {" "}
            A cup of coffee lasts only a moment, but it is that moment that
            makes your day better.{" "}
          </p>
          <Button
            variant="light"
            className="bannerBtn"
            id="booknow"
            onClick={() => scrollToTarget("menu")}
          >
            <p className="bannerBtnTxt">See Menu</p>
          </Button>
        </div>
      </div>
      {/* <div className="bannerBottomBox">
        <Table bordered>
          <tbody>
            <tr
              style={{
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                textAlign: "center",
              }}
            >
              <td style={{ borderLeftColor: "transparent" }}>Name</td>
              <td>Phone</td>
              <td>Category</td>
              <td>Attendance</td>
              <td style={{ borderRightColor: "transparent" }}>
                {"Date & Time"}
              </td>
            </tr>
            <tr
              style={{
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                textAlign: "center",
                paddingTop: "20px",
              }}
            >
              <th style={{ borderLeftColor: "transparent" }}>
                {userDetails?.Firstname || "Prema"}
              </th>
              <th>{userDetails?.Mobileno || "7868049366"}</th>
              <th className="col-2">
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle
                    className="categoryDropdown"
                    id="dropdown-basic"
                  >
                    {dropdownItem}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {dropdownItems.map((it, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setDropDownItem(it)}
                        >
                          {it}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th className="col-3">
                <input
                  type="text"
                  className="col-2 validCount personCount is-invalid"
                  value={personCount}
                  pattern="[0-9]*"
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInputChange(e.target.value);
                  }}
                />
                {personCount > 1 ? " Persons" : " Person"}
                {personCount < 1 ? (
                  <div className="invalid-feedback">
                    {"enter atleast one person"}
                  </div>
                ) : null}
              </th>
              <th
                style={{ borderRightColor: "transparent" }}
                className="dateAndTime col-3"
              >
                <Form.Control
                  type="date"
                  className="col-2 personCount"
                  value={selectedDate}
                  onChange={(event: any) => {
                    console.log(event.target.value);
                    setSelectedDate(event.target.value);
                  }}
                />
                {/* <input
                    className="col-5 personCount is-invalid"
                    value={selectedDate}
                    onChange={(event) => {
                      console.log(event.target.value);
                      setSelectedDate(event.target.value);
                    }}
                  /> */}
              {/* </th>
            </tr>
          </tbody>
        </Table>
        <div className="bookNow">
          <Button variant="light" className="bannerBtn">
            <p className="bannerBtnTxt">Book Now</p>
          </Button>
        </div>
      </div> */} 
    </div>
  );
}
