import { useState } from "react"


const SearchBar = () => {
    const [state, changeBoxVisibility] = useState('is-hidden')

    function search(event) {
        if(event.target.value == '') changeBoxVisibility('is-hidden')
        else changeBoxVisibility('is-active')
    }

    return (
        <div className="field has-addons has-addons-right">
            <div className={ "dropdown " + state }>
                <div className={ "dropdown-menu"}>
                    <div className="dropdown-content">
                        <div className="dropdown-item">      
                            <div className="has-icons-left">
                                <a className="mx-4">item</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Filter courses" onChange={ search }/>
                <span className="icon is-small is-left">
                    <i className='fas fa-search'></i>
                </span>
            </p>
            <p className="control">
                <button className="button is-primary"> search </button>
            </p>
            
        </div>
    )
}

export default SearchBar