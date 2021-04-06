import React from 'react';
import ContentTodo from './components/content.jsx';
import HeaderTodo from './components/header.jsx';
import FooterTodo from './components/footer.jsx';
const TodoList = () => {
    return (
    //    <div className="h-screen flex items-center justify-between">
    //         <div className="flex flex-col items-center justify-between m-auto w-1/4 h-3/5 bg-white rounded shadow-lg p-8 m-4">
    //             <HeaderTodo/>
    //             <ContentTodo/>
    //             <FooterTodo/>
    //          </div>
    //    </div>
        <div className="h-screen flex items-center justify-between">
            <div className="flex flex-col items-center justify-between m-auto h-3/5 bg-purple-todo text-white rounded shadow-lg mt-16">
                <HeaderTodo/>
                <ContentTodo/>
                <FooterTodo/>
            </div>
        </div>
    )
}
export default React.memo(TodoList);
