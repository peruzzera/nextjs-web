import CardCourse from "./CardCourse";

export default function Courses() {

    const courses= [
        {
        id:1,
        title: "Curso de HTML",
         description: "Conheça nossso curso",
         image: "/img/html.svg" ,
         link: "/courses/html" 
        },
         {
        id:2,
        title: "Curso de CSS",
         description: "Conheça nossso curso",
         image: "/img/html.svg" ,
         link: "/courses/css" 
        },
         {
        id:3,
        title: "Curso de HTML",
         description: "Conheça nossso curso",
         image: "/img/css.svg" ,
         link: "/courses/html" 
        },
         {
        id:4,
        title: "Curso de HTML",
         description: "Conheça nossso curso",
         image: "/img/js.svg" ,
         link: "/courses/html" 
        },
         {
        id:5,
        title: "Curso de HTML",
         description: "Conheça nossso curso",
         image: "/img/html.svg" ,
         link: "/courses/html" 
        },
         {
        id:6,
        title: "Curso de HTML",
         description: "Conheça nossso curso",
         image: "/img/games.svg" ,
         link: "/courses/html" 
        }
    ]
    const courseList =[]
    for(const course of courses){
        courseList.push(<CardCourse key={course.id} course={course}/> )
    }


    return (
        <main className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {courseList}            
        </main>

    )
}