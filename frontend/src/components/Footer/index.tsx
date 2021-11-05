const Footer = () => {
    return (
        <div>
            <footer className="footer justify-content-between py-3 my-4 border-top bg-dark ">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/thiagomrm" target="_blank" rel="noreferrer">Thiago Mesquita</a></p>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer>
        </div>
    );
}
//d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top
//footer mt-auto py-3 bg-dark
export default Footer;