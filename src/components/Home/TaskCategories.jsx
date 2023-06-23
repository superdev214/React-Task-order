import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategory, storeCategoryId } from "../../redux/actions";

function TaskCategories(props) {
  useEffect(() => {
    props.getAllCategory();
  }, []);

  const verify_user = localStorage.getItem("user_id");
  return (
    <section className="py-4 task_category">
      <div className="container">
        <div className="d-flex align-items-center">
          <img src="./assets/images/icons/post.svg" alt="Post a task" />
          <p className="tasks-title">Post a task & get offers</p>
        </div>
        <div className="row row-cols-3 g-3 task-list">
          {props.categories.length > 0 &&
            props.categories.map((category) => (
              <div key={category.id} className="col">
                <NavLink
                  to={ verify_user === null ? `/` : `/new-task?id=${category.id}`}
                  className="task-card"
                >
                  <div className="task-image">
                    <img src={category.iconSrc} alt={category.title} />
                  </div>
                  <p className="task-name">{category.title}</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = ({ postApi }) => {
  const { category, categories } = postApi;
  return { category, categories };
};

const mapDispatchToProps = {
  getAllCategory,
  storeCategoryId,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);
