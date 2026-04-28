import { useState } from "react";
import Navbar from "./Navbar";

function DataForm() {
  const initialFormState = {
    name: "",
    regno: "",
    age: "",
    program: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      console.log(formData);
      const response = await fetch(
        "http://192.168.100.170:4000/api/v1/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="border max-w-10/12 mx-auto px-8 py-10 rounded-lg my-10">
        <h1 className="mb-6 text-2xl">Student Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-y-4">
            <input
              className="ring-1 ring-neutral-600 rounded-lg px-4 py-2 w-full"
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="ring-1 ring-neutral-600 rounded-lg px-4 py-2 w-full"
              type="text"
              placeholder="Registration Number (22-ARID-XXXX)"
              required
              name="regno"
              onChange={handleChange}
            />
            <select
              className="border px-3 py-1"
              name="age"
              value={formData.age}
              onChange={handleChange}
            >
              <option value="">Select Your Age</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>
            <div className="flex gap-x-6">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="program"
                  id="bscs"
                  value="BSCS"
                  checked={formData.program === "BSCS"}
                  onChange={handleChange}
                />
                <label htmlFor="bscs">BSCS</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="program"
                  id="bsse"
                  value="BSSE"
                  checked={formData.program === "BSSE"}
                  onChange={handleChange}
                />
                <label htmlFor="bsse">BSSE</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="program"
                  id="bsai"
                  value="BSAI"
                  checked={formData.program === "BSAI"}
                  onChange={handleChange}
                />
                <label htmlFor="bsai">BSAI</label>
              </div>
            </div>

            <button className="bg-amber-300 py-2 px-4 rounded-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataForm;
