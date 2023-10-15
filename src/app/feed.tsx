import React, { ReactElement } from 'react';
import Article from '@/app/article'

interface ArticleListProps {
    delay: number;
}

interface DelayedFetchOptions extends RequestInit {
    delay: number;
}

const delayFetch = (url: string, options: DelayedFetchOptions): Promise<Response> =>
    new Promise((resolve) => {
        setTimeout(() => resolve(fetch(url, options)), options.delay);
    });

const loadDataFromAPI = async (delay: number): Promise<any> => {
    const response = await delayFetch('https://jsonplaceholder.typicode.com/posts?_limit=2', { delay });
    return response.json();
};

const ArticleList: React.FC<ArticleListProps> = async ({ delay }): Promise<ReactElement> => {
    const articles = await loadDataFromAPI(delay);
    return (
        <>
            {articles.map((p: any) => (
                <Article key={p.id} title={p.title} body={p.body} />
            ))}
        </>
    );
};

export default ArticleList;