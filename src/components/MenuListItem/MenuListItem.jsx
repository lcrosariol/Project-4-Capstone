import './MenuListItem.css';

export default function MenuListItem({ menuItem, setActivePlant }) {
  return (
    <div className="MenuListItem">
      <img className="photo flex-ctr-ctr" src={menuItem.photo} />
      <div className="name">{menuItem.name}</div>
      <button className onClick={setActivePlant(menuItem)} >Info</button>
    </div>
  );
}