import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../models/users';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any;

  constructor(private fb:FormBuilder,private authServ:AuthentificationService) { 
    this.model=this.fb.group({
      nomComplet: [null,[Validators.required,Validators.minLength(8)]],
      telephone: [null,[Validators.required,Validators.minLength(9)]],
      login: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  onFormSubmit(){
    const user:Users=this.model.value as Users;
    user.role="ROLE_CLIENT";
    this.authServ.addUser(user).subscribe(user=>{
      this.model.reset();
    })
  }

}
