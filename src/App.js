import logo from './logo.svg';
import './App.css';

const Logo = () =>
    <img src="/logo.png" className="App-logo" alt="logo" />

const CompanyName = () =>
    <div className="company_name">
            <p className="company_name_1">A<span className="company_name_2">-Level</span></p>
            <p className="company_by">Ukraine</p>
    </div>
    
const CompanyLogo = () =>
    <div className="company_logo">
        <Logo />
        <CompanyName />
    </div>

const Navigation = () =>
    <nav>
        <ul>
            <li><a href="#">Item1</a></li>
            <li><a href="#">Item2</a></li>
            <li><a href="#">Item3</a></li>
            <li><a href="#">Item4</a></li>
            <li><a href="#">Item5</a></li>
        </ul>
    </nav>

const Header = () =>
    <header>
        <CompanyLogo />
        <Navigation />
    </header>

const PhotoProduct = () =>
    <div className="photo_product">
        <img src="/Card.png" alt="product" />
    </div>

const NameProduct = ({name}) =>
    <h2>{name}</h2>

const DiscriptionProduct = ({text}) =>
    <p className="discription">{text}</p>

const Button = () =>
    <button>Go</button>

const Footer = () =>
    <footer>Footer</footer>


function App() {
  return (
    <>
    <Header />

    <main>
        <article>
            <p className="about_us">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos deserunt pariatur esse
                voluptate dolore
                reprehenderit eaque error dicta veritatis facere consequuntur cum velit, saepe doloribus iste veniam
                incidunt quia quos?</p>
            <h1>Our work</h1>

            <div className="product">

                <section>
                    <PhotoProduct />
                    <NameProduct name="Lorem ipsum dolor sit amet."/>
                    <DiscriptionProduct text="Reprehenderit eaque error dicta veritatis facere consequuntur cum velit, saepe doloribus iste veniam
                incidunt quia quos?"/>
                    <Button />
                 </section>

                 <section>
                    <PhotoProduct />
                    <NameProduct name="Aliquam, laudantium
                        hic. Pariatur, ducimus"/>
                    <DiscriptionProduct text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laudantium
                        hic. Pariatur, ducimus
                        officia."/>
                    <Button />
                 </section>

                 <section>
                    <PhotoProduct />
                    <NameProduct name="Nesciunt error dolores nostrum eligendi"/>
                    <DiscriptionProduct text="Aliquam, laudantium
                        hic. Pariatur, ducimus
                        officia. Nesciunt error dolores nostrum eligendi laboriosam exercitationem amet"/>
                    <Button />
                 </section>

                 <section>
                    <PhotoProduct />
                    <NameProduct name="laboriosam exercitationem amet."/>
                    <DiscriptionProduct text="Aliquam, laudantium
                        hic. Pariatur, ducimus"/>
                    <Button />
                 </section>

                 <section>
                    <PhotoProduct />
                    <NameProduct name="Aliquam, laudantium hic. Pariatur"/>
                    <DiscriptionProduct text="Saepe doloribus iste veniam
                incidunt quia quos?"/>
                    <Button />
                 </section>

                 <section>
                    <PhotoProduct />
                    <NameProduct name="Eos deserunt pariatur esse
                voluptate dolore"/>
                    <DiscriptionProduct text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laudantium"/>
                    <Button />
                 </section>

            </div>
        </article>
        <aside className="aside_left">Aside 1</aside>
        <aside className="aside_right">Aside 2</aside>
    </main>

    <Footer />
    </>
  );
}

export default App;
