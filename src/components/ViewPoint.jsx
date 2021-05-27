import React, { Component } from "react";
import ServicePoint from "../services/servicePoint";

class ViewPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      ponto: {},
    };
  }
  componentDidMount() {
    ServicePoint.getPontosID(this.state.id).then((res) => {
      this.setState({ ponto: res.data });
    });
  }
  cancel() {
    this.props.history.push("/pontos");
  }
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Detalhes do Ponto Turistico</h3>
          <div className="card-body">
            <div className="form-group">
                <label className="labelview">Nome: </label>
                <div>{this.state.ponto.nome}</div>

                <label className="labelview">Cidade: </label>
                <div>{this.state.ponto.cidade}</div>

                <label className="labelview">Estado:</label>
                <div>{this.state.ponto.estado}</div>

                <label className="labelview">Referencia: </label>
                <div>{this.state.ponto.referencia}</div>

                <label className="labelview">Descrição: </label>
                <div>{this.state.ponto.descricao}</div>
            </div>
            <br/>
            <button
              className="btn btn-danger"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPoint;
