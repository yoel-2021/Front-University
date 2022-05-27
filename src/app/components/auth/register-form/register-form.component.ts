import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  nameValue:String = "User";
  isdelete: boolean = false;
  idUse:number= 0;
  idType:number= 2;
  fecha:Date = new Date();
  

  registerForm: FormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder,private _authservice: AuthService) { };
  
  ngOnInit(): void {this.registerForm = this._formBuilder.group({
    
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    idUserType:['', Validators.required],
    Id: [''],
    createBy:[''],
    createdAt:[''],
    updateBy: [''],
    updatedAt:[''],
    deleteBy:[''],
    deletedAt:[''],
    isDeleted:['']
  });
  
  }
  
  register()
  {
    
    
    let {name,password,email,lastName,createBy,createdAt,idUserType,Id,updateBy,updatedAt,deleteBy,deletedAt,isDeleted}= this.registerForm?.value;
    this._authservice.authRegister(name,password,email,lastName,createBy,createdAt,idUserType,Id,updateBy,updatedAt,deleteBy,deletedAt,isDeleted).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.registerForm.reset();
        console.log(this.registerForm.value);
        alert("Register was suceed");
    },
    error: (error: any)=>{
      let {name,password,email,lastName,createBy,createdAt,idUserType,Id,updateBy,updatedAt,deleteBy,deletedAt,isDeleted}= this.registerForm?.value;
      console.log(this.registerForm.value);
      console.error(`[ERROR]: something wrong happend:${error}`);
      }

  })
}}