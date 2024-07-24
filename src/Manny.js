
export default function Manny () {

    const [isCorrect, setIsCorrect] = React.useState(false)

    const yesAnswer = () => {
        setIsCorrect(prev => !prev)
    }

   
    return (
        <div>
            <h1>I AM SO SORRY FOR EVERYTHING MANNY</h1>
            <h3>Will you forgive me?</h3>
            <button onClick={yesAnswer}>yes</button>
            <button>No</button>
        </div>
    )
}