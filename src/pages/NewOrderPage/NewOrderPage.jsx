import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import * as ordersAPI from '../../utilities/orders-api';
import PlantInfo from '../../components/PlantInfo/PlantInfo';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();
  const [activePlant, setActivePlant] = useState('');

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(items[0].category.name);
    }
    getItems();

    async function getCart(){
      const cart = await ordersAPI.getCart();
      console.log('cart get is ', cart)
      setCart(cart);
    }
    getCart();
  }, []);  // an empty dependency array will run the effect after the first render only

  // Event HANDLERS
  // async function handleAddToOrder(itemId) {
  //   const cart = await ordersAPI.addItemToCart(itemId);
  //   setCart(cart);
  // }

  // async function handleChangeQty(itemId, newQty) {
  //   const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   // how do i set this to only one item?
  //   setCart(cart);
  // }

  // async function handleCheckout() {
  //   await ordersAPI.checkout();
  //   history.push('./orders');
  // }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        activePlant={activePlant}
        setActivePlant={setActivePlant}

      />
      <PlantInfo
      activePlant={activePlant}
      />
      
    </main>
  );
}