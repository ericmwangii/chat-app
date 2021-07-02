import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss'],
})
export class MyDetailsComponent implements OnInit {
  detailsForm!: FormGroup;
  loader: any;

  constructor(private fb: FormBuilder, private chatService: ChatService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.detailsForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const param = this.detailsForm.value;
    this.chatService.join(param).subscribe(
      (resp) => {
        this.loader = false;
      },
      (error) => {
        console.error(error);
        this.loader = false;
      }
    );
  }
}
