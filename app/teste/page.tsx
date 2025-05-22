import { YourButton } from "./YourButton";

export default function Home(){

const buttons=[]
for (let index = 0; index < 5; index++) {
    buttons.push(<YourButton key={index} name={`${index}`}/>)
}

    

    return (
        <>
        <h1>Inicial </h1>
        {buttons}
        </>
    )
}