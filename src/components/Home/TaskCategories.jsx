import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getAllCategory, storeCategoryId } from '../../redux/actions'

const categories = [
  { title: "Moving furniture", iconSrc: "./assets/images/icons/truck.svg" },
  {
    title: "Events & Photography",
    iconSrc: "./assets/images/icons/video.svg",
  },
  { title: "Gardening", iconSrc: "./assets/images/icons/leaves-leaf.svg" },
  {
    title: "Handyman",
    iconSrc: "./assets/images/icons/paint-roller-roller.svg",
  },
  {
    title: "Furniture Assembly",
    iconSrc: "./assets/images/icons/drill-drilling.svg",
  },
  {
    title: "Cleaning",
    iconSrc: "./assets/images/icons/sprayer-spray-bottle.svg",
  },
  {
    title: "Business & Admin",
    iconSrc: "./assets/images/icons/suitcase.svg",
  },
  { title: "Delivery", iconSrc: "./assets/images/icons/trolley.svg" },
  { title: "Delivery", iconSrc: "./assets/images/icons/obar.svg" },
  { title: "Manpower", iconSrc: "./assets/images/icons/people.svg" },
  { title: "Safety", iconSrc: "./assets/images/icons/safety-vest.svg" },
  { title: "Health", iconSrc: "./assets/images/icons/medical-kit.svg" },
  { title: "Art", iconSrc: "./assets/images/icons/paint-brush-art.svg" },
  {
    title: "Construction",
    iconSrc: "./assets/images/icons/construction.svg",
  },
  {
    title: "Pedicure & manicure",
    iconSrc: "./assets/images/icons/manicure.svg",
  },
  {
    title: "Lab & Research",
    iconSrc: "./assets/images/icons/microscope-medical.svg",
  },
  {
    title: "Mechanic",
    iconSrc: "./assets/images/icons/steering-wheel-car.svg",
  },
  { title: "Pets care", iconSrc: "./assets/images/icons/pet.svg" },
  { title: "Web & design", iconSrc: "./assets/images/icons/web-design.svg" },
  { title: "Baby care", iconSrc: "./assets/images/icons/blocks-child.svg" },
];

function TaskCategories(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.getAllCategory()
  }, [])

  const handleImageClick = (category) => {
    const o = {...props, category:category.id}
    navigate("/new-task");
    props.storeCategoryId(o.category)
  };

  return (
    <section className="py-4 task_category">
      <div className="container">
        <div className="d-flex align-items-center">
          <img src="./assets/images/icons/post.svg" alt="Post a task" />
          <p className="tasks-title">Post a task & get offers</p>
        </div>
        <div className="row row-cols-3 g-3 task-list">
          {categories.length > 0 && categories.map((category, key) => (
            <div key={key} className="col">
              <div className="task-card">
                <div className="task-image" onClick={() => handleImageClick(category)}>
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

const mapStateToProps = ({ postApi}) => {
  const {category, categories} = postApi;
  return {category, categories};
};

const mapDispatchToProps = {
  getAllCategory,
  storeCategoryId,
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);