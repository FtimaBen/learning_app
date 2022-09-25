import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [current_side, nextSlide] = useState(0)
/*
<div className='rows is-mobile has-text-justified is-centered columns_content my-3'>
                <div className='row my-1 c-1' />
                <div className='row my-1 c-2' />
                <div className='row  my-1 c-3' />
            </div>
            
*/ 
    return (
        <section className='hero is-fullheight-with-navbar'>
            <div className='container is-fullhd'>
                <div className='columns has-background-grey-light has-text-justified'>
                    <FontAwesomeIcon icon="fad fa-badge-check" />
                    <div className='column is-centered'>
                        <h4>Follow your progress and earn badges</h4>
                        <p>you can follow your progress and get badges each time you finish a course</p>
                    </div>
                    <div className='column'>
                        <i>Mathematics</i>
                        <progress class="progress is-danger" value="100" max="100">15%</progress>

                        <i>Computer science</i>
                        <progress class="progress is-info" value="15" max="100">15%</progress>

                        <i>chemistry</i>
                        <progress class="progress is-primary" value="50" max="100">15%</progress>
                    </div>
                </div>
            </div>
            <div className='container hero-body is-hidden'>
                <div className='columns is-flex is-vcentered is-centered'>
                    <div className='column is-5'>
                        <h4>your future starts here </h4>
                        <h3>School Name</h3>
                        <p>The ... school was founded by ... in ... we helped ... students to accomplich stuff.
                            we provide online and in place mathematics, computer science and science courses. 
                        </p>
                        <br></br><br></br>
                        <i>find us at addresse </i>
                    </div>
                    <div className='column is-3'>
                        <figure className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Harvard_Crimson_logo.svg" />
                        </figure>
                    </div>
                </div>
            </div>

            <div className='container is-hidden'>
                <div className='columns has-background-grey-light has-text-justified'>
                    <div className='column'>
                        <h3>School</h3>
                    </div>
                    <div className='column is-one-third'>
                        <figure className="image">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                    </div>
                </div>
            </div>

            <div className='container is-hidden'>
                <div className='columns has-background-grey-light has-text-justified'>
                    <div className='column'>
                        <h3>School</h3>
                    </div>
                    <div className='column is-one-third'>
                        <figure className="image">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt='' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header