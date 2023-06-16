import ProfileHeader from "../Header/ProfileHeader";

export default function EditProfile() {
  return (
    <>
      <ProfileHeader title="Edit profile" redirect="/profile" />
      <div className="scroll-area" style={{ marginTop: "50px" }}>
        <div className="pa-20">
          <div className="gray-list">
            <ul>
              <li className="d-flex justify-content-between">
                <span className="font-bold">Avatar</span>
                <img src="./assets/images/icons/fly-dark.svg" alt="logo big" />
              </li>
              <li className="d-flex justify-content-between mt-10">
                <span className="font-bold">Profile header image</span>
                <img src="./assets/images/icons/fly-dark.svg" alt="logo big" />
              </li>
            </ul>
          </div>
          <div className="mt-20 form-control-group">
            <div className="mb-20">
              <p className="font-bold mb-10">First name</p>
              <input className="w-100" />
            </div>
            <div className="mb-20">
              <p className="font-bold mb-10">Last name</p>
              <input className="w-100" />
            </div>
            <div className="mb-20">
              <p className="font-bold mb-10">Birthday</p>
              <input className="w-100" />
            </div>
            <p className="font-bold mb-10">About me</p>
            <textarea className="phone-input w-100" />
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <button className={`d-block btn-w-350 btn btn-green`}>Save</button>
      </div>
    </>
  );
}
