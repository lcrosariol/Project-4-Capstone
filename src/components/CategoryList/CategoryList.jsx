import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <div className="CategoryList">
      <li
        key={cat}
        className={cat === activeCat ? 'active' : ''}
        // FYI, the below will also work, but will give a warning
        // className={cat === activeCat && 'active'}
        onClick={() => setActiveCat(cat)}
      >
        {cat}
      </li>
    </div>
  );
  return (
      <ul className="CategoryContainer">
        {cats}
      </ul>
  )
}
