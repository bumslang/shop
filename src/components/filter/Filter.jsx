import { useDispatch, useSelector } from 'react-redux';

import cl from './Filter.module.css'

import { selectValue, setDiscount, setValueFrom, setValueTo } from '../../features/filter/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const { valueFrom, valueTo, isChecked } = useSelector(selectValue);

    return (
        <div className={cl.filterSection}>
            <h3 className={cl.filterTitle}>
                Фильтр
            </h3>
            <div className={cl.priceFilter}>
                <p className={cl.filterLabel}>Цена</p>
                <input
                    type='number'
                    className={`${cl.priceInput} ${cl.priceInputFrom}`}
                    placeholder='От'
                    value={valueFrom}
                    onChange={(e) => dispatch(setValueFrom(e.target.value))}
                />
                <span>-</span>
                <input
                    type='number'
                    className={`${cl.priceInput} ${cl.priceInputTo}`}
                    placeholder='До'
                    value={valueTo}
                    onChange={(e) => dispatch(setValueTo(e.target.value))}
                />
            </div>
            <div className={cl.checkboxes}>
                <label htmlFor="Есть скидка" className={cl.checkboxLabel}>
                    <input
                        className={cl.checkbox}
                        type="checkbox"
                        id="Есть скидка"
                        name="Есть скидка"
                        checked={isChecked}
                        onChange={()=>dispatch(setDiscount(!isChecked))}
                    />
                    Есть скидка
                </label>
            </div>
            <button className={cl.applyButton}>Применить</button>
        </div>
    )
}

export default Filter;