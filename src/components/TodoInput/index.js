import React from "react";
import { useState } from "react";
import '../../style.css'
import EventList from "../EventList";

const todoArray = [];

export function TodoInput() {
    const [event, setEvent] = useState('');
    const [eventArray, setEventArray] = useState([]);
    const [viewArray, setViewArray] = useState([]);
    
    function makeSameArray(func){
        setEventArray(func);
        setViewArray(func);
    }

    function addNewTask() {
        todoArray.push(event);
        
        const eachEvent = {};
        eachEvent.item = event;
        eachEvent.doneState = false;

        makeSameArray(eventArray => [...eventArray, eachEvent]);
    }

    function getChangeValue(e) {
        setEvent(e.target.value);
    }

    function showAllEvent() {
        setViewArray(eventArray);
    }

    function showDoneEvent() {
        setViewArray(eventArray.filter((element) => element.doneState && element));
    }

    function showTodoEvent() {
        setViewArray(eventArray.filter((element) => !element.doneState && element));
    }

    function toggleState(index) {
        eventArray[index].doneState = !eventArray[index].doneState;
        makeSameArray(eventArray => [...eventArray]);
    }

    function deleteArray(index) {
        if(eventArray.length === 1)
            makeSameArray([]);
        else
            makeSameArray(eventArray.filter((el, i) => i !== index && el));
    }

    const deleteDoneEvent = () => {
        makeSameArray(eventArray.filter((element) => !element.doneState && element));
    }

    const deleteAllEvent = () => {
        makeSameArray([]);
    }

    return (
        <div >
            <section className='todo_input_style'>
                <h2 >TodoInput</h2>
                <div className='todo_input_container_style'>
                    <input 
                    value={event} 
                    onChange = {getChangeValue}
                    onBlur = {getChangeValue}
                    />
                    <button className='button_style' onClick = {addNewTask}> Add new task </button>
                </div>
            </section>

            <section>
                <h2 className='body-style' >TodoList</h2>
                <div className='body-style'>
                    {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href= "#" className="button-style" onClick = {showAllEvent}>All</a> {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href= "#" className="button-style" onClick = {showDoneEvent}>Done</a> {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href= "#" className="button-style" onClick = {showTodoEvent}>Todo</a> 

                </div>
                <div className='body-style component_style'>
                    {
                        viewArray.map((value, index) => (
                        <EventList 
                            value={value} 
                            toggleFunc = {toggleState} 
                            deleteFunc = {deleteArray}
                            index = {index}
                            key={value.item} 
                        />
                    ))}
                </div>
                {
                    (viewArray.length !== 0) && 
                    <div  className='body-style delete_button_padding'>
                     {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href= "#" className="delete_button" onClick = {deleteDoneEvent}>Delete done tasks</a> {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href= "#" className="delete_button" onClick = {deleteAllEvent}>Delete all tasks</a>
                    </div>
                }
            </section>
        </div>
    );
};

export default TodoInput;