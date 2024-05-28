import FirstComponent from './FirstComponent';
import Profile from './Profile';
import Gallery from './Gallery';
import { Link } from "react-router-dom";
import TodoList from './TodoList';
import TodoListPerson from './TodoListPerson';
import ProfileCard from './Card';
import PackingList from './PackingList';
import List from './List';
import TeaGathering from './Cup';

export default function Atividade03(){
    return (
        <>
          <div>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <button type="button" class="btn btn-dark btn"> 
                Voltar  
              </button>  
            </Link>
          </div>
          
          <FirstComponent />
          <Profile />
          <Gallery />
          <TodoList />
          <TodoListPerson />
          <ProfileCard />
          <PackingList />
          <List />
          <TeaGathering />
        </>
    );
}