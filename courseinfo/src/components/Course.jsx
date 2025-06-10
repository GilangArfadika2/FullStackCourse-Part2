import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const Course = (props) => {
    const {name, parts} = props.course
    // console.log(parts)
    const totalExercises = parts.reduce((sum,part) => sum + part.exercises,0)

    

    return (
        <>
        <Header name={name}></Header>
        <Content parts={parts}></Content>
        <Total total={totalExercises}></Total>
        </>
    )
}

export default Course