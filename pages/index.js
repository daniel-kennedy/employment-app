import Head from 'next/head';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

export function StateList() {
  const states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' },
  ];
  return states.map((state) => (
    <option key={state.name} id={state.name} name={state.name}>
      {state.abbreviation} - {state.name}
    </option>
  ));
}

export default function Home() {
  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  const [state, setState] = useState({
    positionDesired: '',
    firstname: '',
    lastname: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    phone: '',
    countyResident: '',
    previouslyEmployed: '',
    convictions: '',
    convictionDescription: '',
    resume: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const [selected, setSelected] = useState(null);

  const handleChangeSelect = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(state));
  };

  // function checkForConviction() {
  //   document.getElementById('conviction-description').classList.toggle('show');
  // }

  return (
    <div>
      <Head>
        <title>County of Washington : Mobile Employment Inquiry</title>
      </Head>
      <Navbar />
      <main>
        <form onSubmit={handleSubmit}>
          <section name="personal">
            <div style={{ textAlign: 'center' }}>
              <h4 className="display-6 mb-5">Employment Inquiry</h4>
            </div>
            <div className="form-group">
              <label htmlFor="position-desired" class="form-label">
                Position / Department Desired
              </label>
              <input
                name="positionDesired"
                id="position-desired"
                type="text"
                className="form-control"
                value={state.positionDesired}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                name="firstname"
                className="form-control"
                type="text"
                value={state.firstname}
                onChange={handleInputChange}
              />
              <label htmlFor="lastname">Last name</label>
              <input
                name="lastname"
                className="form-control"
                type="text"
                value={state.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="street-address">Street Address</label>
              <textarea
                name="streetAddress"
                id="street-address"
                className="form-control"
                value={state.streetAddress}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="from-group">
              {/* City */}
              <label htmlFor="city">City</label>
              <input
                name="city"
                id="city"
                type="text"
                className="form-control"
                value={state.city}
                onChange={handleInputChange}
              />
            </div>
            {/* State */}
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                type="text"
                className="form-control"
                defaultValue="PA - Pennsylvania"
                value={state.state}
                onChange={handleInputChange}
              >
                <StateList />
              </select>
            </div>
            {/* ZIP */}
            <div className="form-group">
              <label htmlFor="zipcode">ZIP Code</label>
              <input
                name="zipcode"
                id="zipcode"
                type="text"
                className="form-control"
                value={state.zipcode}
                onChange={handleInputChange}
              />
            </div>
            <div className="from-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />

              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="form-control"
                value={state.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="county-resident">
                Washington County Resident?
              </label>
              <select
                id="county-resident"
                name="countyResident"
                className="form-control"
                value={state.countyResident}
                onChange={handleInputChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="previously-employed">
                Previously Employed By Us?
              </label>
              <select
                id="previously-employed"
                name="previouslyEmployed"
                className="form-control"
                value={state.previouslyEmployed}
                onChange={handleInputChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="convictions">
                Have You Been Convicted of a Crime, Excluding any Summary
                Traffic Offenses?
              </label>
              <Select
                defaultValue={options[1]}
                value={state.convictions}
                options={options}
                id="convictions"
                name="convictions"
                onChange={handleChangeSelect}
              />
              {/* <option value="Yes">Yes</option>
                <option value="No">No</option> */}
              {/* </select> */}
            </div>
            <div className="form-group hide" id="conviction-description">
              <label htmlFor="conviction-description">
                Conviction Description
              </label>
              <textarea
                name="convictionDescription"
                id="conviction-description"
                cols="45"
                rows="5"
                className="form-control"
                value={state.convictionDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div class="form-group mt-5">
              <label for="resumeUpload">R&eacute;sum&eacute;&nbsp;</label>
              <input type="file" class="form-control-file" id="resumeUpload" />
            </div>
            <div className="mt-5">
              <input
                className="btn"
                type="submit"
                style={{ backgroundColor: 'teal', color: 'white' }}
              />
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

const cwd = process.cwd();
console.log(cwd);
