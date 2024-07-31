import { useId } from "react";
import css from "./searchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/slice";
import { selectNameFilter } from "../../redux/filter/selectors";

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  function handleFilter(evn) {
    dispatch(changeFilter(evn.target.value));
  }
  const idInput = useId();

  return (
    <div className={css.box}>
      <label className={css.labelInput} htmlFor={idInput}>
        Find contacts by name
      </label>
      <input value={value} onChange={handleFilter} type="text" id={idInput} />
    </div>
  );
}
