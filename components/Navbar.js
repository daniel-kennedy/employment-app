export default function Navbar() {
  return (
    <nav className="teal darken-4">
      <div className="nav-wrapper">
        <a href="https://www.co.washington.pa.u" className="brand-logo left">
          <img
            style={{ marginTop: '10px' }}
            src="/img/county-logo-sm.png"
            height="45"
          />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://www.co.washington.pa.us/Jobs.aspx">
              Job Opportunities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
