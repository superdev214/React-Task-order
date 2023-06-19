export default function UpdateCreditCardFrom() {
  return (
    <>
      <div className="pa-20">
        <div className="form-control-group">
          <div className="mb-10 font-bold">Name on card</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="form-control-group mt-20">
          <div className="mb-10 font-bold">Card number</div>
          <input className="w-100" type="text" minLength={10} />
        </div>
        <div className="row">
          <div className="col-6 form-control-group mt-20">
            <div className="mb-10 font-bold">Expiry</div>
            <input className="w-100" type="text" minLength={10} />
          </div>
          <div className="col-1"></div>
          <div className="col-5 form-control-group mt-20">
            <div className="mb-10 font-bold text-end">CCV</div>
            <div className="d-flex align-items-center">
              <img
                src="./assets/images/icons/info.svg"
                alt="Post a task"
                className="mr-10"
              />
              <input className="mt-10 ml-10 w-100" type="text" minLength={10} />
            </div>
          </div>
        </div>
        <div className="mt-20 size-13">
          <span>
            Ny adding your credit card details, you agree to the provider’s
          </span>
          <span className="text-blue p-1">Terms of use</span>
        </div>
      </div>
    </>
  );
}
