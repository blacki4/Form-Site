import "./Card.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Card() {
  // State to control popup visibility
  const [showPop, setShowPop] = useState(false);

  // User input state
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    exSalary: "",
  });

  // Error messages state
  const [errors, setErrors] = useState({});

  // Validation function for form inputs
  const validate = () => {
    const newErrors = {};

    if (userData.name.trim() === "") {
      newErrors.name = "The Name is required";
    }

    if (userData.phone.trim() === "") {
      newErrors.phone = "The Phone is required";
    } else if (!/^\d+$/.test(userData.phone)) {
      newErrors.phone = "Phone must contain numbers only";
    }

    // Validate age: must be number and >= 18
    if (!/^\d+$/.test(userData.age) || Number(userData.age) < 18) {
      newErrors.age = "Age must be a number and 18 or older";
    }

    if (userData.exSalary.trim() === "") {
      newErrors.exSalary = "The Expected Salary is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Show popup on successful submit
      setShowPop(true);

      // Reset form inputs
      setUserData({
        name: "",
        phone: "",
        age: "",
        employee: false,
        exSalary: "",
      });
    }
  };

  // Close popup when clicking outside

  const handleDivClick = () => {
    if (showPop) {
      setShowPop(false);
    }
  };

  return (
    <div onClick={handleDivClick}>
      {/* Decorative accents and lights */}
      <div className="accents">
        <div className="acc-card"></div>
        <div className="acc-card"></div>
        <div className="acc-card"></div>
        <div className="light"></div>
        <div className="light sm"></div>
        <div className="top-light"></div>
      </div>

      {/* Main card container */}
      <div className="card">
        <h1 className="title">Requesting a Job</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
          {/* Name input */}
          <div className="form__group field">
            <input
              type="text"
              id="name"
              className="form__field"
              placeholder="Name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <p className="errorMsg">{errors.name || "\u00A0"}</p>
          </div>

          {/* Phone input */}
          <div className="form__group field">
            <input
              type="text"
              id="phone"
              className="form__field"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
            <label htmlFor="phone" className="form__label">
              Phone Number
            </label>
            <p className="errorMsg">{errors.phone || "\u00A0"}</p>
          </div>

          {/* Age input */}
          <div className="form__group field">
            <input
              type="text"
              id="age"
              className="form__field"
              placeholder="Age"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
            />
            <label htmlFor="age" className="form__label">
              Age
            </label>
            <p className="errorMsg">{errors.age || "\u00A0"}</p>
          </div>

          {/* Employee checkbox */}
          <div className="checkdiv">
            <p>Are You An Employee</p>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={userData.employee}
                onChange={(e) =>
                  setUserData({ ...userData, employee: e.target.checked })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>

          {/* Expected Salary input */}
          <div className="form__group field">
            <input
              type="text"
              id="salary"
              className="form__field"
              placeholder="Expected Salary"
              value={userData.exSalary}
              onChange={(e) =>
                setUserData({ ...userData, exSalary: e.target.value })
              }
            />
            <label htmlFor="salary" className="form__label">
              Expected Salary
            </label>
            <p className="errorMsg">{errors.exSalary || "\u00A0"}</p>
          </div>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Popup displayed on successful submit */}
      <Popup isVisible={showPop} />
    </div>
  );
}
