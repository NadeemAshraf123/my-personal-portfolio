import React from 'react'
import './Style.css';

const ResposiveLayout = () => {
    return (
        <>
            <div className='container'>

                <div className="navbar"><h4>navbar</h4></div>

                <div className="subcontainer">
                    <div className="sidebar"><h4>Sidebar</h4></div>

                    <div className="main_container">
                        <div className="main"><h4>Main</h4></div>

                        <div className="content">
                            <div className="content1">content1</div>
                            <div className="content2">content2</div>
                            <div className="content3">content3</div>
                            <div className="footer"><h4>footer</h4></div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResposiveLayout
