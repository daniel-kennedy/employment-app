import Head from 'next/head';
import Navbar from '../components/Navbar';
import ReactDOM from 'react-dom';

export function submitApplication() {
  return null;
}

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
  function checkForConviction() {
    document.getElementById('conviction-description').classList.toggle('hide');
  }

  return (
    <div>
      <Head>
        <title>County of Washington : Mobile Employment Inquiry</title>
      </Head>
      <Navbar />
      <main>
        <section name="personal">
          <div style={{ textAlign: 'center' }}>
            <h4>
              Washington County &middot; PA <br />
              Employment Inquiry
            </h4>
          </div>
          <div className="form-group">
            <label htmlFor="position-desired" class="form-label">
              Position / Department Desired
            </label>
            <input
              name="position-desired"
              id="position-desired"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input name="firstname" className="form-control" type="text" />
            <label htmlFor="lastname">Last name</label>
            <input name="lastname" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="street-address">Street Address</label>
            <textarea
              name="street-address"
              id="street-address"
              className="form-control"
            ></textarea>
          </div>
          <div className="from-group">
            {/* City */}
            <label htmlFor="city">City</label>
            <input name="city" id="city" type="text" className="form-control" />
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
            />
          </div>
          <div className="from-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="county-resident">Washington County Resident?</label>
            <select id="county-resident" className="form-control">
              <option value="" disabled>
                Washington County Resident?
              </option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="previously-employed">
              Previously Employed By Us?
            </label>
            <select id="previously-employed" className="form-control">
              <option value="" disabled>
                Previously Employed by Us?
              </option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="convictions">
              Have You Been Convicted of a Crime, Excluding any Summary Traffic
              Offenses?
            </label>
            <select
              id="convictions"
              className="form-control"
              onChange={checkForConviction}
            >
              <option value="" disabled>
                Have You Been Convicted of a Crime, Excluding any Summary
                Traffic Offenses?
              </option>
              <option value="1">Yes</option>
              <option value="2" selected>
                No
              </option>
            </select>
          </div>
          <div className="form-group hide" id="conviction-description">
            <label htmlFor="conviction-description">
              Conviction Description
            </label>
            <textarea
              name="conviction-description"
              id="conviction-description"
              cols="45"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <div class="form-group mt-5">
            <label for="resumeUpload">R&eacute;sum&eacute;&nbsp;</label>
            <input type="file" class="form-control-file" id="resumeUpload" />
          </div>
          <div className="mt-5">
            <a
              className="btn"
              style={{ backgroundColor: 'teal', color: 'white' }}
              onClick={submitApplication}
            >
              Submit Inquiry
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const cwd = process.cwd();
console.log(cwd);
