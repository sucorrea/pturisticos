import { Dropdown } from "react-bootstrap";
import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import PontoTuristicoService from "../services/servicePoint";

class AddPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      estado: "",
      cidade: "",
      referencia: "",
      descricao: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
    this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
    this.changeReferenciaHandler = this.changeReferenciaHandler.bind(this);
    this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
    this.salvar = this.salvar.bind(this);
  }
  estados = {
    listaArray: [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ],
  };
  salvar(e) {
    var data = new Date().toISOString().slice(0, 10);
    console.log("data: ", data);

    e.preventDefault();
    let ponto = {
      nome: this.state.nome,
      estado: this.state.estado,
      cidade: this.state.cidade,
      referencia: this.state.referencia,
      descricao: this.state.descricao,
      data,
    };
    console.log("ponto =>" + JSON.stringify(ponto));

    PontoTuristicoService.salvar(ponto).then((res) => {
      this.props.history.push("/pontos");
    });
  }
  changeNameHandler = (event) => {
    this.setState({ nome: event.target.value });
  };
  changeEstadoHandler = (event) => {
    this.setState({ estado: event.target.value });
  };
  changeCidadeHandler = (event) => {
    this.setState({ cidade: event.target.value });
  };
  changeReferenciaHandler = (event) => {
    this.setState({ referencia: event.target.value });
  };
  changeDescricaoHandler = (event) => {
    this.setState({ descricao: event.target.value });
  };
  cancel() {
    this.props.history.push("/pontos");
  }

  render() {
    return (
      <div>
        <p />
        <div>
          <div>
            <h3 className="text-center"> Adicionar Novo Ponto Turístico</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    placeholder="Nome do Ponto Turístico"
                    name="nome"
                    className="form-control"
                    value={this.state.nome}
                    onChange={this.changeNameHandler}
                  />
                </div>
                <div>
                  <h6>
                    <b>Localização</b>
                  </h6>
                </div>

                <div className="p-0">
                  <label>Estado</label>
                  <select
                    className="form-select" id="inputGroupSelect01"
                    value={this.state.estado}
                    onChange={this.changeEstadoHandler}
                  >
                    <option selected>Selecione...</option>
                    {this.estados.listaArray.map((data) => (
                      <option title={data}>{data}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Cidade</label>
                  <input
                    placeholder="Cidade"
                    name="cidade"
                    className="form-control"
                    value={this.state.cidade}
                    onChange={this.changeCidadeHandler}
                  />
                </div>
                <div>
                  <label>Referência</label>
                  <input
                    placeholder="Referencia"
                    name="referencia"
                    className="form-control"
                    value={this.state.referencia}
                    onChange={this.changeReferenciaHandler}
                  />
                </div>
                <div>
                  <label for="detalhes">Descrição</label>
                  <textarea
                    class="form-control"
                    id="detalhes"
                    rows="3"
                    value={this.state.descricao}
                    onChange={this.changeDescricaoHandler}
                  />
                </div>
                <p />
                <div>
                  <button className="btn btn-primary me-md-2" onClick={this.salvar}>
                    Salvar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPoint;
