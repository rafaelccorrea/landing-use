function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">Condições e suporte</a>
          <a href="#">Política de Privacidade</a>
        </div>
        <div className="footer-credit">
          <p>© {new Date().getFullYear()} Cesar Almeida — Método U.S.E V.O.E</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
