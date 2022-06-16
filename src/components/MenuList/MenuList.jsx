import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, setActivePlant }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      setActivePlant={setActivePlant}
    />
  );
  return (
    <main className="MenuList">
        {items}
    </main>
  );
}