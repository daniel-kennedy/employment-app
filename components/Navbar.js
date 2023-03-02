import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="vw-100">
      <nav
        class="navbar navbar-dark ml-5 mr-5"
        style={{ backgroundColor: 'teal' }}
      >
        <a class="navbar-brand" href="https://www.co.washington.pa.us">
          <img
            src="/img/county-logo-sm.png"
            width="30"
            height="30"
            className="d-inline-block align-top ms-2"
            alt=""
          />
          Washington County &middot; PA
        </a>
        <span className="float-right text-light me-2">
          <Link
            className="btn btn-sm btn-outline-light"
            href="https://www.co.washington.pa.us/Jobs.aspx"
            target="_blank"
          >
            Open Jobs
          </Link>
        </span>
      </nav>
    </div>
  );
}
