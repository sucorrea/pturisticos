import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";
import ServicePoint from "../services/servicePoint";

class FindPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      busca: "",
      pontos: [],
      ponto: "",
    };
    this.addPoint = this.addPoint.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  buscar = () => {
    const buscarFiltro = {
      busca: this.state.busca,
    };
    ServicePoint.getPontos(buscarFiltro).then((res) => {
      this.setState({ pontos: res.data });
    });
  };

  addPoint() {
    this.props.history.push("/novo");
  }

  viewPontoView(nome) {
    this.props.history.push(`/view-table/${nome}`);
  }

  render() {
    return (
      <div>
        <p />

        <div className="">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-primary me-md-2"
              type="button"
              onClick={this.addPoint}
            >
              + Cadastrar Novo Ponto Turistico
            </button>
          </div>
          <h3 className="text-center">Lista de Pontos Cadastrados </h3>
          <p />
          <p />
          <Form>
            <Form.Text className="text-muted">
              Pesquisar Pontos Turísticos
            </Form.Text>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                placeholder="Digite ..."
                onChange={(e) => this.setState({ ponto: e.target.value })}
                value={this.state.ponto}
              />
              <Form.Text className="text-muted"></Form.Text>
              <br />
              <button
                onClick={() => this.viewPontoView(this.state.ponto)}
                className="btn btn-primary me-md-2"
                type="button"
              >
                Buscar
              </button>
            </Form.Group>
          </Form>
        </div>

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
                      Ver Detalhes
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

export default FindPoint;
