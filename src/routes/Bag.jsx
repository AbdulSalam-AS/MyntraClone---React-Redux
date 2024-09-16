import { useSelector } from 'react-redux';
import BagSummary from '../components/BagSummary';
import BagItem from './../components/BagItem';
const Bag = () => {
    const items = useSelector(store => store.items);
    const bagItems = useSelector(store => store.bag);
    const existingCartItems = items.filter((item) => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });


    return (
        <main>
        <div className="bag-page">
            <div className="bag-items-container">
            {existingCartItems.map((item) => <BagItem key={item.id} item={item}/>) }
            </div>
            <BagSummary/>
        </div>
        </main>
    );
}


export default Bag;
