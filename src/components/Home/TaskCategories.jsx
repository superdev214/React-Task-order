import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getAllCategory, storeCategoryId } from '../../redux/actions'

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
    <section className="py-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <img src="./assets/images/icons/post.svg" alt="Post a task" />
          <p className="tasks-title">Post a task & get offers</p>
        </div>
        <div className="row row-cols-3 g-3 task-list">
          {props.categories.length > 0 && props.categories.map((category, key) => (
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