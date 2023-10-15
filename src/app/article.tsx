import React, { ReactElement } from 'react';

interface ArticleProps {
    title: string;
    body: string;
}

const Article: React.FC<ArticleProps> = ({ title, body }): ReactElement => {
    return (
        <>
            <div className='flex space-x-1'>
                <div className='text-base font-bold text-blue-500'>{title}</div>
                <div className='text-base'>{body}</div>
            </div>
        </>
    );
};

export default Article;