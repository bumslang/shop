import { NavLink } from "react-router-dom";
import cl from '../catalog/Catalog.module.css'
import { useDispatch } from "react-redux";
import { setCategoryTitle } from "../../features/catalog/catalogSlice";

const CatalogItem = ({ categoryName, categoryLink, categoryClass }) => {
    const dispatch = useDispatch();

    return (
        <NavLink
            to={`${categoryLink}`}
            className={`${cl.item} ${cl[categoryClass]}`}
            onClick={(e) => dispatch(setCategoryTitle(e.target.innerHTML))}
        >
            {categoryName}
        </NavLink >
    )
}

export default CatalogItem;