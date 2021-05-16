import React, { Component } from "react";
import ServicePoint from "../services/servicePoint";
import { ListGroup, Form, Button, Table, state } from "react-bootstrap";

class ShowPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.match.params.nome,
      pontos: [],
    };
  }

  componentDidMount() {
    ServicePoint.getPontos(this.state.nome).then((res) => {
      this.setState({ pontos: res.data });
    });
  }
  viewPonto(id) {
    this.props.history.push(`/view/${id}`);
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Listagem de Pontos Turistícos</h3>
        <div>
          <Table responsive>
            <tbody>
              {this.state.pontos.map((ponto) => (
                <tr>
                  <td>{ponto.nome}</td>
                  <td>{ponto.estado}</td>
                  <td>{ponto.cidade}</td>
                  <td>{ponto.referencia}</td>
                  <td>{ponto.descricao}</td>
                  <td>
                    <button
                      onClick={() => this.viewPonto(ponto.id)}
                      className="btn btn-info"
                    >
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ShowPoint;
