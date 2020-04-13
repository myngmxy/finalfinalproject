import React, {useState,useContext,useEffect} from 'react';
import NoteItem from './TodoItem';
import TodoService from '../Services/TodoService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Todos = props =>{
    const [todo,setTodo] = useState({name : ""});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    
    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        TodoService.postTodo(todo).then(data =>{
            const { message } = data;
            resetForm();
            if(!message.msgError){
                TodoService.getTodos().then(getData =>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username : "", role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                setMessage(message);
            }
        });
    }

    const onChange = e =>{
        setTodo({name : e.target.value});
    }

    const resetForm = ()=>{
        setTodo({name : ""});
    }

    return(
        <div>
            <ul className="list-group">
                {
                    todos.map(todo =>{
                        return <NoteItem key={todo._id} todo={todo}/>
                    })
                }
            </ul>
            <br/>
            <form onSubmit={onSubmit}>


            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label >Enter your note</Form.Label>
                <Form.Control as="textarea" rows="3"
                            name="todo" 
                            value={todo.name} 
                            onChange={onChange}
                            className="form-control"
                            placeholder="Please Enter Your note" />
            </Form.Group>
                
                <Button variant="primary" size="lg" block type="submit" style={{ marginTop: '0.3rem' }}>
                    Submit
                </Button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    );

}

export default Todos;