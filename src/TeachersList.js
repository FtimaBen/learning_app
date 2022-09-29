import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeachersList = (props) => {
    return (
        <section className="hero is-centered has-background-grey-lighter py-5">
            <div className="has-text-centered">
                <h1>Meet the mentors</h1>
            </div>
            <div className="columns is-flex is-vcentered is-centered has-text-centered">
                {
                    props.teachers.map(
                        (teacher)=>{
                            return (
                                <div className="column has-text-centered"> 
                                    <div>
                                        { 
                                        (teacher.profile_pic !== '' & teacher.profile_pic != null) ?
                                            <div>
                                                <figure className="image is-128x128" style={{margin: 'auto'}}>
                                                    <img src={ teacher.profile_pic } alt='teacher' className="is-rounded m-0"/>
                                                </figure>
                                            </div>
                                        :
                                            <div className="container">
                                                <figure>
                                                    <FontAwesomeIcon icon={ faChalkboardTeacher } style={{ width: '128px', height: '128px' }}/>
                                                </figure>
                                            </div>
                                        }
                                        <h3 className="is-capitalized">{ teacher.fullName }</h3>
                                        <i>{ teacher.description }</i>
                                        <p>{ (teacher.courses != undefined && teacher.courses !== 0) && 
                                            teacher.courses + (teacher.courses > 1)? 'course': 'courses' }</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {
                (props.teachers.length < 6) && 
                <div className="has-text-centered">
                    <button className="button"> View more </button>
                </div>
            }
        </section>
    )
}

export default TeachersList