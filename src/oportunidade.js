import { LightningElement, api } from "lwc";

export default class Oportunidade extends LightningElement {

  @api cod;
  @api nomeoport;
  @api nomeconta;
  @api valor;
  @api fechamento;
  
}
