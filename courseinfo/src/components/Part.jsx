const Part = (prop) => {
    const {id,part} = prop
    return (
        <p id={id}>{part.name} {part.exercises}</p>
    )
}
export default Part