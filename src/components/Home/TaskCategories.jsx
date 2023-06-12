export default function TaskCategories() {
  const categories = [
    { title: "Moving furniture", iconSrc: "./assets/images/truck.png" },
    { title: "Events & Photography", iconSrc: "./assets/images/video.png" },
    { title: "Gardening", iconSrc: "./assets/images/leaves-leaf.png" },
    { title: "Handyman", iconSrc: "./assets/images/paint-roller-roller.png" },
    {
      title: "Furniture Assembly",
      iconSrc: "./assets/images/drill-drilling.png",
    },
    { title: "Cleaning", iconSrc: "./assets/images/sprayer-spray-bottle.png" },
    { title: "Business & Admin", iconSrc: "./assets/images/suitcase.png" },
    { title: "Delivery", iconSrc: "./assets/images/trolley.png" },
    { title: "Delivery", iconSrc: "./assets/images/obar.png" },
    { title: "Manpower", iconSrc: "./assets/images/people.png" },
    { title: "Safety", iconSrc: "./assets/images/safety-vest.png" },
    { title: "Health", iconSrc: "./assets/images/medical-kit.png" },
    { title: "Art", iconSrc: "./assets/images/paint-brush-art.png" },
    { title: "Construction", iconSrc: "./assets/images/construction.png" },
    { title: "Pedicure & manicure", iconSrc: "./assets/images/manicure.png" },
    {
      title: "Lab & Research",
      iconSrc: "./assets/images/microscope-medical.png",
    },
    { title: "Mechanic", iconSrc: "./assets/images/steering-wheel-car.png" },
    { title: "Pets care", iconSrc: "./assets/images/pet.png" },
    { title: "Web & design", iconSrc: "./assets/images/web-design.png" },
    { title: "Baby care", iconSrc: "./assets/images/blocks-child.png" },
  ];
  return (
    <section className="py-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <img src="./assets/images/post.png" alt="Post a task" />
          <p className="tasks-title">Post a task & get offers</p>
        </div>
        <div className="row row-cols-3 g-3 task-list">
          {categories.map((category, key) => (
            <div key={key} className="col">
              <div className="task-card">
                <div className="task-image">
                  <img src={category.iconSrc} alt={category.title} />
                </div>
                <p className="task-name">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
