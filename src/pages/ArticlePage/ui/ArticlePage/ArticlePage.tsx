/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'entities/Article';
import s from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        userName: 'Vitalex',
        // eslint-disable-next-line max-len
        avatar: 'data:image/jpeg;base64,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',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(s.ArticlePage, {}, [className])}>
            <ArticleList
                view="BIG"
                isLoading
                articles={[]}
            />
        </div>
    );
};

export default ArticlePage;
