import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout})=>{

    const { dispatch } = useWorkoutsContext()
    const formattedDate = new Date(workout.createdAt).toLocaleDateString('en-US', {
        weekday: 'short',   
        year: 'numeric',    
        month: 'short',   
        day: 'numeric',    
        hour: '2-digit',  
        minute: '2-digit', 
    });

    const handleClick = async () => {
        const response = await fetch('/api/workouts/'+workout._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload: json})
        }
    }
    return(
        <div className="workout-details">
            <h4 className="worktit">{workout.title}</h4>
            <p><strong>Load(kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Created At: </strong>{formattedDate}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails