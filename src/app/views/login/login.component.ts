import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
    userModel = new User ();

    mensagem = "" 

    receberDados() {
      console.log(this.userModel, this.userModel)

      const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

      listaPalavras.forEach(palavra => {
        if(this.userModel.email?.toLowerCase().includes(palavra)) {
          this.mensagem = "Dados inválidos: " + palavra

          return;
        }
      });

      this.loginService.login(this.userModel).subscribe((response) => {
          console.log("Login com sucesso!")

          this.router.navigateByUrl("/")

      }, (respostaErro) => {
        console.log("Deu erro!")
        this.mensagem = respostaErro.error
        // alert("Preencha os campos de e-mail e senha corretamente")
      })
    }
}