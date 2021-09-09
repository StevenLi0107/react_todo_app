import React from "react";
import '../../style.css'
import delIco from '../../image/delete.png';
import checkedIco from '../../image/checked.png';
import uncheckedIco from '../../image/unchecked.png';



function EventList({value, toggleFunc, deleteFunc, index}) {

    function toggleDoneState() {
        console.log(index);
        toggleFunc(index);
    }

    function deleteEvent() {
        deleteFunc(index);
    }

    return (
        <div>
        {
            !value.doneState && <div className='component'>
                <p className="component_letter">{value.item}</p>
                <div className='component_icon'>
                    {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}

                    <img className='component_icon_detail' src={uncheckedIco} alt="toggle" onClick = {toggleDoneState}  width="30" height="30"/>{/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <img className='component_icon_detail' src={delIco} alt="delete" onClick = {deleteEvent} width="30" height="30"/>
                </div>
            </div>
        }
        {
            value.doneState && <div className='component'>
                <p className="component_letter_done">{value.item}</p>
                <div className='component_icon'>
                    <img className='component_icon_detail' src={checkedIco} alt="toggle" onClick = {toggleDoneState}  width="30" height="30"/>{/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <img className='component_icon_detail' src={delIco} alt="delete" onClick = {deleteEvent} width="30" height="30"/>
                </div>
            </div>
        }

        </div>
    );
};

export default EventList;