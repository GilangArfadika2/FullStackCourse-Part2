const FilterForm = (props) => {
    return (
        <form >
        <div>
          filter shown with :  <input value={props.filterInput} onChange={props.handleFilterInput}></input>
        </div>
      </form>)
}

export default FilterForm;