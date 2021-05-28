//导入React相关依赖
import React, {useState} from 'react';
import logo from './logo.svg';
import './index.css';

export default function ToDo() {
    const [toDoList, setToDoList] = useState([
        {
            title: 'Have dinner with fiends',
            checked: true
        },
        {
            title: 'Go to gym',
            checked: false
        },
        {
            title: 'Parttime job interview',
            checked: false
        },
        {
            title: 'Buy a gift for mum',
            checked: true
        },
    ])
    const [item, setItem] = useState("")

    const addToDo = (event) => {
        if (event.keyCode === 13) {
            let tempList = [...toDoList];
            tempList.push({
                title: item,
                checked: false,
            });
            setToDoList([...tempList])
            setItem("")
        }
    }

    const checkboxChange = (index) => {
        let tempList = [...toDoList];
        tempList[index].checked = !tempList[index].checked;
        setToDoList([...tempList])
    }

    const removeToDo = (index) => {
        let tempList = [...toDoList];
        tempList.splice(index, 1);
        setToDoList([...tempList])
    }

    return (
        <div>
            <header className="title">TodoList: <input type="text" onChange={(e) => {
                setItem(e.target.value)
            }} value={item} onKeyUp={(e) => addToDo(e)}/></header>
            <div className="container">
                <h2>Events need to do</h2>

                <hr/>

                <ul className="list todolist">
                    {
                        toDoList.map((value, index) => {
                            if (!value.checked) {
                                return (
                                    <li>
                                        <input key={index} type="checkbox" checked={value.checked}
                                               onChange={() => checkboxChange(index)}/>
                                        <span>{value.title}</span>
                                        <button onClick={() => removeToDo(index)} className="del-btn">Delete</button>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>

                <h2>Events have been done</h2>

                <hr/>
                <ul className="list done list">
                    {/* use map to show content in list */}
                    {
                        toDoList.map((value, index) => {
                            if (value.checked) {
                                return (
                                    <li>
                                        <input key={index} type="checkbox" checked={value.checked}
                                               onChange={() => checkboxChange(index)}/>
                                        <span>{value.title}</span>
                                        <button onClick={() => removeToDo(index)} className="del-btn">delete</button>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

