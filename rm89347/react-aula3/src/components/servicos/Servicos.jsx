import devImg from '../img/desenvolvimento.jpg'
import cursosImg from '../img/cursos.png'
import eventosImg from '../img/eventos.jpg'
import segInfoImg from '../img/seguranca-info.png'


export function Servicos() {
  return(
    <section id="servicos">
      <h2>Serviços</h2>
      <div>
          <img src={devImg} alt="Icones de computadores" />
          <h3>Desenvolvimento</h3>
          <p>Realizamos o serviço de desenvolvimento Web com as melhores Tecnologias do Mercado.</p>
      </div>

      <div>
          <img src={cursosImg} alt="Notebook" />
          <h3>Cursos</h3>
          <p>Oferecemos Minicursos remotos, para as linguagens de estão em alta na Web hoje.</p>
      </div>

      <div>
          <img src={eventosImg} alt="Fones de Ouvido" />
          <h3>WorkShops</h3>
          <p>Produzimos Workshops para todo os país.</p>
      </div>
      
      <div>
          <img src={segInfoImg} alt="Texto misturado." />
          <h3>Segurança da Informação</h3>
          <p>Criamos projetos de INFORMATION SECURITY para grandes empresas, consulte nos.</p>
      </div>
    </section>
  )
}