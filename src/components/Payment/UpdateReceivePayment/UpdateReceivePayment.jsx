export default function UpdateReceivePayment() {
  return (
    <>
      <div className="pa-20 scroll-area">
        <p className="text-uppercase font-bold">Bank details</p>
        <div className="form-control-group mt-20">
          <div className="mb-10">IBAN</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <p className="text-uppercase font-bold mt-20">National address</p>
        <div className="form-control-group mt-20">
          <div className="mb-10">Street name</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="form-control-group mt-10">
          <div className="mb-10">Suburb name</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="form-control-group mt-10">
          <div className="mb-10">City</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="form-control-group mt-10">
          <div className="mb-10">Postcode</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="form-control-group mt-10">
          <div className="mb-10">Country</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="mt-20 size-13">
          Your account first name and last name must match your bank details,
          transactions might not go through if details doesn't match.
        </div>
      </div>
    </>
  );
}
