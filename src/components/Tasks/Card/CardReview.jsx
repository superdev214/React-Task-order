export default function CardReview() {
  return (
    <>
      <div className="flex column">
        <div className="d-flex flex items-center">
          <img src="./assets/images/fly-dark.png" alt="logo big" />
          <div className="ml-20 font-bold">Gaurav C.</div>
        </div>
        <p className="mt-10">
          Hi, i’m happy to help today, i have the tools and experience. Please
          check my portfolio for peace of mind.
        </p>
        <div className="size-13 mt-10">
          <span className="font-bold">User name</span>
          <span className="ml-20">3 Days ago</span>
        </div>
      </div>
    </>
  );
}
