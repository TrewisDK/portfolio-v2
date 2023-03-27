import logo from './logo.jpg';
import dev from './dev.jpg'
import dev2 from './dev2.jpg'
import './App.css';


function Hello() {
    fetch('http://127.0.0.1:8000/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('test').innerText = data["message"];

        })
        .catch(error => console.error(error));
}
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-cont">
                    <div className="App-logo"></div>
                    <ul className="App-bl">
                        <li className="menu-point"><a href="#">О нас</a></li>
                        <li className="menu-point"><a href="#">Наши проекты</a></li>
                        <li className="menu-point"><a href="#">Отзывы</a></li>
                    </ul>
                </div>
            </header>
            <main>
                <section className="App-content">
                    <div>
                        <h1 className="App-section-title">Команда Americium</h1>
                    </div>
                    <div className="App-command">
                        <div className="App-profile">
                            <img className="App-avatar" src={dev} width="170" height="170" alt=""/>
                            <h4>Python Backend разработичк</h4>
                            <div className="proger-desck">
                                Python Django/FastAPI Backend разработчик, с более чем
                                3 годами разработки программного обеспечения и веб приложений
                            </div>
                        </div>
                        <div className="App-profile">
                            <img className="App-avatar" src={dev2} width="170" height="170" alt=""/>
                            <h3>Frontend Developer</h3>
                            <div className="proger-desck">
                                Frontend ReactJS/Vue.js разработчик, опытный специалист разработавший фронтенд
                                для большого количества web приложений
                            </div>
                        </div>
                        <div className="App-profile">
                            <img className="App-avatar" src={dev} width="170" height="170" alt=""/>
                            <h4>DevOps Engineer</h4>
                            <div className="proger-desck">
                                Nginx/Apache/Docker/Linux Специалист по развертыванию и настройке web приложений, защите
                                серверов от Dos и DDos атак
                            </div>
                        </div>
                    </div>
                </section>
                <section className="App-content">
                    <div className="App-best-projects">
                        <h1 className="App-section-title">Почему именно мы?</h1>
                        <ul className="App-list-margin">
                            <li className="App-li">Выскоквалифицированная команда разработичков с большим стажем и
                                техническим образованием
                            </li>
                            <li className="App-li">Совеременный стек технологий, оптимизация приложения, безопастность
                            </li>
                            <li className="App-li">Понимание и четкое исполнение пожеланий клиента</li>
                        </ul>
                    </div>
                </section>
                <section className="App-content">
                    <div>
                        <h1 className="App-section-title">Наши лучшие работы</h1>
                        <div className="App-best-projects">
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3 id="test">Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>
                            <div className="App-project">
                                <div className="App-project-image"></div>
                                <h3>Такой то сайт</h3>
                                <div>Для такой то такой то компании</div>
                                <button className="button-more" onClick={Hello}>Подробнее</button>
                            </div>

                        </div>
                    </div>
                </section>
                <footer>
                    <div>
                        <ul className="App-list-margin">
                            <li className="footer-menu"><a href="#">О нас</a></li>
                            <li className="footer-menu"><a href="#">Наши проекты</a></li>
                            <li className="footer-menu"><a href="#">Отзывы</a></li>
                        </ul>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
