import React from 'react';
import ContentTodo from './components/content.jsx';
import HeaderTodo from './components/header.jsx';
import FooterTodo from './components/footer.jsx';
const TodoList = () => {
    return (
        <div className="flex flex-col mt-16 items-center justify-between m-auto w-1/4 h-4/5 bg-white rounded shadow-lg p-8 m-4">
            <HeaderTodo/>
            <ContentTodo/>
            <FooterTodo/>
        </div>
    )
}
export default React.memo(TodoList);
