import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { changeTabActive } from '../redux/action';

function NavBar({ activeTab }) {
    const [listNav] = useState(['home', 'skills', 'projects', 'contacts']);
    const dispatch = useDispatch();

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
    }
    return (
        <header>
            <div className='logo'>
                <img src="/smile.jpg" alt="" />
            </div>
            <nav>
                {
                    listNav.map((value, key) => (
                        <span key={key}
                            className={activeTab === value ? 'active' : ''}
                            onClick={() => changeTab(value)}>{value}</span>
                    ))
                }
            </nav>
        </header>
    )
}
const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});
const mapDispatchToProps = {
    changeTabActive
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);