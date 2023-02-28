import Head from 'next/head';

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
  return (
    <div>
      <Head>
        <title>County of Washington : Employment Application</title>
      </Head>
      <main>
        <img
          style={{ marginTop: '10px' }}
          src="/img/county-logo-sm.png"
          height="75"
        />
        <h3
          style={{
            display: 'inline',
            marginLeft: '2rem',
            verticalAlign: 'text-bottom',
          }}
        >
          Washington County &middot; PA
        </h3>
        <section name="personal">
          <h4>Personal Information</h4>
          <input name="position-desired" id="position-desired" type="text" />
          <label htmlFor="position-desired">
            Position / Department Desired
          </label>
          <div>
            <input name="firstname" type="text" />
            <label htmlFor="firstname">First name</label>
            <input name="lastname" type="text" />
            <label htmlFor="lastname">Last name</label>
          </div>
          <div>
            <textarea
              name="street-address"
              id="street-address"
              cols="45"
              rows="10"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="street-address">Street Address</label>
          </div>
          <div>
            {/* City */}
            <input name="city" id="city" type="text" />
            <label htmlFor="city">City</label>
            {/* State */}
            <select
              name="state"
              id="state"
              type="text"
              className="browser-default"
              defaultValue="PA - Pennsylvania"
            >
              <StateList />
            </select>
            <label htmlFor="state">State</label>
            {/* ZIP */}
            <input name="zipcode" id="zipcode" type="text" />
            <label htmlFor="zipcode">ZIP Code</label>
          </div>
          <div>
            <input type="email" />
            <label htmlFor="email">Email</label>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <select id="county-resident" className="browser-default">
              <option value="" disabled>
                Washington County Resident?
              </option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
            <label htmlFor="county-resident">Washington County Resident?</label>
          </div>
          <div>
            <select id="previously-employed" className="browser-default">
              <option value="" disabled>
                Previously Employed by Us?
              </option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
            <label htmlFor="previously-employed">
              Previously Employed By Us?
            </label>
          </div>
        </section>
      </main>
    </div>
  );
}
