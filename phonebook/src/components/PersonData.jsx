const PersonData = ({person,handleToggleDelete}) => {
    return (
        <>
        
          <p>{person.name}  {person.number}</p>  
         <button onClick={handleToggleDelete}>Delete</button>
        </>
     ) 

}
    

export default PersonData;