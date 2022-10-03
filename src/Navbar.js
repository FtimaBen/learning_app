import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './SearchBar'
import { useState } from 'react'

import translation from './translateAnon.json' 
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const NavBar = () => {
    const [isActive, changeState] = useState('')
    const logoSrc = ''
    const [isLoginFormVisible, setLoginFormVisibility] = useState(true);
    const [isSignUpFormVisible, setSignUpFormVisibility] = useState(false);

    const [items, changeItems] = useState([
        {name: 'home', link: '#', icon: 'home', classList: []},
        {name: 'courses', link: '#', icon: 'video', classList: []},
        {name: 'contact us', link: '#', icon: '', classList: []},
        {name: 'English', link: 'void(1)', icon: '', classList: ['has-dropdown', 'is-hoverable'], dropItems: ['العربية', 'Français']}
    ])

    function currentLangItemChange(e) {
        const perm_items = [...items]

        // change the selected language 

        perm_items.at(-1).dropItems.push(perm_items.at(-1).name)
        perm_items.at(-1).name = e.target.innerText
        perm_items.at(-1).dropItems = perm_items.at(-1).dropItems.filter((lang) => lang !== perm_items.at(-1).name)

        changeItems(perm_items)
    }

    return (
        <nav className='navbar is-capitalized' >
            <div className='navbar-brand'> 
                <div className='navbar-item is-expended'>
                    {
                        <a className='navbar-item' href={ items.find((item) => (item.name === 'home')).link }>
                            { 
                            (logoSrc !== '' & logoSrc != null) ?
                                <img src={logoSrc} alt='learning platform'></img>
                            :
                                <FontAwesomeIcon icon={ faGraduationCap } size='4x' />
                            }
                        </a> 
                    
                    }
                </div>
                <div role="button" className={ "navbar-burger " + isActive} aria-label="menu" aria-expanded="false" 
                        onClick= { () => changeState((isActive === 'is-active')? '': 'is-active') } >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>

            </div>
            <div className={'navbar-menu' + isActive}>
                <div className='navbar-start'>
                    
                    { 
                    items.map((item) => (
                        <div className={'navbar-item hoverable ' + item.classList.join(' ')} key={item.name}>
                            <a className={item.classList.includes('has-dropdown')?'navbar-link': 'navbar-item' } 
                                href={item.link} key={item.name + item.link}> {item.name} </a>
                            {
                                item.classList.includes('has-dropdown')?
                                <div className="navbar-dropdown is-boxed">
                                    {
                                        item.dropItems.map((dropItem) => (
                                            <a className='navbar-item' onClick={(e)=>currentLangItemChange(e)}>{dropItem}</a>
                                        ))
                                    }
                                </div>
                                : null
                            }
                        </div>
                    ))
                    }
                    <div className={'navbar-item' + ((isActive === 'is-active')? '': ' is-hidden')}>
                        <a className='navbar-item' href='#'> Log in </a>
                        <a className='navbar-item' href='#'> Sign up </a>
                    </div>
                </div>
                <div className='navbar-end'>
                    
                    {
                    isActive !== 'is-active' &&
                    [
                    <div className='navbar-item mt-4'>
                        <SearchBar />
                    </div>,
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <button className='button' onClick={()=>setLoginFormVisibility(true)}>Log in</button>
                            <button className='button is-danger' onClick={()=>setSignUpFormVisibility(true)}>Sign up</button>
                        </div>
                    </div>
                    ]
                    }
                </div>
            </div>
            <LoginForm visibility={{isLoginFormVisible: isLoginFormVisible, setVisibility: setLoginFormVisibility}} />
            <SignUpForm visibility={{isSignUpFormVisible: isSignUpFormVisible, setVisibility: setSignUpFormVisibility}} />
        </nav> 

    )
}

export default NavBar;