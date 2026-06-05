import classes from "./Category.module.css";
function CategoryCard({ data }) {
  return (
    <>
      {" "}
      <div className={classes.category}>
        {/* Rendering the title of the category */}
        <h2>{data?.title}</h2>

        <img src={data?.imgLink} alt={data?.title} />

        <p>Shop now</p>
      </div>
    </>
  );
}

export default CategoryCard; 



