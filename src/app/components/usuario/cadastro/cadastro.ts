import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario-model/usuario.model';

@Component({
    selector:"cadastro-usuario",
    templateUrl:"./cadastro.html",
    styleUrls: ["./cadastro.css"]
})
export class CadastroComponent implements OnInit{
   

    public usuario!: Usuario;
    public usuarioCadastrado!: boolean;
    public ativarSpinner!: boolean | undefined;
    public message!: string;


contructor(){

}
ngOnInit(): void {
    this.usuario = new Usuario();
}

// public cadastrar() {
//     this.usuarioServico.cadastrarUsuario(this.usuario).subscribe()
//     usuarioJson =>{
//         this.usuarioCadastrado = true;
//         this.message = "";
//         this.ativarSpinner = false;
//     },
//     e =>{
//         this.message = e.error;
//     }
// }

}
