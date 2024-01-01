import Link from "next/link";

function Errorpage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  my-auto not-found d-flex flex-column align-items-center justify-content-center">
            <h1 className="">404</h1>
            <h5>Sorry, the page you are looking for could not be found.</h5>
            <Link href="/" className="text-decoration-none my-4">
              <button type="button " className="btn btn-light border py-2 px-4">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Errorpage;
